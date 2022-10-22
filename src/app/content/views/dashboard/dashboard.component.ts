import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/api/localStorage/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private storage: LocalStorageService, private router: Router) {}

  ngOnInit(): void {
    if (!this.storage.getAccesToken()) {
      this.router.navigate(['/']);
    }
    //jeśli token jest nieważy to wyrzuć na stronę logowania
  }
}
