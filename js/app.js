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
        if (this.operandoAtual === '') return
        if (this.operandoAnterior !== ''){
            this.computa()
        }
        this.operacao = operacao
        this.operandoAnterior = this.operandoAtual
        this.operandoAtual = ''

    }

    computa(){
        let computacao
        const ant = parseFloat(this.operandoAnterior)
        const atual = parseFloat(this.operandoAtual)
        if (isNaN(ant) || isNaN(atual)) return
        switch (this.operacao) {
            case '+':
                computacao = ant + atual
                break
            case '-':
                computacao = ant - atual
                break
            case '*':
                computacao = ant * atual
                break
            case '÷':
                computacao = ant / atual
                break
            default:
                return
        }
        this.operandoAtual = computacao
        this.operacao = undefined
        this.operandoAnterior = ''
    }

    atualizaTela(){
        this.operandoAtualTextElement.innerText = this.operandoAtual
        this.operandoAnteriorTextElement.innerText = this.operandoAnterior
    }

}

const botaoNumero = document.querySelectorAll("#numero");
const botaoOperacao = document.querySelectorAll("#operação");
const botaoDelete = document.querySelector("#delete");
const botaoIgual = document.querySelector("#igual");
const botaoAC = document.querySelector("#allclear");
const operandoAtualTextElement = document.querySelector("#atual");
const operandoAnteriorTextElement = document.querySelector("#anterior");


const calculadora = new Calculadora(operandoAnteriorTextElement, operandoAtualTextElement)

botaoNumero.forEach(botao => {
    botao.addEventListener('click', () => {
        calculadora.escreveNumero(botao.innerText)
        calculadora.atualizaTela()
    })
})

botaoOperacao.forEach(botao => {
    botao.addEventListener('click', () => {
        calculadora.escolheOperacao(botao.innerText)
        calculadora.atualizaTela()
    })
})

botaoIgual.addEventListener('click', botao =>{
    calculadora.computa()
    calculadora.atualizaTela()
})

botaoAC.addEventListener('click', botao =>{
    calculadora.limpa()
    calculadora.atualizaTela()
})