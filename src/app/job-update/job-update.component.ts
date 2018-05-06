import { Component, OnInit } from '@angular/core';
import {job} from '../../interfaces/job';
import {JobService} from '../../services/job.service';
import {Params, Router} from '@angular/router';
import {LoaderService} from '../../services/loader.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {


  id: any;

  job: job;
  showLoader: boolean;

  constructor(private route: ActivatedRoute, private jobService: JobService, private router: Router, private loaderService: LoaderService) {

    this.job=new job();
   this.route.params.subscribe((params:Params)=>{this.id=params})



    }

  ngOnInit() {



      this
      .loaderService
      .status
      .subscribe((val: boolean) => {
        this.showLoader = val;
      });


  }




  UpdateJob() {


    this.job.id=this.id.id;

    this
      .loaderService
      .display(true);
    this
      .jobService
      .update(this.job)
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



}
