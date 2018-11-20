import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AnimationsService {




  private current(): number {
    return new Date().getTime() / 1000;
  }
}
