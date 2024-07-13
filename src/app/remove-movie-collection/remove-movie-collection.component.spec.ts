import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMovieCollectionComponent } from './remove-movie-collection.component';

describe('RemoveMovieCollectionComponent', () => {
  let component: RemoveMovieCollectionComponent;
  let fixture: ComponentFixture<RemoveMovieCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveMovieCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveMovieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
