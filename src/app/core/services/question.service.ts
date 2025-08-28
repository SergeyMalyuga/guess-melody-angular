import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../models/question';
import {APIRoutes, BASE_URL} from '../constants/const';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private http = inject(HttpClient);

  getQuestions() {
    console.log(`${BASE_URL}/${APIRoutes.QUESTIONS}`);
    return this.http.get<Question[]>(`${BASE_URL}/${APIRoutes.QUESTIONS}`);
  }
}
