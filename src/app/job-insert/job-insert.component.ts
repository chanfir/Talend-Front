import {Component, OnInit} from '@angular/core';
import {job} from '../../interfaces/job';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../services/loader.service';
import {Http} from '@angular/http';

import {UploadFileService} from '../../services/upload';
import {Observable} from 'rxjs/Observable';



@Component({selector: 'app-job-insert',
  templateUrl: './job-insert.component.html',
  styleUrls: ['./job-insert.component.css']})

export class JobInsertComponent implements OnInit {






  job: job;
  showLoader: boolean;


  constructor(private upload : UploadFileService , private http : Http , private jobService: JobService, private router: Router, private loaderService: LoaderService) {
    this.job = new job();
  }




  ngOnInit() {
    this
      .loaderService
      .status
      .subscribe((val: boolean) => {
        this.showLoader = val;
      });
  }



  saveJob() {
    this
      .loaderService
      .display(true);
    this
      .jobService
      .save(this.job)
      .subscribe(data => {
        this
          .loaderService
          .display(false);
        console.log('yalay yalalalay');
        console.log(data);
        console.log("json chbaath");
        this
          .router
          .navigate(['list']);
      }, error => {
        this
          .loaderService
          .display(false);
        console.log(error);
      });
  }





  handleError(error) {
    return Observable.throw(error.json().error || 'Server error');
  }


}
