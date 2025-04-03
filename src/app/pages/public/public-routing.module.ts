import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SubscribePageComponent } from "./subscribe-page/subscribe-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { RecipeCalculatorPageComponent } from "./recipe-calculator-page/recipe-calculator-page.component";
import { LegalNoticesPageComponent } from "./legal-notices-page/legal-notices-page.component";

const routes: Routes = [
    { path: 'home', component: HomePageComponent  },
    { path: 'login', component: LoginPageComponent  },
    { path: 'subscribe', component: SubscribePageComponent  },
    { path: 'about', component: AboutPageComponent },
    { path: 'notices', component: LegalNoticesPageComponent},
    { path: 'calculator', component: RecipeCalculatorPageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }