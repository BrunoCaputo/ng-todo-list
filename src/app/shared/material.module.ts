import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialComponents: any[] = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: materialComponents,
  exports: materialComponents,
})
export class MaterialModule {}
