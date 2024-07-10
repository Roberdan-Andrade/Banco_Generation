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
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this._listaContas[(this._listaContas.indexOf(buscaConta))] = conta;
            console.log("\nConta atualizada com sucesso!\n");
        } else {
            console.log("\nA Conta não foi encontrada");
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this._listaContas.splice(this._listaContas.indexOf(buscaConta),1);
            console.log("\nConta excluida com sucesso!\n");
        } else {
            console.log("\nA Conta não foi encontrada");
        }
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true){
                console.log("\nO Saque foi efetuado com sucesso!\n");
            };
        } else {
            console.log("\nA Conta não foi encontrada");
        }
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.depositar(valor);
            console.log("\nO Deposito foi efetuado com sucesso!\n");
        } else {
            console.log("\nA Conta não foi encontrada");
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if(buscaContaOrigem !== null && buscaContaDestino !== null){
            if(buscaContaOrigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);
                console.log("\nA transferencia foi efetuada com sucesso!\n");
            }
        } else {
            console.log("\nA Conta de origem e/ou destino não foram encontradas");            
        }
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
