import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMesCommandesComponent } from './client-mes-commandes.component';

describe('ClientMesCommandesComponent', () => {
  let component: ClientMesCommandesComponent;
  let fixture: ComponentFixture<ClientMesCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientMesCommandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMesCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
