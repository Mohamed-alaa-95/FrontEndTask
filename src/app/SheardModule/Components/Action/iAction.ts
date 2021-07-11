import { ActionModes } from "./enums";
export interface IAction {
  text: string;
  icon: string;
  mode: ActionModes;
}
