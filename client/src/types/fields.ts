export interface ILoginFields{
    username: string,
    password: string
}


export interface IRegisterFields extends ILoginFields{
    confirm_password: ''
}