import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {JobService} from "../services/job.service";
import { JobListComponent } from './job-list/job-list.component';
import { JobInsertComponent } from './job-insert/job-insert.component';
import {LoaderService} from "../services/loader.service";
import { JobUpdateComponent } from './job-update/job-update.component';


export const AppRoutes : any = [
  { path: "", component: AppComponent},
  { path: "list", component: JobListComponent },
  { path: "insert", component: JobInsertComponent},
  {path: "update/:id" , component: JobUpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobInsertComponent,
    JobUpdateComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [JobService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
