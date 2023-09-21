import { Component , OnInit } from '@angular/core';
import { FormGroup  , FormControl} from '@angular/forms';
import { CreateServiceService } from '../VehicleServices/create-service.service';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent implements OnInit{
  constructor(private VehiclesServices : CreateServiceService){}
  counter  = 1;
  vehicleData : any [] = [];
  imagePath = "" ;
  display:boolean = false ;

  ngOnInit(): void
  {
    this.LoadData();
  }

  LoadData():void{
    this.VehiclesServices.fetchData().subscribe((response)=>{
      this.vehicleData = response ;
      console.log(this.vehicleData);
  })};
  // Adding Vehicles Form Input Data
  addVehiclesForm = new FormGroup({
    vehicleImage : new FormControl() ,
    vehicleName  : new FormControl() ,
    ownerName    : new FormControl() ,
    DeliveryDate : new FormControl()
  });
  // Now Submit Function to Call the data
  // Getting Image Path To Show Images
  onImageChange(event : Event)
  {
    // const input = event.target as HTMLInputElement;
    // if(input.files && input.files.length > 0)
    // {
    //   const file     =  input.files[0];
    //   const Fullpath =  window.URL.createObjectURL(file);
    //   this.imagePath = Fullpath;
    // }
  }
  // Submitting And Showing Images
  onsubmit(){
    let name   = this.addVehiclesForm.controls.vehicleName.value;
    let owner  = this.addVehiclesForm.controls.ownerName.value;
    let Date   = this.addVehiclesForm.controls.DeliveryDate.value;
    let allData = {
      // 'Vehicleimage'  : this.imagePath ,
      'Vehiclename'   : name ,
      'Ownername'     : owner ,
      'DateofDelivery' : Date ,
    };
    // Sending Data to Database using this function
    this.VehiclesServices.onsubmit(allData).subscribe((response) => {
      this.vehicleData = response;
    });
    // End of Sending Data
    // Showing All Data After insert

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
  onDelete(vehicleData : number)
  {
    
    this.VehiclesServices.onDelete(vehicleData).subscribe((response)=>{
      this.vehicleData = response ;
    });
  }
  // Updating Function
  updateData(vehicleData : any)
  {
    let temp:any[] = this.vehicleData.filter(data => data.id == vehicleData);
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
