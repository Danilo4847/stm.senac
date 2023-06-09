import {Injectable} from '@angular/core';
import {Veiculo} from '../models/veiculo';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginService} from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class VeiculoService {
    //Colocar url base
    baseUrl: String = "http://127.0.0.1:8080";

    constructor(private http: HttpClient,
                private snack: MatSnackBar,
                private service: LoginService) {
    }


    findAll(): Observable<Veiculo[]> {
        const url = this.baseUrl + '/veiculos';
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.service.getToken());

        return this.http.get<Veiculo[]>(url, {headers});

    }

    findbyId(id: any): Observable<Veiculo> {
        const url = this.baseUrl + '/veiculos/' + id;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.service.getToken());
        return this.http.get<Veiculo>(url, {headers});
    }

    create(veiculo: Veiculo): Observable<Veiculo> {
        const url = this.baseUrl + '/veiculos';
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.service.getToken());
        return this.http.post<Veiculo>(url, veiculo, {headers});

    }

    update(veiculo: Veiculo): Observable<Veiculo> {
        const url = this.baseUrl + '/veiculos/' + veiculo.id;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.service.getToken());
        return this.http.put<Veiculo>(url, veiculo, {headers});
    }

    delet(id: Number): Observable<any> {
        const url = this.baseUrl + '/veiculos/' + id;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.service.getToken());
        return this.http.delete(url, {headers});
    }

    message(msg: String): void {

        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['barr']

        })
    }
}
