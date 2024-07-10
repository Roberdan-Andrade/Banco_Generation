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
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 123, 1, "Caio", 2000.00, 100.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 123, 1, "Felipe", 2000.00, 100.00));

    //Criando novas contas poupanças
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 321, 2, "Guilherme", 5000.00, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 321, 2, "Luisa", 2500.00, 27));

    //Iniciando loop do menu
    while (true) {
        console.log(colors.fg.blackstrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log(colors.fg.red,
            "               BANCO THE OLDEST HOUSE                ");
        console.log(colors.fg.gray,
            "                     (THE VAULT)                     ");
        console.log("                                                     ");
        console.log(colors.fg.blackstrong,
            "*****************************************************");
        console.log(colors.reset,
            "                                                     ");
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
        console.log(colors.fg.blackstrong,
            "*****************************************************");
        console.log(colors.reset,
            "                                                     ");

        console.log(colors.fg.whitestrong, "Entre com a opção desejada: ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.red,
                "\nBanco The Oldest House - Bem-vindo ao departamento!",
                colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.red, "\n\nCriar Conta\n\n", colors.reset);

                //Perguntas padrão
                console.log(`Digite o Numero da Agencia: `);
                agencia = readlinesync.questionInt("");

                console.log(`Digite o Nome do Titular: `);
                titular = readlinesync.question("");

                console.log(`Digite o Tipo da Conta: `);
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log(`Digite o Saldo da Conta: `);
                saldo = readlinesync.questionFloat("");

                //Perguntas especificas
                switch (tipo) {
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
                console.log(colors.fg.red, "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();
                keyPress()

                break;

            case 3:
                console.log(colors.fg.red, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);
                keyPress()

                break;

            case 4:
                console.log(colors.fg.red, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);
                if (conta !== null) {
                    //Perguntas padrão
                    console.log(`Digite o Numero da Agencia: `);
                    agencia = readlinesync.questionInt("");

                    console.log(`Digite o Nome do Titular: `);
                    titular = readlinesync.question("");

                    console.log(`Digite o Saldo da Conta: `);
                    saldo = readlinesync.questionFloat("");

                    //Perguntas especificas
                    let tipo = conta.tipo
                    switch (tipo) {
                        case 1:
                            console.log(`Digite o Limite da Conta: `);
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;

                        case 2:
                            console.log(`Digite a Data de Aniversario: `);
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                } else {
                    console.log(`\nA conta numero ${numero} não foi encontrada\n`)
                }

                keyPress()

                break;

            case 5:
                console.log(colors.fg.red, "\n\nApagar uma Conta\n\n", colors.reset);
                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);
                keyPress()

                break;

            case 6:
                console.log(colors.fg.red, "\n\nSaque\n\n", colors.reset);
                keyPress()

                break;

            case 7:
                console.log(colors.fg.red, "\n\nDepósito\n\n", colors.reset);
                keyPress()

                break;

            case 8:
                console.log(colors.fg.red, "\n\nTransferência entre Contas\n\n", colors.reset);
                keyPress()

                break;

            default:
                console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset);
                keyPress()

                break;
        }
    }

}

//Função com os dados da pessoa desenvolvedora 
export function sobre(): void {
    console.log(colors.fg.blackstrong,
        "\n*****************************************************");
    console.log(colors.reset,
        "Projeto Desenvolvido por: Roberdan Andrade");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log(colors.fg.blackstrong,
        "*****************************************************"
        , colors.reset);
}

//Função para pausar o codigo a cada execução do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
