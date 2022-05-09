import { HttpClient, HttpParams } from "@angular/common/http";
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
    public getHeroe(id: string): Observable<Heroe> {
        return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
    }
    public getSuggests(value: string): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${this.url}/heroes`, { params: { 'q': value, '_limit': 6 } });
    }
    public addHeroe(heroe: Heroe): Observable<Heroe> {
        return this.http.post<Heroe>(`${this.url}/heroes`, heroe);
    }
    public updateHeroe(heroe: Heroe): Observable<Heroe> {
        return this.http.put<Heroe>(`${this.url}/heroes/${heroe.id}`, heroe);
    }

}