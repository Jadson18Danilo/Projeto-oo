export class Retangulo{
    constructor(
        private _base: number,
        private _altura: number,
        {
    }

    // metodo get
    public get cor(): string {
        return this._cor.toUpperCase()
    }
    
    // metodo set

    public mudar(trocarCor: Retangulo, cor: string): string {
        this._cor = cor;
        return this._cor;
    }

}