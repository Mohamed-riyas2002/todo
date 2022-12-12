import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default class EditTodoComponent extends Component {
  @service store;
  @action editDate(para) {
    let date = document.getElementById('edit-date').value;
    let edit = this.store.findRecord('todo', para.id);
    this.store.findRecord('todo', para.id).then((todo) => {
      todo.date = new Date(date).toLocaleString('default', {
        month: 'short',
        day: 'numeric',
      });
    });
  }
  @action editStatus(para) {
    let status = document.getElementById('edit-status').value;
    this.store.findRecord('todo', para.id).then((todo) => {
      todo.status = status;
    });
  }
  @action editTitle(para) {
    let title = document.getElementById('input-title').value;
    this.store.findRecord('todo', para.id).then((todo) => {
      todo.task = title;
    });
  }
}