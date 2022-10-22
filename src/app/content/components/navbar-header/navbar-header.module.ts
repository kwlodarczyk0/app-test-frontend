import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './navbar-header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [NavbarHeaderComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [NavbarHeaderComponent],
})
export class NavbarHeaderModule {}
