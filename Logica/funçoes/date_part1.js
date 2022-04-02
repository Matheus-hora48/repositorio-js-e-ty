// const data = new Date() //marco zero 01/01/1970
// console.log(data.toString())// ano mes dia h m s

const data = new Date()
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('DiaS', data.getDay())
console.log(data.toString())

console.log(Date.now()) //data em milessimo de segundo