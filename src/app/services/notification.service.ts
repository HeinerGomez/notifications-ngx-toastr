import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  private notification: {};

  constructor(private toastNotification: ToastrService) {

  }

  public configureCustomNotification( options: {} ): void {
    this.notification = options;
  }

  public infoGenericNotification( message: string ): void {
    this.toastNotification.info( message );
  }

  public errorGenericNotification( message: string ): void {
    this.toastNotification.error( message );
  }

  public infoCustomNotification(): void {
    this.toastNotification.info(this.notification['text'], this.notification['title'], this.notification);
  }

  public errorCustomNotification(): void {
    this.toastNotification.error(this.notification['text'], this.notification['title'], this.notification);
  }

}
