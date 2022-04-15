export class Player {
    get name() {
      return this.nickname;
    }

    set name(name: string) {
      this.nickname = name;
    }

    constructor(private nickname: string) {
    }
}