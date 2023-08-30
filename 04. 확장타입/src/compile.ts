type Gender_c = "man" | "woman";
let gender: Gender_c;
function searchUsers(g: Gender_c) {
  if (g === "man") {
    // g === Gender_c.man 이렇게 사용하고 싶은데 그게 안됨
  } else if (g === "woman") {
    // g === Gender_c.woman 이렇게 사용하고 싶은데 그게 안됨
  }
}
