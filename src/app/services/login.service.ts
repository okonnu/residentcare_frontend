import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8081/api/v1/login';
 
  constructor(private http: HttpClient, private router: Router,) {}

  login(email: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        if (response && response.data && response.data.access_token) {
          sessionStorage.setItem('access_token', response.data.access_token);
          sessionStorage.setItem('email', email);
          this.router.navigate(['/dashboards/dashboard1']);
          return true;
        } else {
          return false;
        }
      })
    );
  }
}