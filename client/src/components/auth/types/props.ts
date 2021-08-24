export interface IInputProps{
    type: string,
    placeholder: string,
    value: string,
    field: string,
    cb: (field: string, value: string)=>void
}