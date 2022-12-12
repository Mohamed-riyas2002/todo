import EmberRouter from '@ember/routing/router';
import config from 'todo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('list-todo', { path: 'lis' });
  this.route('add-task');
});
