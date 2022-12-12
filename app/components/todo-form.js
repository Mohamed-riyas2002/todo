import Component from '@glimmer/component';
import { set, computed } from '@ember/object';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TodoFormComponent extends Component {
  @service store;

  //   @action submit() {
  //     let name = document.getElementById('task-name').value;
  //     let id = this.store.peekAll('todo').length + 1;
  //     this.store.pushPayload('todo', {
  //       data: {
  //         type: 'todo',
  //         id: id,
  //         attributes: {
  //           task: name,
  //         },
  //       },
  //     });
  //     set(this,'task',this.store.peekAll('todo'));
  //     console.log(this.task);
  //   }
}
