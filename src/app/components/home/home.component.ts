import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

interface User {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: User = {};
  userData: any = [];

  constructor(private alldata: UserService) {
    const data = localStorage.getItem('user');
    if (data) {
      try {
        console.log('data=> ', data);
        this.user = JSON.parse(data) as User;
        console.log('user => ', this.user.fname);
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
      }
    }
  }

  ngOnInit(): void {
    this.alldata.getData().subscribe((data) => {
      console.log('my all data=> ', data.users);
      this.userData = data.users;
      console.log('this.userData=> ', this.userData);
    });
  }
}
