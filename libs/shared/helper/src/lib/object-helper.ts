export class ObjectHelper {
  static propName(object: Object, object_property: any) {
    for (var i in object) {
      if (typeof object[i] == 'object') {
        const res = this.propName(object[i], object_property);
        if (res) {
          return res;
        }
      } else {
        if (object[i] == object_property) {
          return i;
        }
      }
    }
    return undefined;
  }
}
