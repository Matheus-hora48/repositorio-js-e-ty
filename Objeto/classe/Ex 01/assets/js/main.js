class ValidaCPF {
  constructor(cpfEnviado){
    this.cpfLimpo = cpfEnviado.replace(/\D+/g, '')
  }

  sequencia(){
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
  }

  geraNovoCpf(){
    const cpfSemDigito = this.cpfLimpo.slice(0, -2)
    const digitoUm = ValidaCPF.geraDigito(cpfSemDigito)
    const digitodois = ValidaCPF.geraDigito(cpfSemDigito + digitoUm)
    this.novoCPF = cpfSemDigito + digitoUm + digitodois
  }

  static geraDigito(cpfSemDigito){
    let total = 0
    let reverso = cpfSemDigito.length + 1

    for(let num of cpfSemDigito){
      total += reverso * Number(num)
      reverso--
    }

    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : '0'
  }

  valida(){
    if(!this.cpfLimpo) return false
    if(typeof this.cpfLimpo !== 'string') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.sequencia()) return false
    this.geraNovoCpf()

    return this.novoCPF === this.cpfLimpo
  }
}

let validacpf = new ValidaCPF('070.903.015.08')
console.log(validacpf.valida())