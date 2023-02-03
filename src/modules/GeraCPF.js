import ValidaCpf from './ValidaCpf';

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatado(cpf) {
    return (
      cpf.slice(0 , 3) + '.' +
      cpf.slice(3 , 6) + '.' +
      cpf.slice(6 , 9) + '.' +
      cpf.slice(9 , 11)
    )
  }

  geraNovoCpf() {
    const cpfSemDigito = this.rand();

    const arrCpf = Array.from(cpfSemDigito, num => num);

    const sequencia = arrCpf.filter(num => arrCpf[0] === num)

    if (arrCpf.length === sequencia.length) return this.geraNovoCpf()

    const digito1 = arrCpf.push(ValidaCpf.criaDigito(arrCpf));
    const digito2 = arrCpf.push(ValidaCpf.criaDigito(arrCpf));

    return this.formatado(arrCpf.join(''))
  }
}
