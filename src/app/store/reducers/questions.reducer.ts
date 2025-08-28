import {QuestionsState} from '../models/questions.state';
import {createReducer, on} from '@ngrx/store';
import {loadQuestionsData, loadQuestionsDataFailure, loadQuestionsDataSuccess} from '../question.actions';

const initialState: QuestionsState = {
  isLoading: false,
  questions: []
};

export const questionsReducer = createReducer(
  initialState,
  on(loadQuestionsData, (state) => ({
    ...state, isLoading: true
  })),
  on(loadQuestionsDataSuccess, (state, {questions}) => ({
    ...state, questions, isLoading: false
  })),
  on(loadQuestionsDataFailure, (state) => ({
    ...state, isLoading: false
  }))
);
