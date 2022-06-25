import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  numberOfGeneratedIds: number = 0;

  constructor() { }

  public generateUniqueId(): string {
    this.numberOfGeneratedIds++;
    return uuidv4();
  }

  public getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratedIds
  }
}
