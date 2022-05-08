import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Heroe } from "../interfaces/heroe.interface";

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    url: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<object> {
        return this.http.get<object>(`${this.url}/users`);
    }
    public getHeroes(): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${this.url}/heroes`);
    }
    public getHeroe(id: string): Observable<object> {
        return this.http.get(`${this.url}/heroes/${id}`);
    }

}