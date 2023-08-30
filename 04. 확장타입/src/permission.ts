enum Permission {
  Read = 1, // 0001
  Write = 2, // 0010
  Create = 4, // 0100
  Delete = 8, // 1000
}

//1. 권한 조합
//0001
// Bitwise OR (|)
//0010
//결과
//0011
let p: Permission = Permission.Read | Permission.Write;

//2. 권한이 있는지 판단하기
//0011
// Bitwise AND (&)
//0010
//결과
//0010
function hasPermission(target: Permission, per: Permission) {
  return (target & per) === per;
}

// p가 읽기 권한이 있는지 판단하기
hasPermission(p, Permission.Read);

//3. 권한 삭제하기
//0011
// Bitwise XOR (^)
//0010
//0001
p = p ^ Permission.Write;
console.log(hasPermission(p, Permission.Write));
