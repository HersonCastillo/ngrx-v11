import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoreModule } from './modules/core/core.module';
import { appReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production }),
    CoreModule,
    EffectsModule.forRoot(appEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
