import { AnimationsService } from './services/animations.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocketsService } from './services/sockets.service';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';

// import * as Hammer from 'hammerjs';
// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammertimeDirective } from './directives/hammertime.directive';
import { FacebookService } from './services/facebook.service';
import { HttpClientModule } from '@angular/common/http';

// export class MyHammerConfig extends HammerGestureConfig {
//   overrides = <any>{
//     'swipe': { direction: Hammer.DIRECTION_ALL }
//   }
// }

const config: SocketIoConfig = { url: 'wss://fourinline.herokuapp.com/', options: {'forceNew': true}};

@NgModule({
  declarations: [
    AppComponent,
    HammertimeDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    DeviceDetectorModule.forRoot(),
  ],
  providers: [
    AnimationsService,
    SocketsService,
    FacebookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
