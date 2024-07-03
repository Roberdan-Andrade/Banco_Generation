import { Conta } from "./Conta";

//Teste Contas

//Criando novas instancias
const conta1: Conta = new Conta(1, 123, 1, "Caio", 2000.00);
const conta2: Conta = new Conta(2, 123, 1, "Guilherme", 5000.00);
const conta3: Conta = new Conta(3, 123, 1, "Nix", 10000.00);

//Teste visualizar
conta1.visualizar();

console.log("---------");

//Teste saque
conta2.sacar(2000.00);
conta3.sacar(50000.00);

conta2.visualizar();
conta3.visualizar();

console.log("---------");

//Teste deposito
conta1.depositar(500.00);

conta1.visualizar();

console.log("---------");
