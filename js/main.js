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
        this.operandoAtual = this.operandoAtual.toString().slice(0, -1)

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

    arrumaNumero(numero){
        const numeroString = numero.toString()
        const numeroInteiro = parseFloat(numeroString.split('.')[0])
        const numeroDecimal = numeroString.split('.')[1]
        let displayInteiro
        if (isNaN(numeroInteiro)){
            displayInteiro = ''
        } else {
            displayInteiro = numeroInteiro.toLocaleString('pt-BR', {
            maximumFractionDigits: 0 })
        }
        if (numeroDecimal != null){
            return `${numeroInteiro.toLocaleString('pt-BR', {
                maximumFractionDigits: 0 })}`+`,`+`${numeroDecimal}`
        } else {
            return displayInteiro
        }
    }

    atualizaTela(){
        this.operandoAtualTextElement.innerText = this.arrumaNumero(this.operandoAtual)
        if (this.operacao != null) {
            this.operandoAnteriorTextElement.innerText = `${this.arrumaNumero(this.operandoAnterior)} ${this.operacao}`
        } else {
            this.operandoAnteriorTextElement.innerText = ''
        }
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

botaoDelete.addEventListener('click', botao =>{
    calculadora.deleta()
    calculadora.atualizaTela()
})

botaoNumero.forEach(botao => {
    botao.addEventListener('touchstart', () => {
        e.preventDefault()
        calculadora.escreveNumero(botao.innerText)
        calculadora.atualizaTela()
    })
})

botaoOperacao.forEach(botao => {
    botao.addEventListener('touchstart', () => {
        e.preventDefault()
        calculadora.escolheOperacao(botao.innerText)
        calculadora.atualizaTela()
    })
})

botaoIgual.addEventListener('touchstart', botao =>{
    e.preventDefault()
    calculadora.computa()
    calculadora.atualizaTela()
})

botaoAC.addEventListener('touchstart', botao =>{
    e.preventDefault()
    calculadora.limpa()
    calculadora.atualizaTela()
})

botaoDelete.addEventListener('touchstart', botao =>{
    e.preventDefault()
    calculadora.deleta()
    calculadora.atualizaTela()
})
