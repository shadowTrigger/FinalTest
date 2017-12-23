import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TacheContainerComponent } from './main/tache-container/tache-container.component';
import { OccurenceContainerComponent } from './main/occurence-container/occurence-container.component';
import { UserContainerComponent } from './main/user-container/user-container.component';
import { ListTacheComponent } from './main/tache-container/list-tache/list-tache.component';
import { ListOccurenceComponent } from './main/occurence-container/list-occurence/list-occurence.component';
import { ListUserComponent } from './main/user-container/list-user/list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TacheContainerComponent,
    OccurenceContainerComponent,
    UserContainerComponent,
    ListTacheComponent,
    ListOccurenceComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
