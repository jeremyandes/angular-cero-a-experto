import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegExpEnum } from 'src/app/shared/enums/regExp.enum';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';


interface CustomErrors {
  required?: string | null;
  pattern?: string | null;
  emailMatch?: string | null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  customErrors: CustomErrors = {
    required: 'El campo es requerido',
    pattern: 'Tiene que ser de formato email',
    emailMatch: 'El email ya existe',
  }

  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidatorService,
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form.reset({
      fullname: 'Jeremy Andes',
      email: 'test1@test.com',
      username: 'jeremy',
      password: '123456',
      confirmPassword: '123456',
    })
  }

  get emailError(): string | null | undefined {
    const error = this.form.get('email')?.errors;

    if (error?.['required']) {
      return this.customErrors.required;
    } else if (error?.['pattern']) {
      return this.customErrors.pattern;
    } else if (error?.['emailMatch']) {
      return this.customErrors.emailMatch;
    }

    return '';
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
      ], [this.emailValidator]],
      username: ['', [Validators.required, this.isUsernameLike]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: [this.fieldsMatch('password', 'confirmPassword')]
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

  fieldsMatch(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(field1);
      const password2 = formGroup.get(field2);

      if (password?.value !== password2?.value) {
        password2?.setErrors({ passwordDontMatch: true, });
        return { passwordDontMatch: true, };
      }

      password2?.setErrors(null);

      return null;
    }
  }

  submitForm(): void {
    console.log(this.form.value);

    this.form.markAllAsTouched();
  }

}
