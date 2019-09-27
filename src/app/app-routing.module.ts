import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PromoComponent } from './pages/promo/promo.component';
import { VantagensComponent } from './pages/vantagens/vantagens.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'promo' , component: PromoComponent
  },
  {
    path: 'vantagens' , component: VantagensComponent
  },
  {
    path: 'sobre' , component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
