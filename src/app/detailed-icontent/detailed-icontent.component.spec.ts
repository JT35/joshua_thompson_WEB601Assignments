import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedIContentComponent } from './detailed-icontent.component';

describe('DetailedIContentComponent', () => {
  let component: DetailedIContentComponent;
  let fixture: ComponentFixture<DetailedIContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedIContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedIContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
