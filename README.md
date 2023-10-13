# nestjs를 사용하여 게시판 만들기 study
# 필요기술 : nodejs, nestjs, typescript

## 처음 설치시
- 1. node.js 설치
  - https://nodejs.org/en/
  - 위 url 다운로드 후 설치
  - 설치확인 : 터미널에서 node -v
- 2. nestjs 설치 : sudo npm i -g @nestjs/cli
- 3. 프로젝트 구성 : nest new [프로젝트명] or cd [프로젝트명] -> nest new .
- 3. 실행 : npm run start:dev

## 학습정리
- 1. 모듈생성 : nest g module boards
- 2. 모듈컨트롤러생성 : nest g controller boards --no-spec(테스트코드생략))
- 3. 모듈서비스생성 : nest g service boards --no-spec(테스코드생략)

- 3. provider란 : 종속성을 주입할수 있는 것(스프링에서의 의존성주입과 비슷)
- 4. decoration : java에서의 annotation
- 5. @Injectable은 서비스단에서 사용할 수 있으며 스프링에서의 @Service 하고 유사함. @Inectable의 사용된 모듈(서비스)는 애플리케이션 전체에서 사용가능함.