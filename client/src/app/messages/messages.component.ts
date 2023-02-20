import { MessageService } from './../_services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination } from '../_models/pagination';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages?: Message[];
  pagination?: Pagination;
  container = "Unread";
  pageNumber = 1;
  pageSize = 8;
  randomImage: string | undefined;
  constructor(private messageService: MessageService)
  {

  }
  ngOnInit(): void {
    this.loadMessages();
    this.randomImage = this.getRandomImage();
  }

  loadMessages()
  {
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe({
      next: response => {
        this.messages = response.result;
        this.pagination = response.pagination;
      }
    })
  }

  pageChanged(event: any)
  {
    if(this.pageNumber !== event.page)
    {
      this.pageNumber = event.page;
      this.loadMessages();
    }
  }
  getRandomImage() {
    const images = 15
    const rndInt = Math.floor(Math.random() * images) + 1
    const image = './assets/user_images/' + rndInt +'.jpg'
    return image;
  }

}
