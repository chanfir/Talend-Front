import {Component, OnInit} from '@angular/core';
import {job} from "../../interfaces/job";
import {JobService} from "../../services/job.service";
import {Router} from "@angular/router";
import {LoaderService} from "../../services/loader.service";
import {SearchData} from "../../interfaces/searchdata";

@Component({selector: 'app-job-list', templateUrl: './job-list.component.html', styleUrls: ['./job-list.component.css']})
export class JobListComponent implements OnInit {

    jobs : job[];
  showLoader : boolean;
  searchData : SearchData = new SearchData();


  constructor( private jobService : JobService, private router : Router, private loaderService : LoaderService) {}



  ngOnInit() {


    this
      .loaderService
      .status
      .subscribe((val : boolean) => {
        this.showLoader = val;
      });



    this.loadJob();

  }

  loadJob() {
    this
      .loaderService
      .display(true);
    this
      .jobService
      .findAll()
      .subscribe(data => {
        this
          .loaderService
          .display(false);
        console.log(data);
        this.jobs = data;
      }, error => {
        this
          .loaderService
          .display(false);
        console.log(error);
      });
  }

/*  UpdateJob() {

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

  }*/

  deleteJob(id) {
    this
      .loaderService
      .display(true);
    this
      .jobService
      .detele(id)
      .subscribe(data => {
        this
          .loaderService
          .display(false);
        console.log(data);
        this.loadJob();
      }, error => {
        this
          .loaderService
          .display(false);
        console.log(error);
      });
  }

  onSearch() {
    this.loaderService.display(true);
    this
      .jobService
      .search(this.searchData)
      .subscribe(data => {
        this.loaderService.display(false);
        this.jobs = data;
      }, error => {
        this
          .loaderService
          .display(false);
        console.log(error.message);
      });
  }

  RunJob(id) {


    this.loaderService.display(true );
    this.jobService.run(id).subscribe(data => {

      this.loaderService.display(false);
      console.log(data);
    }, error=> {

      this.loaderService.display(false);
      console.log(error.message);
    });

  }

}
