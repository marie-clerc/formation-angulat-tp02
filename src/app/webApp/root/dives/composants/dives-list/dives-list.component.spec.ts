import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivesListComponent } from './dives-list.component';

describe('DivesListComponent', () => {
  let component: DivesListComponent;
  let fixture: ComponentFixture<DivesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
