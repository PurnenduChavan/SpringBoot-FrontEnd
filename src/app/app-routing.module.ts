import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateParkingComponent } from './create-parking/create-parking.component';
import { ParkDetailsComponent } from './park-details/park-details.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { UpdateParkComponent } from './update-park/update-park.component';

const routes: Routes = [
  {path:'parks',component:ParkingListComponent},
  {path:'create-parking',component:CreateParkingComponent},
  {path:'',redirectTo:'parks',pathMatch:'full'},
  {path:'update-park/:id',component:UpdateParkComponent},
  {path:'park-details/:id',component:ParkDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
