import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './navbar-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarHeaderComponent],
})
export class NavbarHeaderModule {}
