import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {QuestionsState} from './store/models/questions.state';
import {loadQuestionsData} from './store/question.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private store = inject(Store<QuestionsState>);

  ngOnInit(): void {
    this.store.dispatch(loadQuestionsData());
  }
}
