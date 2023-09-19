import { Component } from '@angular/core';
import { FormGroup  , FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent {
  constructor(){}
  // Adding Vehicles Form Input Data
  addVehiclesForm = new FormGroup({
    vehicleImage : new FormControl() ,
    vehicleName  : new FormControl() ,
    ownerName    : new FormControl() ,
    DeliveryDate : new FormControl()
  });
  // Now Submit Function to Call the data
  counter  = 1;
  inputData : any [] = [];
  imagePath = "" ;
  display:boolean = false ;
  // Getting Image Path To Show Images
  onImageChange(event : Event)
  {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0)
    {
      const file     =  input.files[0];
      const Fullpath =  window.URL.createObjectURL(file);
      this.imagePath = Fullpath;
    }
  }
  // Submitting And Showing Images
  onsubmit(){
    let name   = this.addVehiclesForm.controls.vehicleName.value;
    let owner  = this.addVehiclesForm.controls.ownerName.value;
    let Date   = this.addVehiclesForm.controls.DeliveryDate.value;
    let allData = {
      'id'            : this.counter ,
      'Vehicleimage'  : this.imagePath ,
      'Vehiclename'   : name ,
      'Ownername'     : owner ,
      'DateofDelivery' : Date ,
    };
    this.inputData.push(allData);
    this.counter ++ ;
    this.display = this.display = false;
    this.addVehiclesForm.reset();
  }
  // Create Button To open Model
  openForm()
  {
    this.display = this.display = true;
  }
  // Close Button to Close The model
  Closebutton()
  {
    this.display = this.display = false;
    this.addVehiclesForm.reset();
  }
  // Deleting Function
  removeData(vehicleData : number)
  {
    this.inputData.splice(vehicleData , 1)
  }
  // Updating Function
  updateData(vehicleData : number)
  {
    let temp:any[] = this.inputData.filter(data => data.id == vehicleData);
    if(temp.length > 0)
    {
      this.addVehiclesForm.patchValue({
        vehicleName   : temp[0].Vehiclename ,
        ownerName     : temp[0].Ownername ,
        DeliveryDate  : temp[0].DateofDelivery ,
      })
      this.display = true;
    }
  }
}
