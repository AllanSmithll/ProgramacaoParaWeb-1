import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTabelaComponent } from './listagem-tabela.component';

describe('ListagemTabelaComponent', () => {
  let component: ListagemTabelaComponent;
  let fixture: ComponentFixture<ListagemTabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemTabelaComponent]
    });
    fixture = TestBed.createComponent(ListagemTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
