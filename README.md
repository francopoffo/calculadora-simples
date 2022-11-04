# Calculadora do Franco

Design of a calculator with simple operations and Brazilian notation.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Use the calculator on computers and mobile.
- Use the four operations available.
- Observe the numbers entered in the way they are written in Brazil (commas divide whole numbers from decimals, not periods).

### Links

- Live Site URL: [https://charming-meerkat-aeb119.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Flexbox
- JavaScript classes


### What I learned

The main challenge was to learn how to use JavaScript classes. Below the code:


```js
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
```

## Author

- Website - [Franco Poffo](https://www.linkedin.com/in/franco-poffo/)
- Frontend Mentor - [@francopoffo](https://www.frontendmentor.io/profile/francopoffo)


## Acknowledgments

I want to thank the author of the YT channel "Web Dev Simplified" for the incredible walkthrough and explendid way to teach.