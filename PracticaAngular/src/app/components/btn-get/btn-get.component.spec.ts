import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGETComponent } from './btn-get.component';

describe('BtnGETComponent', () => {
  let component: BtnGETComponent;
  let fixture: ComponentFixture<BtnGETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnGETComponent]
    });
    fixture = TestBed.createComponent(BtnGETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
