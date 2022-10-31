class Calculadora {
    constructor(operandoAnteriorTextElement, operandoAtualTextElement){
        this.operandoAnteriorTextElement = operandoAnteriorTextElement
        this.operandoAtualTextElement = operandoAtualTextElement
        this.limpa()
    }

    limpa(){
        this.operandoAtual = ''
        this.operandoAnterior = ''
        this.operacao = undefined

    }

    deleta(){

    }

    escreveNumero(numero){
        if (numero === '.' && this.operandoAtual.includes('.')) return
        this.operandoAtual = this.operandoAtual.toString() + numero.toString()

    }

    escolheOperacao(operacao){

    }

    computa(){

    }

    atualizaTela(){
        this.operandoAtualTextElement.innerText = this.operandoAtual
    }

}

const botaoNumero = document.querySelectorAll("#numero");
const botaoOperacao = document.querySelectorAll("#operação");
const botaoDelete = document.querySelector("#delete");
const botaoIgual = document.querySelector("#igual");
const botaoAC = document.querySelector("#all-clear");
const operandoAtualTextElement = document.querySelector("#atual");
const operandoAnteriorTextElement = document.querySelector("#anterior");


const calculadora = new Calculadora(operandoAnteriorTextElement, operandoAtualTextElement)

botaoNumero.forEach(botao => {
    botao.addEventListener('click', () => {
        calculadora.escreveNumero(botao.innerText)
        calculadora.atualizaTela()
    })
})