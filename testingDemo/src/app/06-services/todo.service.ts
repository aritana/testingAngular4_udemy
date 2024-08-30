import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = '...'; // Substitua pelo URL da sua API

  constructor(private http: HttpClient) {}

  add(todo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/todos`, todo).pipe(
      map(response => response) // Ajuste conforme necessário
    );
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todos`).pipe(
      map(response => response) // Ajuste conforme necessário
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/todos/${id}`).pipe(
      map(response => response) // Ajuste conforme necessário
    );
  }
}
