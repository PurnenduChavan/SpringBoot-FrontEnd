import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Park } from '../park';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.css']
})
export class CreateParkingComponent implements OnInit {

  park:Park=new Park();
  
  constructor( private servicesService:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  savePark(){
    this.servicesService.createPark(this.park).subscribe(data =>{
      console.log(data);
      this.goToParkList();
      
    },
    error =>console.log(error));
  }


goToParkList(){
  this.router.navigate(['/parks']);
}



  onSubmit(){
    console.log(this.park);
    this.savePark();
    
  }

}
