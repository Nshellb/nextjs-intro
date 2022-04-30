NextJS introduction


#0 INTRODUCTION

#0.1 Requirements (01:29)

알고있어야할 React.js 기본 개념
state, props, routing, rendering, deployment


#0.2 Creating a Project (02:51)

1) 프로젝트 생성
> npx create-next-app@latest
프로젝트명 : nextjs-intro

생성한 프로젝트를 vscode로 연다.

2) 간략한 파일 구성
package.json : dev, build, start, lint 4개의 스크립트를 가진다.
TS 프로젝트로 생성한경우 TS환경을 위한 파일들이 더 있을것임.

3) 프로젝트 테스트 구동
> npm run dev

크롬에서 http://localhost:3000/ 로 접속시 [Welcome to Next.js!] 페이지를 확인할 수 있다.