import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  notifyRegistration() {

    this.snackBar.open('Registered successfully ', 'OK', {
      announcementMessage: 'registration state',
      horizontalPosition: 'right'
    });
  }
}
