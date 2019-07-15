import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'angular1';

  constructor( private spinerService: NgxSpinnerService){

  }

  ngOnInit() {
    this.spinner();
  }

  spinner(): void {
    this.spinerService.show();
    setTimeout(() => {
      this.spinerService.hide();
    }, 2000);

  }
}


