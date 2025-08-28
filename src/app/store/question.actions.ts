import {createAction, props} from '@ngrx/store';
import {Question} from '../core/models/question';

export const loadQuestionsData = createAction('[App component] Load Questions Data]');
export const loadQuestionsDataSuccess = createAction('[App component] Load Questions Success]', props<{questions: Question[]}>());
export const loadQuestionsDataFailure = createAction('[App component] Load Questions Failure]');
