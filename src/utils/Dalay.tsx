
export default class Dalay{

    static wait(seconds: number) {
      return new Promise((resolve) => { setTimeout(resolve, seconds * 1000); });
    }
}