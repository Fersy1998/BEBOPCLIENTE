import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteComponent } from './pedidos-cliente.component';

describe('PedidosClienteComponent', () => {
  let component: PedidosClienteComponent;
  let fixture: ComponentFixture<PedidosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
