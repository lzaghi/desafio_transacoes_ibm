import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransacoesComponent } from './form-transacoes.component';

describe('FormTransacoesComponent', () => {
  let component: FormTransacoesComponent;
  let fixture: ComponentFixture<FormTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
