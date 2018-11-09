import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-toast-custom',
  templateUrl: './toast-custom.component.html',
  styleUrls: ['./toast-custom.component.css']
})
export class ToastCustomComponent implements OnInit {
  
  public configuration: Object = {
    'title': null,
    'text': null,
    'type': 'info',
    'closeButton': 'true',
    'timeOut': null,
    'positionClass': 'toast-top-center'
  };

  constructor(private _notification: NotificationService) { }

  ngOnInit() {
  }

  public showNotification(): void {
    this.configuration['closeButton'] = this.configuration['closeButton'] === 'true' ? true : false;
    console.log(this.configuration);
    this._notification.configureCustomNotification(this.configuration);
    if (this.configuration['type'] === 'info') {
      this._notification.infoCustomNotification();
    } else {
      this._notification.errorCustomNotification();
    }
  }

}
