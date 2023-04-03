import { MembersService } from './../../_services/members.service';
import { Member } from './../../_models/member';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { MessageService } from 'src/app/_services/message.service';
import { PresenceService } from 'src/app/_services/presence.service';
import { Message } from 'src/app/_models/message';
import { AccountService } from 'src/app/_services/account.service';
import { take } from 'rxjs';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit, OnDestroy {

  member: Member | undefined;
  galleryOptions: NgxGalleryOptions[] =[];
  galleryImages: NgxGalleryImage[] = [];
  randomImage: string | undefined;
  messageDisplay = false;
  messages: Message[] = [];
  user?: User;

  constructor(private memberService: MembersService, private route: ActivatedRoute, public presenceService: PresenceService, private messageService: MessageService, private accountService: AccountService, private router: Router)
  {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if(user) this.user = user;
      }
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {
    this.loadMember();
    this.randomImage = this.getRandomImage();
    this.galleryOptions = [
     {
      width: '450px',
      height: '450px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
     },
     {
      breakpoint: 800,
      width: '250px',
      height: '250px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    ]
  }
  ngOnDestroy(): void {
    this.messageService.stopHubConnection();
  }

  getImages(){
    if (!this.member) return [];
    const imageUrls = [];
    for(const photo of this.member.photos)
    {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url
      })
    }
    return imageUrls;

  }

  loadMember()
  {
    var username = this.route.snapshot.paramMap.get('username')
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
        this.galleryImages = this.getImages();
      }
    });
  }
  loadMessage()
  {
    if(this.member)
    {
      this.messageService.getMessageThread(this.member.userName).subscribe({
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

  //TODO use these functions in message list as well as user image, how to use these functions in another file.
  displayMessages()
  {
    this.messageDisplay = true;
    // this.loadMessage()
    if(this.user && this.member){
      this.messageService.createHubConnection(this.user, this.member.userName);
    }else
    {
      this.messageService.stopHubConnection();
    }
  }
  displayProfle()
  {
    this.messageDisplay = false;
  }
}
