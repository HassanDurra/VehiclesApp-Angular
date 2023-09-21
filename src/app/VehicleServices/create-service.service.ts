import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {
  private url       = "http://localhost/AngularDataToPhp/vehiclecreate.php";
  private dataURl   = "http://localhost/AngularDataToPhp/getvehicledata.php";
  private DeleteUrl = "http://localhost/AngularDataToPhp/deletevehicleData.php";
  constructor(private Http : HttpClient) { }
  onsubmit(data:any):Observable<any>{
    return this.Http.post(this.url , data );

  }
  fetchData():Observable<any>{
    return this.Http.get(this.dataURl , {});
  }
  onDelete(data:any):Observable<any>{
    return this.Http.post(this.DeleteUrl , data);
  }
}
