import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../../ng-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(public ngAuthService: NgAuthService) {}

  ngOnInit(): void {}
}
