import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsDemoComponentComponent } from './effects-demo-component.component';

describe('EffectsDemoComponentComponent', () => {
  let component: EffectsDemoComponentComponent;
  let fixture: ComponentFixture<EffectsDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectsDemoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
