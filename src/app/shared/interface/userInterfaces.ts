export interface IUser{
    id:number,
    name:string,
    email:string,
    company:ICompany,
}

export interface ICompany{
    name:string,
    designation:string,
    bs:string
}


export interface IAddress{
    city: string
    street:string,
    suite:string,
    zipcode:string
}

