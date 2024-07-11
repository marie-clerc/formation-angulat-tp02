import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMonEspaceComponent } from './client-mon-espace.component';

describe('ClientMonEspaceComponent', () => {
  let component: ClientMonEspaceComponent;
  let fixture: ComponentFixture<ClientMonEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientMonEspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMonEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
