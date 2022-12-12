import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class ListTodoRoute extends Route {
  @service store;
  model() {
    return this.store.peekAll('todo');
  }
}
