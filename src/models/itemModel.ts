import { Priority } from "../assets/enums/priority"
import { Status } from "../assets/enums/status"
import { v4 as uuid } from "uuid"

export default class Item {
  public id: string
  constructor(
    public status: Status,
    public name: string,
    public priority: Priority,
    public description: string
  ) {
    this.id = uuid()
  }
}
