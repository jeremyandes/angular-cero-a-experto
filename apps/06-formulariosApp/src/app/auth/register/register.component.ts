import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegExpEnum } from 'src/app/shared/enums/regExp.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      fullname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(RegExpEnum.FULL_NAME),
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(RegExpEnum.EMAIL),
      ]],
      username: ['', [Validators.required, this.isUsernameLike]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  invalidField(field: string) {
    return this.form.get(field)?.invalid && this.form.get(field)?.touched;
  }

  isUsernameLike(control: FormControl): ValidationErrors | null {
    const value = control?.value.trim().toLowerCase();
    return value === 'jeremyandes'
      ? {
        usernameMatch: true,
      }
      : null;
  }

  submitForm(): void {
    console.log(this.form.value);

    this.form.markAllAsTouched();
  }

}
