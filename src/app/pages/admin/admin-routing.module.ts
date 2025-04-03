import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagerPageComponent } from './users-manager-page/users-manager-page.component';
import { IngredientManagerPageComponent } from './ingredient-manager-page/ingredient-manager-page.component';
//import { AdminGuard } from '../../core/admin.guard';


const routes: Routes = [
    { path: 'users', component: UsersManagerPageComponent },
    { path: 'ingredients', component: IngredientManagerPageComponent }
  ];

// const routes: Routes = [
//   { path: 'users', component: UsersManagerPageComponent, canActivate: [AdminGuard] },
//   { path: 'ingredients', component: IngredientManagerPageComponent, canActivate: [AdminGuard] }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
