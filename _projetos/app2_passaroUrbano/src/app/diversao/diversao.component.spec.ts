import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversaoComponent } from './diversao.component';

describe('DiversaoComponent', () => {
  let component: DiversaoComponent;
  let fixture: ComponentFixture<DiversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
