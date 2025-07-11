import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/home/landing-page/landing-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ToolingComponent } from './pages/home/tooling/tooling.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TimeLineComponent } from './pages/home/time-line/time-line.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectListItemComponent } from './pages/project-list/project-list-item/project-list-item.component';
import {MatCardModule} from '@angular/material/card';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutMeHomeComponent } from './pages/home/about-me-home/about-me-home.component';
import { DesktopTimelineComponent } from './pages/home/time-line/desktop-timeline/desktop-timeline.component';
import { MobileTimelineComponent } from './pages/home/time-line/mobile-timeline/mobile-timeline.component';
import { DesktopTlProjectComponent } from './pages/home/time-line/desktop-timeline/desktop-tl-project/desktop-tl-project.component';
import { MobileTlProjectComponent } from './pages/home/time-line/mobile-timeline/mobile-tl-project/mobile-tl-project.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Enable scrolling to fragments
  scrollPositionRestoration: 'enabled', // Restore position when navigating back/forward
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMePageComponent },
  { path: 'allProjects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
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
    FooterComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    AboutMePageComponent,
    AboutMeHomeComponent,
    DesktopTimelineComponent,
    MobileTimelineComponent,
    DesktopTlProjectComponent,
    MobileTlProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
