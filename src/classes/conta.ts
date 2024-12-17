export class Conta {
    constructor(private _numero: number,
    private _titular: string,
    private _saldo: number){
        this.titular = _titular
    }

    // metodo get
    public get numero(): number{
        return this._numero
    }

    public get titular(): string {
        return this._titular.toUpperCase()
    }

    public get saldo(): number {
        return this._saldo
    }

    // metodo set

    public set titular(titular: string){
        this._titular = titular.trim().toLowerCase()
    }

    public set numero(numero: number){
        this._numero = numero
    }
    
    public depositar(){
        
    }

    public set saldo(saldo: number){
        if(saldo <= 0){
            throw new Error('Preço inválido')
        }
        this._saldo = saldo
    }
}