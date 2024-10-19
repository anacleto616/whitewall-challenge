import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  contactService = inject(ContactService);

  loginForm = new FormGroup({
    apiKey: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  ngOnInit() {
    const token = localStorage.getItem('apiKey');

    if (token) this.router.navigate(['']);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const apiKey = this.loginForm.value.apiKey;

      if (apiKey) {
        this.contactService.index(apiKey).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.router.navigate(['']);
              return;
            }

            console.error('API Key is invalid or request failed');
            localStorage.removeItem('apiKey');
          },
          error: (err) => {
            console.error('Error connecting to the API', err);
            localStorage.removeItem('apiKey');
          },
        });
      }
    }
  }
}
