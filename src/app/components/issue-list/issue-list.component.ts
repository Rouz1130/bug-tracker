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
    this.loadEmployees();
  }

  loadEmployees() {
    return this.bugService.getIssues().subscribe((data: {}) => {
      this.IssuesList = data;
    });
  }
     // Delete issue
     deleteIusse(data){
      var index = index = this.IssuesList.map(x =>x.issue_name).indexOf(data.issue_name);
      return this.bugService.deleteBug(data.id).subscribe(res => {
        this.IssuesList.splice(index, 1);
        console.log('Issue deleted!');
       });
    }
}
