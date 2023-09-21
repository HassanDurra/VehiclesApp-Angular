import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {
  private url         = "http://localhost:2124/AngularDataToPhp/vehiclecreate.php";
  private dataURl     = "http://localhost:2124/AngularDataToPhp/getvehicledata.php";
  private DeleteUrl   = "http://localhost:2124/AngularDataToPhp/deletevehicleData.php";
  private EditUrl     = "http://localhost:2124/AngularDataToPhp/editvehicleData.php";
  private UpdateUrl   = "http://localhost:2124/AngularDataToPhp/updatevehicleData.php";
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
  onEdit(data:any):Observable<any>{
    return this.Http.post(this.EditUrl , data);
  }
  onUpdate(data:any):Observable<any>{
    return this.Http.post(this.UpdateUrl , data)
  }
}
