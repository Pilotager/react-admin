import { TagStore } from './TagStore';

export class RootStore {
  public tagStore: TagStore;

  constructor() {
    this.tagStore = new TagStore();
  }
}
