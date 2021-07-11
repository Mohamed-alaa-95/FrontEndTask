import { EventEmitter, Injectable } from '@angular/core';
import { ActionModes } from './enums';
import { IAction } from './iAction';

@Injectable()
export class ActionModel {
  public data: IAction;
  public onClick: EventEmitter<void> = new EventEmitter<void>();
  public get Icon() {
    return this.data.mode == ActionModes.Icon;
  }
  public get Item() {
    return this.data.mode == ActionModes.Item;
  }
  public get Widget() {
    return this.data.mode == ActionModes.Widget;
  }
  public click() {
    this.onClick.emit();
  }
}
