import { AppStore } from './AppStore';

export class RootStore {
  public appStore: AppStore;

  constructor() {
    this.appStore = new AppStore();
  }
}
