import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Specialite} from "../Specialite";
import {SpecialiteService} from "../Specialite.service";

@Component({
  selector: 'app-insurance-list',
  templateUrl: './specialite-list.component.html',
  styleUrls: ['./specialite-list.component.css']
})

export class SpecialiteListComponent implements OnInit {

  specialites: Specialite[];

  constructor(private specialiteservice: SpecialiteService,
    private router: Router) { }
  searchText = '';

  ngOnInit(): void {
    this.getSpecialites();
  }

  private getSpecialites(){
    this.specialiteservice.getSpecialiteList().subscribe(data => {
      this.specialites = data;
    });
  }

  specialiteDetails(id: number){
    this.router.navigate(['specialite-details', id]);
  }

  updateSpecialite(id: number){
    this.router.navigate(['UpdateSpecialite', id]);
  }
  confirmationSpecialite(id: number){
    this.router.navigate(['pay-specilite', id]);
  }

  deleteSpecialite(id: number){
    this.specialiteservice.deleteSpecialite(id).subscribe( data => {
      console.log(data);
      this.getSpecialites();
    })
  }
}
