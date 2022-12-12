import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set, computed } from '@ember/object';
import Ember from 'ember';

export default class AddTodoComponent extends Component {
  @service store;
  @action popup(element, record) {
    document.getElementById(element).style.visibility = 'visible';
    if (record) {
      set(this, 'record', record);
    }
  }
  @action close(element) {
    document.getElementById(element).style.visibility = 'hidden';
  }
  @action submit() {
    let name = document.getElementById('task-name').value;
    let date = document.getElementById('task-date').value;
    let form = document.getElementById('add-task-form');
    let id = this.store.peekAll('todo').length + 1;
    this.store.pushPayload('todo', {
      data: {
        type: 'todo',
        id: id,
        attributes: {
          task: name,
          date: new Date(date).toLocaleString('default', {
            month: 'short',
            day: 'numeric',
          }),
          status: 'In Progress',
        },
      },
    });
    set(this, 'task', this.store.peekAll('todo'));
    this.close("pop-up");
    form.reset();
  }
  @action deleteTask(record) {
    let variable = this.store.peekRecord('todo',record.id);
    console.log(variable);
    variable.unloadRecord();
    // variable.destroyRecord();
    // console.log(variable.isDeleted);
    // variable.save();
    // .then((toDelete)=>{
    //   toDelete.deleteRecord();
    //   toDelete.save();
    // })
  }
}
