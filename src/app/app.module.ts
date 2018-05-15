import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './upload/http.service';

import {FileUploadModule} from 'primeng/fileupload';
import {GrowlModule} from 'primeng/components/growl/growl';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule, FileUploadModule, HttpClientModule, GrowlModule, ProgressSpinnerModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
