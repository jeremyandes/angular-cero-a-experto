import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegExpEnum } from 'src/app/shared/enums/regExp.enum';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidatorService,
  ) {
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
