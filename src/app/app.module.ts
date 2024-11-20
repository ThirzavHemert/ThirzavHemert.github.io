import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolingComponent } from './home/tooling/tooling.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Enable scrolling to fragments
  scrollPositionRestoration: 'enabled', // Restore position when navigating back/forward
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to Home
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    NavBarComponent,
    ToolingComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
