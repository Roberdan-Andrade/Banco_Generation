import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

//Teste conta corrente
    const cc1: ContaCorrente = new ContaCorrente(1, 123, 1, "Caio", 2000.00, 200.00);
    const cc2: ContaCorrente = new ContaCorrente(2, 123, 1, "Maria", 5000.00, 500.00);

    //Visualizar
    cc1.visualizar();
    console.log("\n----------\n");

    cc2.visualizar();
    console.log("\n----------\n");

    //Sacar
    cc1.sacar(2200.00);
    cc2.sacar(10000.00);

    cc1.visualizar();
    console.log("\n----------\n");

    cc2.visualizar();
    console.log("\n----------\n");
    
    //Depositar
    cc1.depositar(2500.00);
    cc1.visualizar();

//Teste conta poupança
    const cp1: ContaPoupanca = new ContaPoupanca(1, 123, 2, "Guilherme", 2500.00, 11);
    const cp2: ContaPoupanca = new ContaPoupanca(1, 123, 2, "Luisa", 7500.00, 27);

    //visualizar
    cp1.visualizar();
    console.log("\n----------\n");

    cp2.visualizar();
    console.log("\n----------\n");
