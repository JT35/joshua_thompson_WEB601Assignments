import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-find-movie-collection',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './find-movie-collection.component.html',
  styleUrl: './find-movie-collection.component.scss'
})
export class FindMovieCollectionComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    id: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      alert('Route with DetailedIContentComponent. (Theoretically)');
      this.router.navigate(['/content']);
    } else {
      alert('ERROR: Required information is missing!');
    }
  }
}
