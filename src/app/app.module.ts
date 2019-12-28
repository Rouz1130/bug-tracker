
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BugService } from './shared/bug.service';

import { AppComponent } from './app.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';






@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    IssueListComponent,
    EditIssueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
