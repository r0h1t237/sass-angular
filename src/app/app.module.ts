import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnSassComponent } from './learn-sass/learn-sass.component';
import { DemoProjectModule } from './demo-project/demo-project.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LearnSassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoProjectModule,
    FontAwesomeModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
