import { MapsComponent } from './maps/maps.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {path: "users", component: UsersComponent},
  {path: "occurrences", component: OccurrencesComponent},
  {path: "map", component: MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
