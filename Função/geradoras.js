//sao funções que pode parar e continuar depois
function* geradora1(){
    //a cada vez que a função for chamada ela retorna um valor
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

function* geradora2(){
    let i = 0

    while(true){
        yield i
        i++
    }
}

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

function* geradora5(){
    yield function (){
        console.log('Teste')
    }

}

const g5 = geradora5()
const func1 = g5.next().value