import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiereComponent } from './stagiere.component';

describe('StagiereComponent', () => {
  let component: StagiereComponent;
  let fixture: ComponentFixture<StagiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagiereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
