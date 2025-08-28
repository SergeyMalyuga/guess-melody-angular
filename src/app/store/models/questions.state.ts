import {Question} from '../../core/models/question';

export interface QuestionsState {
  isLoading: boolean;
  questions: Question[];
}
