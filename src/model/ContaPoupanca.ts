import { Conta } from "./Conta"

export class ContaPoupanca extends Conta{
    //Atributos
    private _aniversario: number;

    //Construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo:  number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo);
		this._aniversario = aniversario;
	}

    //Get e Set
	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(value: number) {
		this._aniversario = value;
	}

    //Metodo visualizar
    public visualizar(): void {
        super.visualizar();
        console.log(`Aniversario da conta: ${this._aniversario}`);
    }
}
