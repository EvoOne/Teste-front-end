import { MapsComponent } from './maps/maps.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {path: "", component: OccurrencesComponent},
  {path: "users", component: UsersComponent},
  {path: "map", component: MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
