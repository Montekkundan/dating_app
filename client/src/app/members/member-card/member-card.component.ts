import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/_services/members.service';
import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member | undefined;
  // TODO gamificaiton
  a:number = 10;
  randomImage: string | undefined;


  constructor(private memberSerive: MembersService, private toastr: ToastrService)
  {

  }
  ngOnInit() {
    this.randomImage = this.getRandomImage();
  }

  addLike(member: Member)
  {
    this.memberSerive.addLike(member.userName).subscribe({
      next: () => this.toastr.success('You have liked '+ member.knownAs)
    })
  }

  getRandomImage() {
    const images = 15
    const rndInt = Math.floor(Math.random() * images) + 1
    const image = './assets/user_images/' + rndInt +'.jpg'
    return image;
  }

}
