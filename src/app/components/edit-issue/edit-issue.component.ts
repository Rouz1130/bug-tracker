import { Component, OnInit, NgZone } from '@angular/core';
import { BugService } from './../../shared/bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {

  IssuesList: any = [];
  updateIssueForm: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,
    public bugService: BugService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
  }

  updateForm() {
    this.updateIssueForm = this.fb.group({
      issue_name: [''],
      issue_message: ['']
    });
  }

  submitForm(){
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.updateBug(id, this.updateIssueForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
    });
  }

}
