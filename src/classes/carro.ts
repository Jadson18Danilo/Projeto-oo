export class Carro {
    // definir atributos
    /*modelo: string; 
    fabricante: string;
    ano: number;
    cor: string;
    preco: number;*/

    // definir metodo construtor
    constructor(public modelo: string,
        private _fabricante: string,
        public ano: number,
        public cor: string,
        public preco: number){}

    // metodo get
    get fabricante() {
        return this._fabricante.toLocaleUpperCase()
    }
}
