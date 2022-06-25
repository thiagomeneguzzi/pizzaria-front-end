import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const snackStyles = {
  0: 'danger',
  1: 'warning',
  2: 'success'
}
const RIGHT = 'right';
const TOP = 'top';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  public openSnackBar(message: string, type: number) {
    let config = new MatSnackBarConfig()

    config.horizontalPosition = RIGHT
    config.verticalPosition = TOP
    config.panelClass = [snackStyles[type as keyof typeof snackStyles]]
    config.duration = 3000
    
    this._snackBar.open(message, undefined, config)
  }
}
