import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showMoreVisible: boolean = true;
  userDetail: User;
  cardsSource = [
    {
      id: 1,
      title: "Card 1",
      description: "Card 1 description with more details"
    },
    {
      id: 2,
      title: "Card 2",
      description: "Card 2 description with more details"
    },
    {
      id: 3,
      title: "Card 3",
      description: "Card 3 description with more details"
    },
    {
      id: 4,
      title: "Card 4",
      description: "Card 4 description with more details"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.userDetail = <User>JSON.parse(localStorage.getItem("user"));
  }

  showMore() {
    let lastIndex = (this.cardsSource[this.cardsSource.length - 1]?.id ?? 0) + 1;
    this.showMoreVisible = lastIndex <= 7;
    let newData = [];
    for (let index = 0; index < 4; index++) {
      newData.push({
        id: lastIndex,
        title: `Card ${lastIndex}`,
        description: `Card ${lastIndex} description with more details`
      });
      lastIndex++;
    }
    this.cardsSource.push(...newData);
  }
}
