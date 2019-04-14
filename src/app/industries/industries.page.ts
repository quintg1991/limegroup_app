import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.page.html',
  styleUrls: ['./industries.page.scss'],
})
export class IndustriesPage implements OnInit {

  constructor() { }

  public sites =
    [
      {
        name: "Alabama Land Services",
        url: "https://www.alabamalandservices.com"
      },
      {
        name: "Jackson Surgical Associates",
        url: "https://www.jacksonsurgical.com"
      },
      {
        name: "Garner Turf",
        url: "http://www.garnerturf.com"
      },
      {
        name: "Haywood Heritage Foundation",
        url: "https://haywoodheritage.com"
      },
      {
        name: "Shoals Scholar Dollars",
        url: "http://www.shoalsscholardollars.com"
      },
      {
        name: "Harbin Heating & Air",
        url: "http://www.harbinair.com"
      },
      {
        name: "Cottonwood Farm",
        url: "http://cottonwood-farm.com"
      },
      {
        name: "McCoy Heating & Air Conditioning",
        url: "http://www.airmccoy.com"
      },
      {
        name: "Process & Power",
        url: "http://www.processnpower.com"
      },
      {
        name: "Rock Solid Ministries",
        url: "http://www.rocksolidministries.com"
      },
      {
        name: "Scott Consulting",
        url: "http://www.scottconsulting.com"
      },
      {
        name: "Shoals Idea Audition",
        url: "http://www.shoalsideaaudition.com"
      },
      {
        name: "The Children's Clinic",
        url: "http://thechildrensclinicpa.com"
      },
      {
        name: "Woman's Clinic",
        url: "http://www.womansclinicpa.com"
      }
    ]

  ngOnInit() {
  }

}
