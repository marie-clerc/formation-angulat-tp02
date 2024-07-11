import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBodyComponent } from './client-body.component';

describe('ClientBodyComponent', () => {
  let component: ClientBodyComponent;
  let fixture: ComponentFixture<ClientBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
