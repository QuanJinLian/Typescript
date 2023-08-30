class User {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.gender = "남";
        this._publishNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        }
        else if (value > 200) {
            this._age = 200;
        }
        else {
            this._age = value;
        }
    }
    get age() {
        return Math.floor(this._age);
    }
    publish(title) {
        if (this._curNumber < this._publishNumber) {
            console.log("기사 게시：" + title);
            this._curNumber++;
        }
        else {
            console.log("오늘의 최대 글 수에 도달했습니다.");
        }
    }
}
const u = new User("aa", 22);
u.age = 1.5;
console.log(u.age);
u.publish("기사1");
u.publish("기사2");
u.publish("기사3");
u.publish("기사4");
u.publish("기사5");
u.publish("기사6");
