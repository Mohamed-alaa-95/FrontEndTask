import { Injectable } from '@angular/core';
import { IAction } from '../../../SheardModule/Components/Action/iAction';
import { ActionModes } from '../../../SheardModule/Components/Action/enums';
import { Router } from '@angular/router';

@Injectable()
export class ToolbarModel {
  constructor(private router: Router) {}

  public ActionSetter: Array<IAction> = [
    {
      icon: 'https',
      text: 'Tranactions',
      mode: ActionModes.Item,
    },
    {
      icon: 'verified_user',
      text: 'Users',
      mode: ActionModes.Item,
    },
    {
      icon: 'dashboard_customize',
      text: '',
      mode: ActionModes.Icon,
    },
    {
      icon: 'assignment_turned_in',
      text: '',
      mode: ActionModes.Icon,
    },
    {
      icon: 'settings',
      text: '',
      mode: ActionModes.Icon,
    },
  ];
  public selectAction(action: IAction) {
    this.router.navigate([action.text]);
  }
}
