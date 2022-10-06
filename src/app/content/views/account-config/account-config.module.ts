import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import { AndvancedConfigComponent } from './andvanced-config/andvanced-config.component';
import { AccountConfigRoutingModule } from 'src/app/routes/account-config-routing.module';

@NgModule({
  declarations: [UserMainPageComponent, AndvancedConfigComponent],
  imports: [CommonModule, AccountConfigRoutingModule],
})
export class AccountConfigModule {}
