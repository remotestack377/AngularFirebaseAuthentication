import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../../ng-auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent implements OnInit {
  constructor(public ngAuthService: NgAuthService) {}

  ngOnInit(): void {}
}
