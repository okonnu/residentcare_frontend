import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
  styleUrls: ['./side-login.component.css'],
  providers: [UserService],
})

export class AppSideLoginComponent {
  options = this.settings.getOptions();
  msg = '';
  constructor(private settings: CoreService, private router: Router, private userService: UserService,) {}

  async check(uname: string, p: string) {
    try {
      const success =  await this.userService.login(uname, p);
      if (success) {
        console.log('Login successful on sidelogin' + this.userService.getUser());
        this.router.navigate(['/starter']);
      } else {
        this.msg = 'Invalid credentials';
      }
    } catch (error) {
      this.msg = 'An error occurred during login';
    }
  }
}
