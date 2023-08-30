class User {
  readonly id: number;
  gender: "남" | "여" = "남";
  pid?: string;
  private _publishNumber: number = 3; //하루에 몇 개의 기사를 게시할 수 있는 갯수
  private _curNumber: number = 0; //현재 게시 가능한 갯수

  constructor(public name: string, private _age: number) {
    this.id = Math.random();
  }

  set age(value: number) {
    if (value < 0) {
      this._age = 0;
    } else if (value > 200) {
      this._age = 200;
    } else {
      this._age = value;
    }
  }

  get age() {
    return Math.floor(this._age);
  }

  publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log("기사 게시：" + title);
      this._curNumber++;
    } else {
      console.log("오늘의 최대 글 수에 도달했습니다.");
    }
  }
}

const u = new User("aa", 22);
//c#
u.age = 1.5;

console.log(u.age);

u.publish("기사1");
u.publish("기사2");
u.publish("기사3");
u.publish("기사4");
u.publish("기사5");
u.publish("기사6");
