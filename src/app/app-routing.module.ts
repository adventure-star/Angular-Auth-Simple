import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { LoginComponent } from './components/login/login.component';
import { ObserveComponent } from './observe/observe.component';
import { CreateComponent } from './components/create/create.component';
import { HttpComponent } from './components/http/http.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { ImageComponent } from './components/image/image.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ListGuard } from './guards/list.guard';
import { PrimeComponent } from './components/prime/prime.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "new", component: NewComponentComponent},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent},
  { path: "observe", component: ObserveComponent},
  { path: "create", component: CreateComponent},
  { path: "http", component: HttpComponent},
  { path: "prime", component: PrimeComponent},
  { path: "image", component: ImageComponent, canActivate: [ListGuard]},
  { path: "list", component: ListComponent, canActivate: [ListGuard]},
  { path: "view/:id", component: ViewComponent, canActivate: [ListGuard]},
  { path: "edit/:id", component: EditComponent, canActivate: [ListGuard]},
  { path: "", redirectTo: "/list", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
