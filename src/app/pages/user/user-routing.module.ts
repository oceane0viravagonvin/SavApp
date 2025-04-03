import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagerPageComponent } from './account-manager-page/account-manager-page.component';
import { RecipeManagerPageComponent } from './recipe-manager-page/recipe-manager-page.component';
//import { AuthGuard } from '../../core/auth.guard';

const routes: Routes = [
    {path: 'account', component: AccountManagerPageComponent },
    {path: 'recipes', component: RecipeManagerPageComponent}
];

// const routes: Routes = [
//     { path: 'account', component: AccountManagerPageComponent, canActivate: [AuthGuard] },
//     { path: 'recipes', component: RecipeManagerPageComponent, canActivate: [AuthGuard] }
//   ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }