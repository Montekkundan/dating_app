import { MembersService } from './../../_services/members.service';
import { Member } from './../../_models/member';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member: Member | undefined;
  galleryOptions: NgxGalleryOptions[] =[];
  galleryImages: NgxGalleryImage[] = [];
  randomImage: string | undefined;

  constructor(private memberService: MembersService, private route: ActivatedRoute)
  {

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
  getRandomImage() {
    const images = 15
    const rndInt = Math.floor(Math.random() * images) + 1
    const image = './assets/user_images/' + rndInt +'.jpg'
    return image;
  }


}
