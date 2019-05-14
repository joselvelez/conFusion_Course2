import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  // Create a user object
  user = { username: '', password: '', remmember: false };

  // Inject the dialogref service and set it to the login component
  constructor(public dialogRef: MatDialogRef<LoginComponentComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('user: ', this.user);
    this.dialogRef.close();
  }

}
