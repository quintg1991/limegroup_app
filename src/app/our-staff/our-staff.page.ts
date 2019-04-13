import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-staff',
  templateUrl: './our-staff.page.html',
  styleUrls: ['./our-staff.page.scss'],
})

export class OurStaffPage implements OnInit {

  public members = [
    {
      name: "Brian Williamson",
      url: "/assets/images/staff/brian.jpg"
    },
    {
      name: "Mary-Margaret Epps",
      url: "/assets/images/staff/mary-margaret.png"
    },
    {
      name: "Tashina Southard",
      url: "/assets/images/staff/tashina.jpg"
    },
    {
      name: "Quint Glover",
      url: "/assets/images/staff/quint.jpg"
    },
    {
      name: "Kali Daniel",
      url: "/assets/images/staff/KaliD.png"
    },
    {
      name: "Kassie Hooks",
      url: "/assets/images/staff/kassie.jpg"
    },
    {
      name: "Joanna Butler",
      url: "/assets/images/staff/joanna.jpg"
    }
  ]

  constructor() {

  }



  ngOnInit() {

  }

}
