import { ActionModes } from "./enums";
export interface IAction {
  text: string;
  icon: string;
  class: string;
  mode: ActionModes;
}
