import { Injectable } from '@angular/core';
import { IAction } from '../../../SheardModule/Components/Action/iAction';
import { ActionModes } from '../../../SheardModule/Components/Action/enums';
import { Router } from '@angular/router';

@Injectable()
export class ToolbarModel {
  constructor(private router: Router) {}

  public ActionSetter: Array<IAction> = [
    {
      icon: 'lock_open',
      text: 'Tranactions',
      mode: ActionModes.Item,
    },
    {
      icon: 'home',
      text: 'Users',
      mode: ActionModes.Item,
    },
    {
      icon: 'home',
      text: '',
      mode: ActionModes.Icon,
    },
    {
      icon: 'home',
      text: '',
      mode: ActionModes.Icon,
    },
  ];
  public selectAction(action: IAction) {
    this.router.navigate([action.text]);
  }
}
