import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  private baseUrl: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`${this.baseUrl}usuarios?q=${email}`)
      .pipe(
        delay(1500),
        map(
          resp => resp.length > 0
            ? { emailMatch: true }
            : null
        )
      );
  }

}
