import { Injectable } from '@angular/core';
import { IAction } from '../../../SheardModule/Components/Action/iAction';
import { ActionModes } from '../../../SheardModule/Components/Action/enums';
import { Router } from '@angular/router';

@Injectable()
export class ToolbarModel {
  constructor(private router: Router) {}

  public ActionSetter: Array<IAction> = [
    {
      icon: 'Adb',
      class: 'mainColor',
      text: 'dashboard',
      mode: ActionModes.IconWithLabel,
    },
    {
      icon: 'AddBox',
      class: 'mainColor',
      text: 'components',
      mode: ActionModes.IconWithLabel,
    },
  ];
  public selectAction(action: IAction) {
    this.router.navigate([action.text]);
  }
}
