import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    //Coleção array que vai armazenar os objetos conta
    private _listaContas: Array<Conta> = new Array<Conta>();

    //Controlador dos numeros das contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta !== null){
            buscaConta.visualizar();
        } else {
            console.log("\nA Conta Não foi encontrada");
        }
    }

    listarTodas(): void {
        for(let conta of this._listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this._listaContas.push(conta);
        console.log("\nConta cadastrada com sucesso!\n")
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigin: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Metodos auxiliares
    public gerarNumero(): number{
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for(let conta of this._listaContas){
            if(conta.numero === numero){
                return conta;
            }
        }
        return null;
    }
}
