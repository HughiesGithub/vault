import Service from '@ember/service';

// this service tracks the path of the currently viewed secret mount
// so that we can access that inside of engines where parent route params
// are not accessible
export default class SecretMountPath extends Service {
  currentPath = '';
  update(path) {
    this.currentPath = path;
  }
  get() {
    return this.currentPath;
  }
}
