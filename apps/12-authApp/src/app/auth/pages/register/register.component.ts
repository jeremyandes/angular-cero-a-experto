import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
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
      name: ['Jeremy', [Validators.required, Validators.minLength(2)]],
      email: ['test1@test.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    const { name, email, password } = this.form.value;

    this.authService.register(name, email, password).subscribe({
      next: (ok) => {
        ok === true
          ? this.router.navigate(['/dashboard'])
          : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${ok}`,
          });
      }
    })
    // this.router.navigateByUrl('/dashboard');
  }

}
