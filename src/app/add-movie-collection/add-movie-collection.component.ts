import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-movie-collection',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-movie-collection.component.html',
  styleUrl: './add-movie-collection.component.scss'
})
export class AddMovieCollectionComponent {

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  form = this.formBuilder.group({
    title: ['', Validators.required],
    genre: ['', Validators.required],
    imgSrc: ['', Validators.required],
    price: ['', Validators.required],
    link: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      // Add a movie collection here
      alert('Added movie collection. (Theoretically)');
      this.router.navigate(['content']);
    } else {
      alert('ERROR: Required information is missing!');
    }
  }

}
