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
  messages: Message[] = [];
  randomImage: string | undefined;
  messageContent ='';
  constructor(private messageService: MessageService)
  {

  }
  ngOnInit(): void {
    this.loadMessages();
    this.randomImage = this.getRandomImage();
  }

  loadMessages()
  {
    if(this.username)
    {
    this.messageService.getMessageThread(this.username).subscribe({
      next: messages => this.messages = messages
    })
  }
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
    this.messageService.sendMessage(this.username, this.messageContent).subscribe({
      next: message =>
      {this.messages.push(message);
      this.messageForm?.reset();
      }
    })
  }
}
