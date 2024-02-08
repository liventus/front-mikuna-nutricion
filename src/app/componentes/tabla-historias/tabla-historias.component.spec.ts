import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHistoriasComponent } from './tabla-historias.component';

describe('TablaHistoriasComponent', () => {
  let component: TablaHistoriasComponent;
  let fixture: ComponentFixture<TablaHistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaHistoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
