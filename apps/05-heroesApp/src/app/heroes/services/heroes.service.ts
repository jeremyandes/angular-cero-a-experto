import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Heroe } from "../interfaces/heroe.interface";

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    url: string = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${this.url}/users`);
    }
    public getHeroes(): Observable<object> {
        return this.http.get(`${this.url}/heroes`);
    }

}