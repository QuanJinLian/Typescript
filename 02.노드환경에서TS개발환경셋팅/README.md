# 노드에서 TS 개발 환경 구축

# 타입스크립트 설치

설치

```shell
npm i -D typescript
```

컴파일

```shell
# Run a compile based on a backwards look through the fs for a tsconfig.json
tsc
# Emit JS for just the index.ts with the compiler defaults
tsc index.ts
# Emit JS for any .ts files in the folder src, with the default settings
tsc src/*.ts
# Emit files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json
# Emit d.ts files for a js file with showing compiler options which are booleans
tsc index.js --declaration --emitDeclarationOnly
# Emit a single .js file from two files via compiler options which take string arguments
tsc app.ts util.ts --target esnext --outfile index.js
```

기본적으로 TS는 다음과 같은 가정을 합니다:

1. 현재 실행 환경이 dom이라고 가정합니다.
2. 코드가 모듈식 문법(import, export)을 사용하지 않는 경우, 코드가 전역적으로 실행된다고 가정합니다.
3. 컴파일된 타겟 코드가 ES3입니다.

위의 가정을 변경하는 방법에는 두 가지가 있습니다:

1. 옵션 매개변수와 함께 tsc 명령줄 사용
   [tsc CLI 사용법](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
2. ts 구성 파일을 사용하여 컴파일 옵션을 변경합니다.

# TS 구성 파일

1. root 폴더에 tsconfig.json 파일 생성
2. ```shell
   tsc --init
   ```

구성 파일을 사용한 후 tsc 명령어를 사용하여 컴파일할 때 파일 이름을 지정하지 말아야 합니다, 파일 이름을 지정할 경우 구성 파일이 무시됩니다.
ex)

```shell
tsc index.ts   #=> tsconfig 파일 무시
```

> 노드 환경을 맞춰주기 위해 compilerOptions.lib 설정에서 "dom" 을 사용하지 않으면 console 등 API를 사용하지 못한다 하여 @types/node를 설치 해줘야 한다.

```shell
npm i -D @types/node
```

추가 설명: @types은 js 코드에 대한 많은 유형 설명이 포함된 공식 ts 유형 라이브러리입니다.

> JQuery: js로 작성, 타입 검사 없음
> 유형 정의를 jquery 라이브러리에 추가하려면 @types/jquery를 설치하세요.

# 타사 라이브러리를 사용하여 프로세스 간소화하기

정상 프로세스

1. ```shell
   tsc
   ```
2. ```shell
   node ./dist/index.js
   ```

이상의 프로세스를 매번 코드가 변경하면 수동으로 해주기 너무 귀찮으니 자동으로 코드 변경을 감지하여 컴파일 및 실행을 해줄 수 있는 CLI가 필요해 보입니다.

ts-node: 메모리에서 ts 코드를 컴파일하고 동시에 실행합니다.
설치

```shell
npm i -D ts-node
```

사용

```shell
ts-node src/index.ts #ts-node는 명령어에 파일명을 지정을 해도 tsconfig.json 파일이 적용됩니다.
```

nodemon: 파일 변경 감지

```shell
npm i -D nodemon
```

사용

```shell
nodemon --exec ts-node src/index.ts
```

파일 변경 감지 위치 지정, ts 파일만 감시 및 컴파일 & 실행

```shell
nodemon --watch src -e ts --exec ts-node src/index.ts
# --watch src 구독하는 폴더 위치
# -e ts 구독하는 파일 종류
# --exec ts-node src/index.ts 변경 감지후 실행하는 명령어
```
