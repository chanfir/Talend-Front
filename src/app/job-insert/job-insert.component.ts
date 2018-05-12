import {Component, OnInit} from '@angular/core';
import {job} from '../../interfaces/job';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../services/loader.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpEventType, HttpResponse} from '@angular/common/http';



@Component({selector: 'app-job-insert',
  templateUrl: './job-insert.component.html',
  styleUrls: ['./job-insert.component.css']})

export class JobInsertComponent implements OnInit {





  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  job: job;
  showLoader: boolean;


  constructor( private http : Http , private jobService: JobService, private router: Router, private loaderService: LoaderService) {
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

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.jobService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }



  handleError(error) {
    return Observable.throw(error.json().error || 'Server error');
  }


}
