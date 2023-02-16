import { MembersService } from 'src/app/_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { Pagination } from '../_models/pagination';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Member[] | undefined;
  // TODO create likeParms.ts in _models/
  predicate= 'liked';
  pageNumber =1;
  pageSize = 8;
  pagination: Pagination | undefined;

  constructor(private memberServie: MembersService)
  {

  }
  ngOnInit():void {
    this.loadLikes();
  }
  loadLikes()
  {
    this.memberServie.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe({
      next: response => {
        this.members = response.result;
        this.pagination = response.pagination;
      }
    })
  }
  pageChanged(event:any) {
    if(this.pageNumber !== event.page){
    this.pageNumber = event.page;
    this.loadLikes();
    }
  }
}
