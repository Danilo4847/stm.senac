import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Home } from 'src/app/models/home';
import { Itinerario } from 'src/app/models/itinerario';
import { HomeService } from 'src/app/services/home.service';
import { ItinerarioService } from 'src/app/services/itinerario.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  itinerario: Itinerario[] = [];

  displayedColumns: string[] = ['motorista', 'datetimeSaida', 'encerrado', 'ações'];
  dataSource = new MatTableDataSource<Itinerario>(this.itinerario);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ItinerarioService,
    private router: Router,
    private loginService: LoginService) {

  }

  ngAfterViewInit() {
    this.findAll();
    this.validarUser();
  }
  mostrarDados: boolean = false;

  validarUser() {
    setTimeout(() => {
      if (localStorage.getItem("role") == "USER") {
        this.mostrarDados = false;
      } else {
        this.mostrarDados = true;
      }
    }, 50)
  }
  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.itinerario = resposta;
      this.dataSource = new MatTableDataSource<Itinerario>(this.itinerario);
      this.dataSource.paginator = this.paginator;
    })
  }

  materiaisPagina(): void {
    this.router.navigate(['materiais']);
  }
  cadastroUsuarioPagina(): void {
    this.router.navigate(['usuarios']);
  }
}
