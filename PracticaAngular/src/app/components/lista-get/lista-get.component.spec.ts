import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGETComponent } from './lista-get.component';

describe('ListaGETComponent', () => {
  let component: ListaGETComponent;
  let fixture: ComponentFixture<ListaGETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaGETComponent]
    });
    fixture = TestBed.createComponent(ListaGETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
