import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from '../hasRole.directive';
import { isProductManagerDirective } from '../isProductManager.directive';

@NgModule({
  declarations: [HasRoleDirective, isProductManagerDirective],
  imports: [CommonModule],
  exports: [HasRoleDirective, isProductManagerDirective],
})
export class DirectiveModule {}
