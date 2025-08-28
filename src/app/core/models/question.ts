import {AnswerArtist} from './answer-artist';
import {AnswerGenre} from './answer-genre';

export interface Question {
  id: string
  type: string
  genre?: string
  answers: AnswerArtist | AnswerGenre

}
