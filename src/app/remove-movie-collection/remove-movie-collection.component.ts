import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-remove-movie-collection',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './remove-movie-collection.component.html',
  styleUrl: './remove-movie-collection.component.scss'
})
export class RemoveMovieCollectionComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    id: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      alert('Removed Movie Collection. (Theoretically)');
      this.router.navigate(['/content']);
    } else {
      alert('ERROR: Required information is missing!')
    }
  }
}
