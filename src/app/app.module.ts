
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BugService } from './shared/bug.service';

import { AppComponent } from './app.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';






@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
