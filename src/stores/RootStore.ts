import { AppStore } from './AppStore';
import { UserStore } from './UserStore';

export class RootStore {
  public appStore: AppStore;
  public userStore: UserStore;

  constructor() {
    this.appStore = new AppStore();
    this.userStore = new UserStore();
  }
}
