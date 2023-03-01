import { UsersComponent } from './users/component/users.component';
import { OccurrencesComponent } from './occurrences/component/occurrences.component';
import { MapsComponent } from './maps/maps.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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
