import {Component, OnInit} from '@angular/core';
import {job} from '../../interfaces/job';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../services/loader.service';

@Component({selector: 'app-job-insert', templateUrl: './job-insert.component.html', styleUrls: ['./job-insert.component.css']})
export class JobInsertComponent implements OnInit {

  job: job;
  showLoader: boolean;

  constructor(private jobService: JobService, private router: Router, private loaderService: LoaderService) {
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
        console.log(data);
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

  /*handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this
        .handleReaderLoaded
        .bind(this);

      reader.readAsBinaryString(file);
    }
  }*/

  /*handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.candidate.photo = btoa(binaryString);
    console.log(btoa(binaryString));
  }*/
}
