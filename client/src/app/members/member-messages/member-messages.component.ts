import { NgForm } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm?: NgForm
  @Input() username?: string;
  randomImage: string | undefined;
  messageContent ='';
  loading = false;

  constructor(public messageService: MessageService)
  {

  }
  ngOnInit(): void {
    this.randomImage = this.getRandomImage();
  }

  getRandomImage() {
    const images = 15
    const rndInt = Math.floor(Math.random() * images) + 1
    const image = './assets/user_images/' + rndInt +'.jpg'
    return image;
  }
  sendMessage()
  {
    if(!this.username) return;
    this.loading = true;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm?.reset();
    }).finally(() => this.loading = false);
  }
}
