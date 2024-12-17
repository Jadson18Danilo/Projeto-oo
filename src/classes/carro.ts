//export class Carro {
    // definir atributos
    /*modelo: string; 
    fabricante: string;
    ano: number;
    cor: string;
    preco: number;*/

    // definir metodo construtor
    /*constructor(private _modelo: string,
        private _fabricante: string,
        private _ano: number,
        private _cor: string,
        private _preco: number){
            this.fabricante = _fabricante
        }

    // metodo get
    public get modelo(): string {
        return this._modelo.toUpperCase()
    }

    public get fabricante(): string {
        return this._fabricante.toUpperCase()
    }

    public get ano(): number {
        return this._ano
    }

    public get cor(): string {
        return this._cor.toUpperCase()
    }

    public get preco(): number {
        return this._preco
    }
    

    // metodo set
    public set modelo(modelo: string){
        this._modelo = modelo.trim().toLowerCase()
    }

    public set fabricante(fabricante: string){
        const tamanho = fabricante.trim().length
        if (tamanho < 3) {
            throw new Error('fabricante inválido')
        }
        this._fabricante = fabricante.trim().toLowerCase()
    }

    public set ano(ano: number){
        if (ano < 1950 || ano > 2050) {
            throw new Error('ano inválido')
        }
        this._ano = ano
    }

    public set cor(cor: string){
        this._cor = cor.trim().toLowerCase()
    }

    public set preco(preco: number){
        if(preco <= 0){
            throw new Error('Preço inválido')
        }
        this._preco = preco
    }

}*/


/*Crie uma classe conta com os seguintes atributos:
- numero
- titular
- saldo
* só quem manipula o saldo é um deposito, saque ou transferência
* adicione todas as funcionalidades que acharem necessário*/
export class deposito {
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

    public set numero(numero: number){
        if(numero <= 0){
            throw new Error('inválido')
        }
        this._numero = numero
    }

    public set titular(titular: string){
        this._titular = titular.trim().toLowerCase()
    }
    
    public set saldo(saldo: number){
        if(saldo <= 0){
            throw new Error('Preço inválido')
        }
        this._saldo = saldo
    }
}