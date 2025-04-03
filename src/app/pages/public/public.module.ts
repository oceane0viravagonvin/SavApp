import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LegalNoticesPageComponent } from './legal-notices-page/legal-notices-page.component';

@NgModule({
    declarations: [
    LegalNoticesPageComponent
  ],
    imports: [
        CommonModule,
        PublicRoutingModule
    ]
})
export class PublicModule { }