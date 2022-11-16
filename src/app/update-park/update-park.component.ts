import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Park } from '../park';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-park',
  templateUrl: './update-park.component.html',
  styleUrls: ['./update-park.component.css']
})
export class UpdateParkComponent implements OnInit {

  id!: number;
  park:Park=new Park();
  constructor(private servicesService:ServicesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicesService.getParkId(this.id).subscribe(data =>{
      this.park=data;
    },error => console.log(error) 
    );
  }

  onSubmit(){
    this.servicesService.updatePark(this.id,this.park).subscribe(data =>{

      this.goToParkList();
    },error=>console.log(error)
    
    );

  }
  goToParkList(){
    this.router.navigate(['/parks']);
  }


}
