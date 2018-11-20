import { Tablero } from './models/tablero';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichas } from './models/ficha';
import { Juego, Jugador } from './models/juego';
import { SocketsService } from './services/sockets.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  jugador_$: Observable<Jugador>;
  jugadores_$: Observable<Jugador[]>;
  juegos_$: Observable<Juego[]>;
  juego_$: Observable<Juego>
  tablero_$: Observable<Tablero>;
  fichas_$: Observable<Fichas>;

  public isTouchDevice: boolean = false;

  constructor(
    public ws: SocketsService,
    private deviceService: DeviceDetectorService,
  ) {

  }
  ngOnInit(){
    this.isTouchDevice = this.deviceService.isMobile() || this.deviceService.isTablet();
  }

  newUser(username) {
    this.ws.newPlayer(username);
  }




}
