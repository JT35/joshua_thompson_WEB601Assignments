import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieCollectionComponent } from './add-movie-collection.component';

describe('AddMovieCollectionComponent', () => {
  let component: AddMovieCollectionComponent;
  let fixture: ComponentFixture<AddMovieCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovieCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMovieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
