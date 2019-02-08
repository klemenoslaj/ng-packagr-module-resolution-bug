import { NgModule } from '@angular/core';
import { LibraryModule } from 'library';

import { Library2Component } from './library2.component';

@NgModule({
  declarations: [Library2Component],
  imports: [
    LibraryModule
  ],
  exports: [Library2Component]
})
export class Library2Module { }
