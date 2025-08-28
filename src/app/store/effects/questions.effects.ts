import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {QuestionService} from '../../core/services/question.service';
import * as actions from '../question.actions';
import {catchError, map, of, switchMap} from 'rxjs';

export class QuestionsEffects {
  private actions$ = inject(Actions);
  private questionsService = inject(QuestionService);

  questions$ = createEffect(() => this.actions$.pipe(ofType(actions.loadQuestionsData),
    switchMap(() => this.questionsService.getQuestions()
      .pipe(map((questions) => actions.loadQuestionsDataSuccess({questions})),
        catchError(() => of(actions.loadQuestionsDataFailure()))))));
}
