import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMesLivraisonsComponent } from './client-mes-livraisons.component';

describe('ClientMesLivraisonsComponent', () => {
  let component: ClientMesLivraisonsComponent;
  let fixture: ComponentFixture<ClientMesLivraisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientMesLivraisonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMesLivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
