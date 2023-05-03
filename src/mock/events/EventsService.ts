import { freeze } from "@/lib/object/decorators";
import { Model, Response } from "miragejs";
import { AnyRegistry, AnyResponse, ModelDefinition, Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { RouteHandler } from "miragejs/server";
import { Context } from "vm";

@freeze
export default class EventsService {
  static getEvents(schema: any, request: any): Response {
    return schema.all()
  }
}
