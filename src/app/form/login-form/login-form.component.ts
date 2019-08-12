import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }


   ngOnInit() {

   }
   loginSnackBar() {
     this.snackBar.open('login successful', '', {
       horizontalPosition: 'center',
       politeness: 'polite'
     });
   }

}
