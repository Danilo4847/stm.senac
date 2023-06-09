import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav'

import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/components/home/home.component';
import { VeiculosComponent } from './views/components/veiculos/veiculos.component';
import { LoginComponent } from './views/components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { SedesComponent } from './views/components/sedes/sedes.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VeiculoCreateComponent } from './views/components/veiculos/veiculo-create/veiculo-create.component';
import { SedeCreateComponent } from './views/components/sedes/sede-create/sede-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoComponent } from './views/components/template/info/info.component';
import { MotoristasComponent } from './views/components/motorista/motoristas/motoristas.component';
import { MotoristaCreateComponent } from './views/components/motorista/motorista-create/motorista-create.component';
import { ItinerariosComponent } from './views/components/itinerario/itinerarios/itinerarios.component';
import { ItinerarioCreateComponent } from './views/components/itinerario/itinerario-create/itinerario-create.component';
import { ItinerarioUpdateComponent } from './views/components/itinerario/itinerario-update/itinerario-update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SnackBarComponent } from './views/components/template/snack-bar/snack-bar.component';
import { VeiculoUpdateComponent } from './views/components/veiculos/veiculo-update/veiculo-update.component';
import { MotoristaUpdateComponent } from './views/components/motorista/motorista-update/motorista-update.component';
import { SedeUpdateComponent } from './views/components/sedes/sede-update/sede-update.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DeleteDiaLogComponent } from './views/components/template/delete-dia-log/delete-dia-log.component';
import { CriarMaterialComponent } from './views/components/material/criar-material/criar-material.component';
import { MateriaisComponent } from './views/components/material/materiais/materiais.component';
import {MatInputModule} from '@angular/material/input';
//import {KeycloakAngularModule,KeycloakService} from 'keycloak-angular';
//import {initializeKeycloak} from '../app/services/keycloack.service';
import { APP_INITIALIZER } from '@angular/core';
import { LoadingComponent } from './views/components/template/loading/loading.component';
import { DestinoUpdateComponent } from './views/components/itinerario/destino-update/destino-update.component';
import { UsuarioComponent } from './views/components/usuario/usuario.component';
import { AuthGuardService } from './views/components/guards/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    VeiculosComponent,
    SedesComponent,
    VeiculoCreateComponent,
    SedeCreateComponent,
    InfoComponent,
    MotoristasComponent,
    MotoristaCreateComponent,
    ItinerariosComponent,
    ItinerarioCreateComponent,
    ItinerarioUpdateComponent,
    SnackBarComponent,
    VeiculoUpdateComponent,
    MotoristaUpdateComponent,
    SedeUpdateComponent,
    LoginComponent,
    DeleteDiaLogComponent,
    CriarMaterialComponent,
    MateriaisComponent,
    LoadingComponent,
    DestinoUpdateComponent,
    UsuarioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
  
   // KeycloakAngularModule
  ],
  providers: [
    AuthGuardService
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
