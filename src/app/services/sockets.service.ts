import { Injectable, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketsService implements OnDestroy {
  private games = [];

  constructor(
    private socket: Socket,
  ) {
    this.connect();
  }

  private connect() {
    this.socket.connect();
    this.socket.on('games', games => {
      this.games = [];
    });
  }

  newPlayer(username) {
    this.socket.emit('new-player', username);
  }

  disconnect() {
    this.socket.disconnect();
  }
  ngOnDestroy() {
    this.disconnect();
  }
}
