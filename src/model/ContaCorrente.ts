import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    //Atributos
    private _limite: number;

    //Construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo:  number, limite: number) {
        super(numero, agencia, tipo, titular, saldo)
		this._limite = limite;
	}

    //Get e Set
	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}

    //Metodo Sacar Sobrescrito
    public sacar(valor: number): boolean{
        if((this.saldo+this._limite) >= valor){
            this.saldo = this.saldo - valor;
            return true;
        }
        console.log("Saldo insuficiente!");
        return false;
    }

    //Metodo visualizar
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`);
    }
}
