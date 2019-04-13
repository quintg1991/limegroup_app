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
      note: "<p style=\"white-space: pre-wrap;\">Our team has helped 100+ businesses get ahead of the competition by utilizing our knowledge of sales and marketing. We specialize in premium web design, SEO, social media marketing, app design &amp; PPC for small to medium businesses. With so many professionals vying for market share in a highly competitive industry, it is more important than ever to build a strong presence both in the community and online. Our willingness to explore new concepts, trends, programs and platforms defines our approach to marketing and exemplifies our appreciation for challenging, unique projects.</p><p style=\"white-space: pre-wrap;\">We work to make sure your site is responsive, working beautifully on any device no matter what CMS you choose.</p>",
      icon: "globe",
    },
    {
      title: "Search Engine Optimization",
      note: "<p style=\"white-space: pre-wrap;\">Audit &amp; improve your Google+ Local optimization</p><p style=\"white-space: pre-wrap;\">Easily benchmark all critical local ranking factors against your competitors and prioritize the changes that will yield the biggest improvement.</p><h3 style=\"white-space: pre-wrap;\">Never get caught out by a bad review</h3><p style=\"white-space: pre-wrap;\">Monitor your reputation on the most important review sites. Get alerts for new reviews so you can 'thank' the good ones and quickly resolve the negative ones.</p><h3 style=\"white-space: pre-wrap;\">Track thousands of keywords and stay on top of your performance</h3><p style=\"white-space: pre-wrap;\">Track organic, local &amp; maps rankings on Google, Yahoo &amp; Bing. See rankings from any location and benchmark your progress against your main competitors.</p><h3 style=\"white-space: pre-wrap;\">Know where your business is listed, where you're missing out &amp; what data needs updating</h3><p style=\"white-space: pre-wrap;\">Find &amp; monitor your existing citations &amp; NAP data. Spy on your competitors to see where they're listed so you can build powerful, new citations.</p><h3 style=\"white-space: pre-wrap;\">Clean-up &amp; create accurate citations to dominate your local search market</h3><p style=\"white-space: pre-wrap;\">Let our dedicated submissions team take the stress out of updating incorrect citations &amp; creating new ones. We affordably submit directly to over 1,600 national, local &amp; niche directories.</p>",
      icon: "logo-google"
    },
    {
      title: "Online Review Management",
      note: "",
      icon: "filing"
    },
    {
      title: "Social Media Marketing",
      note: "<h3 style=\"white-space: pre-wrap;\"><strong>Social Media</strong></h3><p style=\"white-space: pre-wrap;\">Social Media is a huge part of your online presence, and we can help you manage it.  We work to create engaging campaigns to keep you connected to your customers.  A strong social media presence can help boost your SEO, increase brand recognition, and help you gain more insight into your customer base. </p><h3 style=\"white-space: pre-wrap;\"><strong>Email Marketing</strong></h3><p style=\"white-space: pre-wrap;\">With email marketing reach your customers directly.  We can help you build campaigns that increase your site’s traffic and give your message a personal touch. Well crafted promotions help build excitement for your services,  increase your perceived value, and attract new customers. </p><h3 data-rte-preserve-empty=\"true\" style=\"white-space: pre-wrap;\"></h3>",
      icon: "logo-facebook"
    },
    {
      title: "App Development",
      note: "<h2>Events</h2><p style=\"white-space: pre-wrap;\">Planning a business event, networking event, exhibition or conference? You’ll get an informative, handy and good looking app and only pay for the time you need it.</p><ul data-rte-list=\"default\"><li><p style=\"white-space: pre-wrap;\">Attendee</p></li><li><p style=\"white-space: pre-wrap;\">Profiles</p></li><li><p style=\"white-space: pre-wrap;\">Agenda/calendar</p></li><li><p style=\"white-space: pre-wrap;\">Check-in</p></li><li><p style=\"white-space: pre-wrap;\">Speaker bio</p></li><li><p style=\"white-space: pre-wrap;\">Album</p></li><li><p style=\"white-space: pre-wrap;\">Sponsors</p></li><li><p style=\"white-space: pre-wrap;\">Livestream</p></li><li><p style=\"white-space: pre-wrap;\">Live following on social media</p></li></ul><h2 style=\"white-space: pre-wrap;\">Tourism</h2><p style=\"white-space: pre-wrap;\">Mobile tourism apps are the perfect service for any visitor. Your guests will have all tourist information right on their smartphone while visiting your city, region or museum.</p><ul data-rte-list=\"default\"><li><p style=\"white-space: pre-wrap;\">News and information</p></li><li><p style=\"white-space: pre-wrap;\">Create itinerary to follow</p></li><li><p style=\"white-space: pre-wrap;\">Book restaurant reservations</p></li><li><p style=\"white-space: pre-wrap;\">Reserve tickets for a show</p></li><li><p style=\"white-space: pre-wrap;\">Medical Information</p></li><li><p style=\"white-space: pre-wrap;\">Find nearby hotels</p></li><li><p style=\"white-space: pre-wrap;\">Bar finder / night life</p></li><li><p style=\"white-space: pre-wrap;\">Photos</p></li><li><p style=\"white-space: pre-wrap;\">Videos</p></li></ul><h2 style=\"white-space: pre-wrap;\">Restaurants</h2><p style=\"white-space: pre-wrap;\">Engage your customers, keep them up to date with the latest menu changes, catch of the day and let them make reservations via the app.</p><ul data-rte-list=\"default\"><li><p style=\"white-space: pre-wrap;\">Browse menus</p></li><li><p style=\"white-space: pre-wrap;\">Create reservations</p></li><li><p style=\"white-space: pre-wrap;\">In-App</p></li><li><p style=\"white-space: pre-wrap;\">Loyalty Card</p></li><li><p style=\"white-space: pre-wrap;\">Send push notifications</p></li><li><p style=\"white-space: pre-wrap;\">Create events</p></li><li><p style=\"white-space: pre-wrap;\">Share your location</p></li><li><p style=\"white-space: pre-wrap;\">Share the latest news</p></li><li><p style=\"white-space: pre-wrap;\">Show dish of the day</p></li></ul><h2 style=\"white-space: pre-wrap;\">Non Profit</h2><p style=\"white-space: pre-wrap;\">The smartphone is also a fact of life now for non-profit organizations. Donate money using the app, build an app for your educational institution or draw attention to a specific topic.</p><ul data-rte-list=\"default\"><li><p style=\"white-space: pre-wrap;\">Social Media in one place</p></li><li><p style=\"white-space: pre-wrap;\">Send donations easily</p></li><li><p style=\"white-space: pre-wrap;\">Build partnerships</p></li><li><p style=\"white-space: pre-wrap;\">Build a community with forums</p></li><li><p style=\"white-space: pre-wrap;\">Sponsor challenges and giveaways</p></li><li><p style=\"white-space: pre-wrap;\">Overview of employees</p></li></ul>",
      icon: "code"
    }
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private nav: NavController, public router: Router) {
    for (let i = 0; i < this.services.length; i++) {
      this.items.push({
        title: this.services[i].title,
        note: this.services[i].note,
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

  ngOnInit() { }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
