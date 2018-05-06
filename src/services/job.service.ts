import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import {SearchData} from "../interfaces/searchdata";

let url : string = 'http://localhost:8087/api/job';

@Injectable()
export class JobService {

    constructor(private http : Http) {}

    findById(id : string) {
        return this
            .http
            .get(url + '/' + id)
            .map(res => res.json())
            .catch(this.handleError)
    }

    findAll() {
        return this
            .http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    save(job) {
        let headers = new Headers({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url, job, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    detele(id) {
        return this
            .http
            .delete(url + '/' + id)
            .map(res => res.json())
            .catch(this.handleError)
    }

  update(job) {
    let headers = new Headers({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
    let options = new RequestOptions({headers: headers});
    return this
      .http
      .put(url+'/update', job, options)
      .map(res => res.json())
      .catch(this.handleError);
  }



    search(search : SearchData) {
        let headers = new Headers({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url + '/search', search, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
