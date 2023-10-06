export class Aluno {

  constructor(private _matricula: string, private _nome: string,
              private _idade: number) {
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    this._idade = value;
  }
}
