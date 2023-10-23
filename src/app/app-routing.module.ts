// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MicroImprovementComponent } from './modules/micro-improvement/micro-improvement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'micro-improvement', component: MicroImprovementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
