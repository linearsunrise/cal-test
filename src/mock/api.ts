import { createServer } from "miragejs";
import { models } from "./models";
import CalendarEventDTO from "@/api/events/dtos/CalendarEventDTO";
import { faker } from "@faker-js/faker";

function createFakeEvents(length: number) {
  return Array.from({ length }).map((): CalendarEventDTO => ({
    beginDate: faker.date.between(faker.date.recent(1), new Date()),
    endDate: faker.date.between(new Date, faker.date.soon(1)),
    title: faker.name.fullName(),
    description: faker.name.fullName(),
  }));
}

createServer({
  models,
  routes() {
    this.namespace = "api";

    this.get("/events", (schema, request) => createFakeEvents(12));
  },
});
