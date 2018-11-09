import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  
  messageInfo: Object = {
    message: null
  };

  messageError: Object = {
    message: null
  };

  constructor(private _notification: NotificationService) { 
   
  }
  
  public presentNotifiactionInfo(): void {
    this._notification.infoGenericNotification(this.messageInfo['message']);
    console.log( 'este es el mensaje: ', this.messageInfo );
  }

  public presentNotifiactionError(): void {
    this._notification.errorGenericNotification(this.messageError['message']);
    console.error( 'este es el mensaje: ', this.messageError );
  }

}
