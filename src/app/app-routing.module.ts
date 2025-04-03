import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // Import des routes des pages publiques :
    {
        path: '',
        loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
    },

    // Import des routes des pages utilisateurs :
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
    },

    // Import des routes des pages d'administration :
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    },
    
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
