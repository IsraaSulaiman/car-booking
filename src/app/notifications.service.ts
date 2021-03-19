import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor() {}

  showSuccess(msg: string, title: string = '') {}

  showError(msg: string, title: string = '') {}

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      this.showError('Something went wrong. please try another time');
    } else {
      this.showError(`${error.status}`, error.statusText);
    }
    return throwError(error);
  }
}
