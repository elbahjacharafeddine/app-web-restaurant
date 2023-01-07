import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Specialite} from "../Specialite";
import {SpecialiteService} from "../Specialite.service";



@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-specialite.component.html',
  styleUrls: ['./update-specialite.component.css']
})
export class UpdateSpecialitesComponent implements OnInit {
  specialites :Specialite[];
  id: number;
  specialite: Specialite = new Specialite();
  constructor(private specialiteservice: SpecialiteService,
    private route: ActivatedRoute,
    private router: Router) { }
  slectedCostDuration: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.specialiteservice.getSpecialiteById(this.id).subscribe(data => {
      this.specialite = data;
    }, error => console.log(error));
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.slectedCostDuration = event.target.value;
  }

  private getSpecialites(){
    this.specialiteservice.getSpecialiteList().subscribe(data => {
      this.specialites = data;
    });
  }
  onSubmit(){
    this.specialiteservice.updateSpecialite(this.id, this.specialite).subscribe( data =>{
      this.goToSpecialiteList();
    }
    , error => console.log(error));
  }

  goToSpecialiteList(){
    this.router.navigate(['/RestaurantV']);
  }
}
