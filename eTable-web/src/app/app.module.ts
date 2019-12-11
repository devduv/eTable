import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/eTable-administracion/main/menu/menu.component';
import { LoginComponent } from './components/eTable-autenticacion/login/login.component';
import { UsuariosComponent } from './components/eTable-administracion/main/administracion-usuarios/usuarios/usuarios.component';
import { MainComponent } from './components/eTable-administracion/main/main.component';
import { CrearUsuarioComponent } from './components/eTable-administracion/main/administracion-usuarios/usuarios/crear-usuario/crear-usuario.component';
import { GeneralComponent } from './components/eTable-administracion/main/administracion-sistema/general/general.component';
import { ConfiguracionComponent } from './components/eTable-administracion/main/administracion-sistema/configuracion/configuracion.component';
import { TiposUsuarioComponent } from './components/eTable-administracion/main/administracion-usuarios/tipos-usuario/tipos-usuario.component';
import { PermisosComponent } from './components/eTable-administracion/main/administracion-usuarios/permisos/permisos.component';
import { MesasComponent } from './components/eTable-administracion/main/administracion-mesas/mesas/mesas.component';
import { PerfilMesaComponent } from './components/eTable-administracion/main/administracion-mesas/perfil-mesa/perfil-mesa.component';
import { ProgramacionMesaComponent } from './components/eTable-administracion/main/administracion-mesas/programacion-mesa/programacion-mesa.component';
import { ClientesComponent } from './components/eTable-administracion/main/administracion-clientes/clientes/clientes.component';
import { TipoClientesComponent } from './components/eTable-administracion/main/administracion-clientes/tipo-clientes/tipo-clientes.component';
import { HistorialClienteComponent } from './components/eTable-administracion/main/administracion-clientes/historial-cliente/historial-cliente.component';
import { ReservacionesComponent } from './components/eTable-administracion/main/dashboard/reservaciones/reservaciones.component';
import { ImportarExportarComponent } from './components/eTable-administracion/main/reportes/importar-exportar/importar-exportar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePerfilMesaComponent } from './components/eTable-administracion/main/administracion-mesas/perfil-mesa/create-perfil-mesa/create-perfil-mesa.component';
import { EditarPermisoComponent } from './components/eTable-administracion/main/administracion-usuarios/permisos/editar-permiso/editar-permiso.component';
import { CrearTipoUsuarioComponent } from './components/eTable-administracion/main/administracion-usuarios/tipos-usuario/crear-tipo-usuario/crear-tipo-usuario.component';
import { RegisterComponent } from './components/eTable-autenticacion/register/register.component';
import { EditarUsuarioComponent } from './components/eTable-administracion/main/administracion-usuarios/usuarios/editar-usuario/editar-usuario.component';
import { ImageUploadModule } from 'angular2-image-upload';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    UsuariosComponent,
    MainComponent,
    CrearUsuarioComponent,
    GeneralComponent,
    ConfiguracionComponent,
    TiposUsuarioComponent,
    PermisosComponent,
    MesasComponent,
    PerfilMesaComponent,
    ProgramacionMesaComponent,
    ClientesComponent,
    TipoClientesComponent,
    HistorialClienteComponent,
    ReservacionesComponent,
    ImportarExportarComponent,
    CreatePerfilMesaComponent,
    EditarPermisoComponent,
    CrearTipoUsuarioComponent,
    RegisterComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
