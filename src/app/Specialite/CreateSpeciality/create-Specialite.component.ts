import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Specialite} from "../Specialite";
import {SpecialiteService} from "../Specialite.service";

@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-specialite.component.html',
  styleUrls: ['./create-specialite.component.css']
})
export class CreateSpecialiteComponent implements OnInit {
  specialites :Specialite[];

  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }

  specialite: Specialite = new Specialite();
  constructor(private specialiteservice: SpecialiteService,private router: Router) {
  }
  slectedCostDuration: string = '';
  cost: string = '';
  id: number;

  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;

  }


  ngOnInit(): void {
   this.getSpecialites();
  }

  private getSpecialites(){
    this.specialiteservice.getSpecialiteList().subscribe(data => {
      this.specialites = data;
    });
  }

  saveSpecialites(){
    this.specialiteservice.createSpecilaite(this.specialite).subscribe( data =>{
      console.log(this.specialiteservice);
      this.goTospecialiteList();
    },
    error => console.log(error));
  }

  goTospecialiteList(){
    this.router.navigate(['/RestaurantV']);
  }

  onSubmit(){
    console.log(this.specialite);
    this.saveSpecialites();
  }

  //onChange(event: any) {
    //this.cost = event.target.value;
    //this.vehicleUseService.getVehicleUseByname(this.cost).subscribe(data => {
     // this.getVehiclesUse();
      // document.getElementById('disability')?.setAttribute('value',this.vehiclesUse1.disability)
     // document.getElementById('disability')?.setAttribute('value', this.vehiclesUse1.disability)
      //this.vehiclesUse1=data;
      //console.log(this.vehiclesUse1.disability.toString());


    //})
    //console.log(this.cost)

 // }
}
