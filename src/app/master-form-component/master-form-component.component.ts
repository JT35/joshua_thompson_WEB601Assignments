import {Component} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-master-form-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './master-form-component.component.html',
  styleUrl: './master-form-component.component.scss'
})
export class MasterFormComponentComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  form = this.formBuilder.group({
    action: ['find', Validators.required]
  });

  onSubmit() {
    switch (this.form.value.action) {
      case 'add':
        this.router.navigate(['content/add']);
        break;
      case 'find':
        this.router.navigate(['content/find']);
        break;
      case 'edit':
        this.router.navigate(['content/edit']);
        break;
      case 'remove':
        this.router.navigate(['content/remove']);
        break;
    }
  }

}
