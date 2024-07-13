import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieCollectionComponent } from './edit-movie-collection.component';

describe('EditMovieCollectionComponent', () => {
  let component: EditMovieCollectionComponent;
  let fixture: ComponentFixture<EditMovieCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMovieCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMovieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
