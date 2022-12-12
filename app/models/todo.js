import Model, { attr } from '@ember-data/model';

export default Model.extend({
  task: attr('string'),
  date: attr('string'),
  status : attr('string')
});