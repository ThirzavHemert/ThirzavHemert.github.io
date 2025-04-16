import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ToolingComponent } from './home/tooling/tooling.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TimeLineComponent } from './home/time-line/time-line.component';
import { TimelineProjectComponent } from './home/timeline-project/timeline-project.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Enable scrolling to fragments
  scrollPositionRestoration: 'enabled', // Restore position when navigating back/forward
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'projects', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    NavBarComponent,
    ToolingComponent,
    AboutMeComponent,
    TimeLineComponent,
    TimelineProjectComponent,
    FooterComponent,
    ProjectDetailComponent
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
