import { LoginComponentComponent } from './../login-component/login-component.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponentComponent, {width: '500px', height: '450px'});
  }

}
