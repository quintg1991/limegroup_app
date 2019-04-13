import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private services = [
    {
      title: "Web Design",
      note:
        "Our team has helped 100+ businesses get ahead of the competition by utilizing our knowledge of sales and marketing. We specialize in premium web design, SEO, social media marketing, app design & PPC for small to medium businesses. With so many professionals vying for market share in a highly competitive industry, it is more important than ever to build a strong presence both in the community and online. Our willingness to explore new concepts, trends, programs and platforms defines our approach to marketing and exemplifies our appreciation for challenging, unique projects.We work to make sure your site is responsive, working beautifully on any device no matter what CMS you choose.",
      icon: "globe"
    },
    {
      title: "Search Engine Optimization",
      note: "",
      icon: "logo-google"
    },
    {
      title: "Online Review Management",
      note: "",
      icon: "filing"
    },
    {
      title: "Social Media Marketing",
      note: "",
      icon: "logo-facebook"
    },
    {
      title: "App Development",
      note: "",
      icon: "code"
    }
    // "Website Design",
    // "Search Engine Optimization",
    // "Online Review Management",
    // "Social Media Marketing",
    // "App Development"
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private nav: NavController, public router: Router) {
    for (let i = 0; i < this.services.length; i++) {
      // this.items.push({
      //   title: this.icons[i],
      //   // note: "This is item #" + i,
      //   icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      // });
      this.items.push({
        title: this.services[i].title,
        note: "",
        icon: this.services[i].icon
      });
    }
  }

  pushPage(service) {
    //THIS IS SUCCESSFULLY PASSING THE ENTIRE OBJECT
    console.log(service);
    let dataString = JSON.stringify(service);
    console.log(dataString);
    // this.nav.navigateForward(`/list-detail/${this}`);\
    this.router.navigate(["list-detail", dataString]);
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
