export class Conta {


    // metodo construtor e atributos
    constructor(
        private _numero: number,
        private _titular: string,
        private _saldo: number){

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

    public set titular(titular: string) {
        this._titular = titular
    }

    public set numero(numero: number) {
        this._numero = numero
    }
    
    public depositar(valor: number): number {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para depósito inválido`);
        }
        this._saldo += valor;
        return this._saldo;
    }

    public set saldo(saldo: number){
        this._saldo = saldo
    }

    public sacar(valor: number): number {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para saque inválido`);
        }
        if (this._saldo < valor) {
            throw new Error(`Saldo insuficiente para saque de R$ ${valor}`);
        }
        this._saldo -= valor;
        return this._saldo;
    }
    
}