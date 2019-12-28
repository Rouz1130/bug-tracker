import { Component, OnInit } from '@angular/core';
import { BugService } from './../../shared/bug.service';


@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  IssuesList: any = [];

  constructor(
    public bugService: BugService
  ) { }

  ngOnInit() {
  }

  loadEmployees() {
    return this.bugService.getIssues().subscribe((data: {}) => {
      this.IssuesList = data;
    });
  }

  deleteIssue(data) {
    var index = index = this.IssuesList.map(x => {
      return x.issue_name;
    }).indexOf(data.issue_name);
    return this.bugService.deleteBug(data.id).subscribe(res => {
      this.IssuesList.splice(index, 1);
      console.log('issue deleted!');
    });
  }



}
