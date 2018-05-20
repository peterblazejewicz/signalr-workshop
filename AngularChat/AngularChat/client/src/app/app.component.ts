import { Component, OnDestroy, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  connection: HubConnection = null;
  messages: string[] = [];

  ngOnInit(): void {
    this.connection = new HubConnectionBuilder().withUrl('/chat').build();
    this.connection.on('send', data => {
      this.messages.push(data);
    });
    this.connection.start().then(() => this.connection.invoke('Send', 'hello'));
  }

  ngOnDestroy(): void {
    if (this.connection) {
      this.connection.stop();
    }
  }
}
