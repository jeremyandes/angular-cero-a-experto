import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['jeremy@andes.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: (ok) => {
        ok === true
          ? this.router.navigate(['/dashboard'])
          : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${ok}`,
          });
      },
      error: (error) => console.error(error),
    });

    // this.router.navigateByUrl('/dashboard');
  }

}
