import {IChipsGroupElement} from "@/components/chipsGroup";

export interface ITask {
  ID: number,
  name: string,
  tags: IChipsGroupElement[]
}