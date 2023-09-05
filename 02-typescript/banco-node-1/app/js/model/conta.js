class Conta {
    _numero;
    _saldo;
    constructor(numero, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    debitar(valor) {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }
    creditar(valor) {
        this._saldo += valor;
    }
}
//# sourceMappingURL=conta.js.map