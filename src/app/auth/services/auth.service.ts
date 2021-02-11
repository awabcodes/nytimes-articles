import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken } from '../models/auth-token';
import { Auth } from '../models/auth.model';


/**
 * Responsible for sending auth requests to the backend
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:8000/auth';

  /**
   * @param http http client
   * @constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * responsible for login
   * @param credentials the user credentials
   * @returns access token
   */
  login(credentials: Auth): Observable<AuthToken> {
    return this.http.post<any>(`${this.authUrl}/login`, credentials);
  }

  /**
   * responsible for user registraion
   * @param userInfo the user info
   * @returns access token
   */
  register(userInfo: Auth): Observable<AuthToken> {
    return this.http.post<any>(`${this.authUrl}/register`, userInfo);
  }
}
