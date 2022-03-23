import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../../ng-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public ngAuthService: NgAuthService) {}

  ngOnInit(): void {}
}
