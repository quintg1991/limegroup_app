import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Meet our Team",
      url: "/list",
      icon: "people"
    },
    {
      title: "Services",
      url: "/list",
      icon: "cart"
    },
    {
      title: "Industries",
      url: "/list",
      icon: "business"
    },
    {
      title: "Locations",
      url: "/list",
      icon: "locate"
    },
    {
      title: "Careers",
      url: "/list",
      icon: "briefcase"
    },
    {
      title: "Blog",
      url: "/list",
      icon: "paper-plane"
    },
    {
      title: "Contact",
      url: "/list",
      icon: "call"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
