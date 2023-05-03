import { Model, belongsTo } from "miragejs";

const eventModel = Model.extend({
  beginDate: belongsTo(),
  endDate: belongsTo(),
  isAllDay: belongsTo(),
  title: belongsTo(),
  description: belongsTo(),
});
export const models = {
  eventModel,
};