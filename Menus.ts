import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    //Criando novas contas correntes
    const cc1: ContaCorrente = new ContaCorrente(1, 123, 1, "Caio", 2000.00, 100.00);
    const cc2: ContaCorrente = new ContaCorrente(2, 123, 1, "Felipe", 2000.00, 100.00);

    //Criando novas contas poupanças
    const cp1: ContaPoupanca = new ContaPoupanca(1, 123, 2, "Guilherme", 5000.00, 10);
    const cp2: ContaPoupanca = new ContaPoupanca(2, 123, 2, "Luisa", 2500.00, 27);

    //Iniciando loop do menu
    while (true) {
        console.log(colors.bg.black, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log(colors.fg.red,
                    "               BANCO THE OLDEST HOUSE                ");
        console.log(colors.fg.gray,
                    "                     (THE VAULT)                     ");
        console.log("                                                     ");
        console.log(colors.reset,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.red,
                        "\nBanco The Oldest House - O seu Futuro começa aqui!",
                        colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Roberdan Andrade");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();
