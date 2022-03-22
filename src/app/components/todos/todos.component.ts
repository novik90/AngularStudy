import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent implements OnInit {
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('Todo').valueChanges();
  }

  ngOnInit(): void {}
}
