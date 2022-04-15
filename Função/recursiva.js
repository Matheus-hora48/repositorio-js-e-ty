//uma função que vai chamar ela de volta quando se envoca dentro dela mesma 
function recursiva(max){
    if (max >= 10) return
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)