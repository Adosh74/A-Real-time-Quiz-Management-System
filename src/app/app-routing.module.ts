import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./prof/components/dashboard/dashboard.component";
import { ProfComponent } from "./prof/prof.component";

const routes: Routes = [
    {path:'', component : ProfComponent , children :[
        {path : 'login',component: LoginComponent},
        {path : 'prof-dashboard',component: DashboardComponent}
    ]},
    {
        path:'' , redirectTo: 'prof' , pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}