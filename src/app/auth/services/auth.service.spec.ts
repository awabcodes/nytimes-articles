import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthToken } from '../models/auth-token';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let httpMock: HttpTestingController;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should get access token', () => {

    const mockData: AuthToken = {
      access_token: 'abcdef'
    }

    service.login({ email: 'a@a.a', password: '123' }).subscribe((authToken: AuthToken) => {
      expect(authToken.access_token).toEqual(mockData.access_token);
    });

    const req = httpMock.expectOne(`${service.authUrl}/login`);
    expect(req.request.method).toEqual('POST');

    req.flush(mockData);
  });

  it('register should get access token', () => {

    const mockData: AuthToken = {
      access_token: 'abcdef'
    }

    service.register({ email: 'a@a.a', password: '123' }).subscribe((authToken: AuthToken) => {
      expect(authToken.access_token).toEqual(mockData.access_token);
    });

    const req = httpMock.expectOne(`${service.authUrl}/register`);
    expect(req.request.method).toEqual('POST');

    req.flush(mockData);
  });
});
