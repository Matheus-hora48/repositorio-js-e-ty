class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }


    falar(){
        console.log('Falando')
    }

    comer(){
        console.log('Comendo')
    }

    beber(){
        console.log('Bebendo')
    }

}

const p1 = new Pessoa('Matheus', 'Hora')
console.log(p1)