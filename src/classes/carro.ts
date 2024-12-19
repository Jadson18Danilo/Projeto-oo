export class Carro {
    // definir atributos
    /*modelo: string; 
    fabricante: string;
    ano: number;
    cor: string;
    preco: number;*/

    // definir metodo construtor
    constructor(private _modelo: string,
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

}
