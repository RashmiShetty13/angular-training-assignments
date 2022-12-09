import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddanduploadpostComponent } from './myvlog/addanduploadpost/addanduploadpost.component';
import { ViewpostComponent } from './viewmyvlog/viewpost/viewpost.component';
import { PostComponent } from './myuploadpost/post/post.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    AddanduploadpostComponent,
    ViewpostComponent,   
    AddanduploadpostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
