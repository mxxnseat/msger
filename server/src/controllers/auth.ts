import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { IAuth } from "../types/auth";
import { generateToken, TOKEN_TYPE } from "../helpers/generateTokens";
import { verifyToken } from "../helpers/verifyTokens";
import { IToken } from "../types/token";
import { IUser } from "../types/user";

class Auth implements IAuth {

    // TODO maybe this middleware for /chating/*
        async checkLogin(req: Request, res: Response) {

            const token: string | undefined = req.headers.authorization?.split(" ")[1];
            if (typeof token === "undefined") {
                return res.status(401).json({
                    login: false,
                    message: "Not authorization"
                });
            }

            const user: IUser = await User.findOne({ 'tokens.access': token });
            console.log(user);
            if (!user) {
                return res.status(401).json({
                    login: false,
                    message: "Not authorization"
                });
            }

            const verifyResult: boolean = verifyToken(user.tokens, TOKEN_TYPE.access);

            console.log(verifyResult);

            if (!verifyResult) {
                return res.status(401).json({
                    login: false,
                    message: "Not authorization"
                });
            }

            const decodeToken = jwt.decode(token);
            if (typeof decodeToken === "string" || decodeToken === null) {
                return res.status(401).json({
                    login: false,
                    message: "Not authorization"
                });
            }

            const username: string = decodeToken.username;
            const { access, refresh }: IToken = generateToken({ username });
            const userUpdateResult = await User.updateOne({ username }, {
                tokens: {
                    access,
                    refresh
                }
            });
            if (userUpdateResult.nModified === 0) {
                return res.status(500).json({
                    login: false,
                    message: "Something went wrong"
                });
            }

            res.status(200).json({
                access,
                message: "You`re logining",
                login: true
            })
        }
        async login(req: Request, res: Response) {
            const username: string | undefined = req.body.username;
            const password: string | undefined = req.body.password;

            if (typeof username === "undefined" || typeof password === "undefined" || !username.length || !password.length) {
                return res.status(400).json({
                    message: 'User or password cannot be empty'
                })
            }

            const user = await User.findOne({ username }, {});

            if (!user) {
                return res.status(404).json({
                    message: "User not found or password not correct"
                });
            }

            const match = await bcrypt.compare(password, user.password);

            if (match) {
                const { access, refresh }: IToken = generateToken({ username });

                const updateResult = await User.updateOne({ username }, {
                    tokens: {
                        access,
                        refresh
                    }
                });

                if (updateResult.nModified === 0) {
                    return res.status(500).json({
                        message: "Something went wrong"
                    });
                }

                res.status(200).json({
                    access,
                    login: true,
                });
            } else {
                return res.status(404).json({
                    message: "User not found or password not correct"
                });
            }
        }
        async register(req: Request, res: Response) {
            const { password, username }: IUser = req.body;
            try {
                const hashPassword: string = await bcrypt.hash(password, 6);
                const { access, refresh }: IToken = generateToken({ username });

                const user = new User({
                    username,
                    password: hashPassword,
                    tokens: {
                        refresh,
                        access
                    }
                });

                await user.save();

                res.status(200).json({
                    access,
                    login: true,
                })

            } catch (e) {
                res.status(500).json({
                    message: e.message
                })
                console.log(e);
            }
        }
    }

export default new Auth();