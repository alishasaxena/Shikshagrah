import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './shared/components/card/card.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { MicroImprovementComponent } from './modules/micro-improvement/micro-improvement.component';
import { AppRoutingModule } from './app-routing.module';
import { InfrastructureComponent } from './modules/infrastructure/infrastructure.component';
import { ContentPageComponent } from './shared/content-page/content-page.component';
import { DropdownCheckboxComponent } from './shared/dropdown-checkbox/dropdown-checkbox.component';
import { ExplorePageComponent } from './modules/explore-page/explore-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    BlogComponent,
    MicroImprovementComponent,
    InfrastructureComponent,
    ContentPageComponent,
    DropdownCheckboxComponent,
    ExplorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
