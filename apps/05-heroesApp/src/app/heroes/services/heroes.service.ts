import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    url: string = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<object> {
        return this.http.get(`${this.url}/users`);
    }
    public getHeroes(): Observable<object> {
        return this.http.get(`${this.url}/heroes`);
    }

}