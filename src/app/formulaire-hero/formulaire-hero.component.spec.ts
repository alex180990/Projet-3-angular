import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireHeroComponent } from './formulaire-hero.component';

describe('FormulaireHeroComponent', () => {
  let component: FormulaireHeroComponent;
  let fixture: ComponentFixture<FormulaireHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireHeroComponent]
    });
    fixture = TestBed.createComponent(FormulaireHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
