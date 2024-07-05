export abstract class Conta{
    //Definindo atributos da classe
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo:  number;

    //Definindo metodo construtor, responsavel por criar os objetos da classe
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo:  number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    //Difinindo metodos Get e Set 

    //Metodos Get
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo():  number {
		return this._saldo;
	}

    //Metodos Set
	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value:  number) {
		this._saldo = value;
	}

    //Metodo para sacar dinheiro da conta
    public sacar(valor: number): boolean{
        if(this._saldo < valor){
            console.log("Saldo insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    //Metodo para depositar dinheiro na conta
    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }

    //Metodo para visualizar todos os dados do objeto
    public visualizar(){
        let tipo: string = "";
        switch(this._tipo){
            case 1:
                tipo = "Conta corrente"
                break;
            
            case 2:
                tipo = "Conta poupança"
                break;
        }

        console.log(`\n******************************`);
        console.log(`Dados da conta:`);
        console.log(`******************************\n`);
        console.log(`Numero da Conta: ${this._numero}`);
        console.log(`Agencia da Conta: ${this._agencia}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Titular da Conta: ${this._titular}`);
        console.log(`Saldo da Conta: ${this._saldo.toFixed(2)}`);

    }
}
