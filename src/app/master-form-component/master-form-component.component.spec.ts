import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFormComponentComponent } from './master-form-component.component';

describe('FormComponentComponent', () => {
  let component: MasterFormComponentComponent;
  let fixture: ComponentFixture<MasterFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
