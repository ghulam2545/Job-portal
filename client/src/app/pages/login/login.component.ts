import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  password_field_type: string = 'password';
  password_visibility(): void {
    this.password_field_type = this.password_field_type === 'password' ? 'text' : 'password';
  }

  login!: Login;
  login_form!: FormGroup;
  builder: FormBuilder = new FormBuilder();

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.login_form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(role: string) {
    if (role === 'applicant') {
      this.login = this.login_form.value;

      this.authService.login_applicant(this.login).subscribe({
        next: data => {
          const { userId, username, role, token } = data;

          this.storageService.save("userId", userId);
          this.storageService.save("username", username);
          this.storageService.save("role", role)
          this.storageService.save("token", token);
          this.authService.set_login(true);
          alert('Login success');
          this.router.navigate(['']);

        },
        error: err => {
          console.error(err);
        }
      });

    } else {
      this.login = this.login_form.value;

      this.authService.login_recruiter(this.login).subscribe({
        next: data => {
          const { userId, username, role, token } = data;

          this.storageService.save("userId", userId);
          this.storageService.save("username", username);
          this.storageService.save("role", role)
          this.storageService.save("token", token);
          this.authService.set_login(true);
          alert('Login success');
          this.router.navigate(['']);

        },
        error: err => {
          console.error(err);
        }
      });

    }
  }

  reset(): void {
    this.login_form.reset();
  }

  f(value: string) {
    return this.login_form.get(value);
  }

}
