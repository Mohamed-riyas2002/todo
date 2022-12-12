import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-todo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:list-todo');
    assert.ok(route);
  });
});
