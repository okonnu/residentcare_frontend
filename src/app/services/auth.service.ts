import { DestroyRef, Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient, HttpContext } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "../environments/environment.development";
import { Login, User, LoginResponse, LoginSuccess, RestResponse } from "../types/auth.interface";
import { IS_PUBLIC } from "./auth.interceptor";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
    
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly router = inject(Router);
    private readonly jwtHelper = inject(JwtHelperService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly CONTEXT = { context: new HttpContext().set(IS_PUBLIC, true) };
    private readonly TOKEN_EXPIRY_THRESHOLD_MINUTES = 5;
    private readonly toastr = inject(ToastrService);

    get user(): WritableSignal<User | null> {
        const token = sessionStorage.getItem('access_token');
        return signal(token ? this.jwtHelper.decodeToken(token) : null);
    }

    isAuthenticated(): boolean {
        return !this.jwtHelper.isTokenExpired();
    }

    login(body: Login): Observable<RestResponse> {
        return this.http.post<RestResponse>(`${environment.apiUrl}/login`, body, this.CONTEXT)
            .pipe(
                catchError(error => {
                    if (error.status === 401) {
                        // Handle invalid credentials
                        console.error('Invalid credentials');
                    }
                    return of();
                }),
                tap(data => {
                    console.log('Login response:', data);
                    const loginSuccessData = data.data as LoginSuccess;
                    this.storeTokens(loginSuccessData);
                    console.log('Login response:', loginSuccessData);
                    this.scheduleTokenRefresh(loginSuccessData.access_token);
                    this.router.navigate(['/starter']);
                })
            );
    }

    logout(): void {
        // if you don't have any backend route to invalidate the refresh token
        // then just remove sessionStorage items and redirect to login route
        const refresh_token = sessionStorage.getItem('refresh_token');
        this.http.post<LoginResponse>(`${environment.apiUrl}/token/invalidate`, { refresh_token }, this.CONTEXT)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                sessionStorage.removeItem('user_info');
                this.router.navigate(['/login']);
            });
    }

    storeTokens(data: LoginSuccess): void {
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('user_info', JSON.stringify(data));
        sessionStorage.setItem('refresh_token', data.refresh_token);
    }

    refreshToken(): Observable<RestResponse | null> {
        const refresh_token = localStorage.getItem('refresh_token');
        if (!refresh_token) {
            return of();
        }

        return this.http.post<RestResponse>(
            `${environment.apiUrl}/token/refresh`, { refresh_token }, this.CONTEXT)
            .pipe(
                catchError(() => of()),
                tap(data => {
                    const loginSuccessData = data.data as LoginSuccess;
                    this.storeTokens(loginSuccessData);
                    this.scheduleTokenRefresh(loginSuccessData.access_token);
                })
            );
    }

    scheduleTokenRefresh(token: string): void {
        const expirationTime = this.jwtHelper.getTokenExpirationDate(token)?.getTime();
        const refreshTime = expirationTime ? expirationTime - this.TOKEN_EXPIRY_THRESHOLD_MINUTES * 60 * 1000 : Date.now();
        const refreshInterval = refreshTime - Date.now();

        if (refreshInterval > 0) {
            setTimeout(() => {
                this.refreshToken()
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe();
            }, refreshInterval);
        }
    }

}