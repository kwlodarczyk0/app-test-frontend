import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import { AndvancedConfigComponent } from './andvanced-config/andvanced-config.component';
import { AccountConfigRoutingModule } from 'src/app/routes/account-config-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DirectiveModule } from 'src/app/common/directive/directive.module';
import { MatExpansionModule } from '@angular/material/expansion';

const ACCOUNT_CONFIG_COMPONENTS = [
  UserMainPageComponent,
  AndvancedConfigComponent,
  AddUserComponent,
  //HasRoleDirective,
  //isProductManagerDirective,
];

const ACCOUNT_CONFIG_MODULES = [
  CommonModule,
  AccountConfigRoutingModule,
  MatDialogModule,
  MatCardModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  DirectiveModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [...ACCOUNT_CONFIG_COMPONENTS],
  imports: [...ACCOUNT_CONFIG_MODULES],
})
export class AccountConfigModule {}
