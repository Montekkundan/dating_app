import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  predicate= 'photo';
  ngOnInit(): void {
  }

  changePanel()
  {
    if (this.predicate == 'user') {
      this.predicate = 'photo';
    }
    else {
      this.predicate = 'user';
    }
  }

}
