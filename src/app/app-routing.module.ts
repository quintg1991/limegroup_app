import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule"
  },
  {
    path: "list-detail/:service",
    loadChildren: "./list-detail/list-detail.module#ListDetailPageModule"
  },
  { path: 'our-staff', loadChildren: './our-staff/our-staff.module#OurStaffPageModule' },
  { path: 'industries', loadChildren: './industries/industries.module#IndustriesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
