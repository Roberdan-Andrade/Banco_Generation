import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;

    const tipoContas = ["Conta corrente", "Conta poupanca"];

    const contas: ContaController = new ContaController();

    //Criando novas contas correntes
    const cc1: ContaCorrente = new ContaCorrente(1, 123, 1, "Caio", 2000.00, 100.00);
    const cc2: ContaCorrente = new ContaCorrente(2, 123, 1, "Felipe", 2000.00, 100.00);

    //Criando novas contas poupanças
    const cp1: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Guilherme", 5000.00, 10);
    const cp2: ContaPoupanca = new ContaPoupanca(4, 123, 2, "Luisa", 2500.00, 27);

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

                //Perguntas padrão
                console.log(`Digite o Numero da Agencia: `);
                agencia = readlinesync.questionInt("");

                console.log(`Digite o Nome do Titular: `);
                titular = readlinesync.question("");

                console.log(`Digite o Tipo da Conta: `);
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                console.log(`Digite o Saldo da Conta: `);
                saldo = readlinesync.questionFloat("");

                //Perguntas especificas
                switch(tipo){
                    case 1:
                        console.log(`Digite o Limite da Conta: `);
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;

                    case 2:
                        console.log(`Digite a Data de Aniversario: `);
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress()
                break;

            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                keyPress()

                break;

            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);
                keyPress()

                break;

            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                keyPress()

                break;

            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                keyPress()

                break;

            case 6:
                console.log("\n\nSaque\n\n");
                keyPress()

                break;

            case 7:
                console.log("\n\nDepósito\n\n");
                keyPress()

                break;

            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                keyPress()

                break;

            default:
                console.log("\nOpção Inválida!\n");
                keyPress()

                break;
        }
    }

}

//Função com os dados da pessoa desenvolvedora 
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Roberdan Andrade");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

//Função para pausar o codigo a cada execução do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
