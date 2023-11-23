import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, tap, switchMap} from 'rxjs/operators';

// pour stocker des infos
const TOKEN_KEY = "odc-token";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token = '';

  constructor(private http: HttpClient) { 
    this.loadToken();
  }

  /**
   * Pour le process de connexion automatique
   */
  async loadToken() {
		const token = await Storage.get({ key: TOKEN_KEY });
		if (token && token.value) {
			console.log('set token: ', token.value);
			this.token = token.value;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}

  /**
   * Pour la connexion avec le mail et le mot de passe
   * @param credentials 
   * @returns 
   */
	login(credentials: any): Observable<any> {
		return this.http.post('https://reqres.in/api/login', credentials).pipe(
			map((data: any) => data.token),
			switchMap((token) => {
				return from(Storage.set({ key: TOKEN_KEY, value: token }));
			}),
			tap((_) => {
				this.isAuthenticated.next(true);
			})
		);
	}

  /**
   * Pour la deconnexion
   * @returns 
   */
	logout(): Promise<void> {
		this.isAuthenticated.next(false);
		return Storage.remove({ key: TOKEN_KEY });
	}
}