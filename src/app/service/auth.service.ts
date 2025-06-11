import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  loginUser(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}?username=${username}`);
  }
}
