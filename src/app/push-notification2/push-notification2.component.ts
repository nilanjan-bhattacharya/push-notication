import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-push-notification2',
  templateUrl: './push-notification2.component.html',
  styleUrls: ['./push-notification2.component.css']
})
export class PushNotification2Component implements OnInit {

  private title: string = 'Browser Push Notifications!';
  constructor(private _notificationService: NotificationService) {
      this._notificationService.requestPermission();
  }
  ngOnInit() {}
  notify() {
      let data: Array < any >= [];
      data.push({
          'title': 'Approval',
          'alertContent': 'Approval Alert'
      });
      data.push({
          'title': 'Request',
          'alertContent': 'Request Alert'
      });
      data.push({
          'title': 'Leave Application',
          'alertContent': 'Leave Application Alert'
      });
      data.push({
          'title': 'Approval',
          'alertContent': 'Approval Alert'
      });
      data.push({
          'title': 'To Do Task',
          'alertContent': 'To Do Task Alert'
      });
      this._notificationService.generateNotification(data);
  }

}
