import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-movie-collection',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './edit-movie-collection.component.html',
  styleUrl: './edit-movie-collection.component.scss'
})
export class EditMovieCollectionComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  form = this.formBuilder.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    genre: ['', Validators.required],
    imgSrc: ['', Validators.required],
    price: ['', Validators.required],
    link: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      // Add a movie collection here
      alert('Edited movie collection. (Theoretically)');
      this.router.navigate(['content']);
    } else {
      alert('ERROR: Required information is missing!');
    }
  }

}
