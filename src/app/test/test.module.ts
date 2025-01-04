import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, MatCardModule],
})
export class TestModule {}
