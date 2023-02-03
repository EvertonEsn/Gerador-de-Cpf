export default class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  valida() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencia(this.cpfLimpo)) return false;

    let cpfArray = Array.from(this.cpfLimpo);

    cpfArray = cpfArray.slice(0, -2);

    const digito1 = cpfArray.push(this.criaDigito(cpfArray));
    // const digito2 = criaDigito(digito1, 2);
    const digito2 = cpfArray.push(this.criaDigito(cpfArray));

    return this.cpfLimpo === cpfArray.join('');
  }

  static criaDigito(cpf) {
    let regressivo = cpf.length + 1;

    const calc = cpf.reduce((ac, val) => {
      ac = ac + Number(val) * regressivo;
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (calc % 11);

    return digito > 9 ? 0 : digito;
  }

  static sequencia(cpf) {
    const cpfSequencia = cpf.repeat(cpf[0], 11);
    return cpfSequencia === cpf;
  }
}
