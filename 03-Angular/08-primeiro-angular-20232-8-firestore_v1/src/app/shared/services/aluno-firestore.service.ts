import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {from, map, Observable} from "rxjs";
import {Aluno} from "../model/aluno";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AlunoFirestoreService {

  colecaoAlunos: AngularFirestoreCollection<Aluno>;
  NOME_COLECAO = 'alunos';

  constructor(private afs: AngularFirestore) {
    this.colecaoAlunos = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Aluno[]> {
    return this.colecaoAlunos.valueChanges({idField: 'id'});
  }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    delete aluno.id;
    return from(this.colecaoAlunos.add({...aluno}));
  }

  remover(aluno: Aluno): Observable<any> {
    return from(this.colecaoAlunos.doc(aluno.id).delete());
  }

  pesquisarPorId(id: string): Observable<Aluno> {
    return this.colecaoAlunos.doc(id).get().pipe(map(document =>
      new Aluno(id, document.data())));
  }

  atualizar(aluno: Aluno): Observable<void> {
    return from(this.colecaoAlunos.doc(aluno.id).update({...aluno}));
  }

  pesquisarPorMatricula(matricula: string): Observable<Aluno[]> {
    let alunoPorMatricula: AngularFirestoreCollection<Aluno>;
    alunoPorMatricula = this.afs.collection(this.NOME_COLECAO, ref =>
    ref.where('matricula', '==', matricula));
    return alunoPorMatricula.valueChanges();
  }
}

