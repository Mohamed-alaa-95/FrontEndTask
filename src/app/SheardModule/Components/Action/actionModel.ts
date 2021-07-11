import { EventEmitter, Injectable } from '@angular/core';
import { ActionModes } from './enums';
import { IAction } from './iAction';

@Injectable()
export class ActionModel {
  public data: IAction;
  public onClick: EventEmitter<void> = new EventEmitter<void>();
  public get IconWithoutLabel() {
    return this.data.mode == ActionModes.IconWithoutLabel;
  }
  public get IconWithLabel() {
    return this.data.mode == ActionModes.IconWithLabel;
  }
  public get IconWithLabelBottom() {
    return this.data.mode == ActionModes.IconWithLabelBottom;
  }
  public click() {
    this.onClick.emit();
  }
}
