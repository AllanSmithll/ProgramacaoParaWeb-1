import { TestBed } from '@angular/core/testing';

import { AlunoFirestoreService } from './aluno-firestore.service';

describe('AlunoFirestoreService', () => {
  let service: AlunoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
