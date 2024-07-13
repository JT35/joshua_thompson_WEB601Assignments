import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMovieCollectionComponent } from './find-movie-collection.component';

describe('FindMovieCollectionComponent', () => {
  let component: FindMovieCollectionComponent;
  let fixture: ComponentFixture<FindMovieCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMovieCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindMovieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
