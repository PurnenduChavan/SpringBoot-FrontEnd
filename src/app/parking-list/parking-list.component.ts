import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Park } from '../park';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {

  parks: Park[] = [];

  constructor(private servicesService:ServicesService,private router:Router) { }

  ngOnInit(): void {
    this.getParks();
  }
  private getParks(){
    this.servicesService.getParkList().subscribe(data =>{
      this.parks=data;
    })
  }

  parkdetails(id:number){
    this.router.navigate(['park-details',id]); 
  }


  updatePark(id:number){
    this.router.navigate(['update-park',id]); 


  }

  deletePark(id:number){
    this.servicesService.deletePark(id).subscribe(data =>{
      console.log(data);
      
      this.getParks();
    })
  }

  
}
