class Conta {
    private _numero;
    private _saldo;
    constructor(numero:string, saldo=0) {
        this._numero = numero;
        this._saldo = saldo;
    }

    get numero():string {
        return this._numero;
    }

    set numero(numero) {
        this._numero = numero;
    }

    get saldo() {
        return this._saldo;
    }

    debitar(valor:number) {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }

    creditar(valor:number) {
        this._saldo += valor;
    }

}
