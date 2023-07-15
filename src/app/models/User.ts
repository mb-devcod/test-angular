export class User {
    id?: string;
    nome: string
    sobrenome:string
    email: string
    password: string
    constructor(
        nome:string , sobrenome:string ,email: string, password: string) 
    {
        this.nome=nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.password = password;
    }
}