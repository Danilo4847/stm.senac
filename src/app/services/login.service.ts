import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private tokenKey = 'access_token';
  private jwtHelper: JwtHelperService;

  constructor(
    private router: Router,
    private http: HttpClient,


  ) {
    this.jwtHelper = new JwtHelperService();
  }


  resultadoToke: boolean = false;
  /*
    gerarToken(user: string, senha: string) {
      const data = "grant_type=password&client_id=api-transportes-client&username=" + user + "&password=" + senha;
  
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
  
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
  
  
            const response = JSON.parse(this.responseText);
            const accessToken = response.access_token;
            localStorage.setItem("token", accessToken);
          }
  
  
  
        }
      });
  
      xhr.open("POST", "http://localhost:80/realms/master/protocol/openid-connect/token");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
      xhr.send(data);
      return this.getToken();
    }
  */

  mostrarMenu = new EventEmitter<boolean>();
  validarUser: boolean = false;

  gerarToken(user: string, senha: string): Promise<boolean> {
    const data = `grant_type=password&client_id=api-transportes-client&username=${user}&password=${senha}`;
    const url = 'http://127.0.0.1:8081/realms/master/protocol/openid-connect/token';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise<boolean>((resolve) => {
      this.http.post(url, data, { headers, withCredentials: true })
        .subscribe(
          (response: any) => {
            const accessToken = response.access_token;
            localStorage.setItem('token', accessToken);
            this.validarUser = true;
            resolve(true);
            this.mostrarMenu.emit(true)
          },
          (error) => {
            this.validarUser = false;
            resolve(false);
            this.mostrarMenu.emit(false)
          }
        );
    });
  }

  usuarioAutenticado() {
    return this.validarUser;
  }

  getToke() {
    const url = 'http://127.0.0.1:8081/realms/master/protocol/openid-connect/token';
    const body = {
      grant_type: 'password',
      client_id: 'api-transportes-client',
      username: 'gabriel',
      password: 'gabriel'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(url, this.transformRequestParams(body), { headers });
  }

  private transformRequestParams(params: any): string {
    const formBody: string[] = [];
    for (const property in params) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    console.log(formBody)
    return formBody.join('&');
  }

  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    this.mostrarMenu.emit(true)
    this.getRoles(localStorage.getItem("token")!)
    this.getPreferredUsername(localStorage.getItem("token")!);
    return localStorage.getItem("token")!;
  }

  removeToken(): void {
    localStorage.removeItem("token");
//    localStorage.removeItem("nome");
  //  localStorage.removeItem("role");
    this.router.navigate(["/"])
    this.mostrarMenu.emit(false);
  }


  decodeToken(token: string): any {
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken;
  }

  getRoles(token: string): string[] {
    const decodedToken = this.decodeToken(token);
    const resourceAccess = decodedToken.resource_access || {};
    const roles = resourceAccess['api-transportes-client']?.roles || [];
    localStorage.setItem('role', roles[0]);
    console.log(roles)
    return roles;
  }

  getPreferredUsername(token: string): string {
    const decodedToken = this.decodeToken(token);
    const preferredUsername = decodedToken.preferred_username || '';
    console.log(preferredUsername)
    localStorage.setItem('nome', preferredUsername);
    return preferredUsername;
  }

}
