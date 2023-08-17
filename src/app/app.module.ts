import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleHouseComponent } from './single-house/single-house.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    SingleHouseComponent,
    HeroesListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'crisis-list', component: CrisisListComponent },
      { path: 'crisis-list/:id', component: SingleHouseComponent },
      { path: 'heroes-list', component: HeroesListComponent },
      { path: '', redirectTo: '/crisis-list', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
