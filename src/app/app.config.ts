import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {questionsReducer} from './store/reducers/questions.reducer';
import {QuestionsEffects} from './store/effects/questions.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(questionsReducer),
    provideEffects(QuestionsEffects)
  ]
};
