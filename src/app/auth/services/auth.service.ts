import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken } from '../models/auth-token';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) { }

  login(credentials: Auth): Observable<AuthToken> {
    console.log('Login');
    return this.http.post<any>(`${this.authUrl}/login`, credentials);
  }

  register(credentials: Auth): Observable<AuthToken> {
    console.log('Register');
    return this.http.post<any>(`${this.authUrl}/register`, credentials);
  }
}
