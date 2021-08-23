import { Request, Response } from "express";

export interface IAuth {
    login: (req: Request, res: Response) => void;
    register: (req: Request, res: Response) => void;
}