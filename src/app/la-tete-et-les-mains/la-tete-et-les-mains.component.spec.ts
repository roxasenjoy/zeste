import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTeteEtLesMainsComponent } from './la-tete-et-les-mains.component';

describe('LaTeteEtLesMainsComponent', () => {
  let component: LaTeteEtLesMainsComponent;
  let fixture: ComponentFixture<LaTeteEtLesMainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaTeteEtLesMainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaTeteEtLesMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
