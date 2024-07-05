import { Conta } from "../model/Conta";

export interface ContaRepository{
    //Metodos CRUD
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    //Metodos bancarios
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigin: number, numeroDestino: number, valor: number): void;
}
