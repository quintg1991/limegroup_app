import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavParams, ModalController } from "@ionic/angular";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-list-detail",
  templateUrl: "./list-detail.page.html",
  styleUrls: ["./list-detail.page.scss"]
})
export class ListDetailPage implements OnInit {
  constructor(public activateRoute: ActivatedRoute) {}

  service = null;

  ngOnInit() {
    let dataRevieve = this.activateRoute.snapshot.paramMap.get("service");
    console.log(dataRevieve);
    this.service = JSON.parse(dataRevieve);
    console.log(this.service);
  }
}
