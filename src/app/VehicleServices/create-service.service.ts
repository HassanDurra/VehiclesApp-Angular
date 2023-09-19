import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {
  private url   = "http://localhost/AngularDataToPhpvehiclecreate.php";
  constructor(private Http : HttpClient) { }
  onsubmit(data:any):Observable<any>{
    return this.Http.post(this.url , data );
  }

}
