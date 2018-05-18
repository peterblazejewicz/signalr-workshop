import { Component, OnInit, OnDestroy } from '@angular/core';

import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'app';
  connection: HubConnection = null;

  ngOnInit(): void {
    this.connection = new HubConnectionBuilder()
      .withUrl('/chat')
      .build();
    this.connection.on('send', data => {
      console.log(data);
    });
    this.connection.start()
      .then(() => this.connection.invoke('Send', 'hello'));
  }

  ngOnDestroy(): void {
    if (this.connection) {
      this.connection.stop();
    }
  }

}
