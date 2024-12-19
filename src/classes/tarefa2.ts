export class Quadrado{
    constructor(
        private _cor: string,
        private _circunferencia: number,
        private _material: string){
    }

    // metodo get
    public get cor(): string {
        return this._cor.toUpperCase()
    }

    // metodo set

    public mudar(trocarCor: Quadrado, cor: string): string {
        this._cor = cor;
        return this._cor;
    }

}


