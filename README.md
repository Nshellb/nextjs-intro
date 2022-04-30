NextJS introduction

NextJS 강의 링크
https://nomadcoders.co/nextjs-fundamentals/lobby?utm_source=free_course&utm_campaign=nextjs-fundamentals&utm_medium=site



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





#1 FRAMEWORK OVERVIEW

#1.0 Library vs Framework (06:42)

1) library
library는 개발자가 library를 불러와서 사용하고 작업한다.
library를 사용할때는 개발자가 원하는대로 코드를 작성하고
필요한 경우에 library에서 코드를 가져와서 동작하는데 사용한다.

create reat-app을 통해서 react 프로젝트를 생성하면 
ReactDOM.render() 부분이 만들어져 있고 항상 App componet로 시작하는데
이 App componet는 비워진채로 있다.
이때 componets에 작성하거나 Routes에 작성하는 등 다양하게 작성이 가능하다.
-> 언제 react를 부를지 어떤 폴더 구조로 작성할지를 개발자가 결정한다.
(파일 배치, 코드 작성, 라우팅이 비교적 자유롭다.)


2) framework
framework는 framework가 개발자의 코드를 불러와서 사용하고 작업한다.
framework에서는 적절한 위치에(틀에 맞추어) 코드를 잘 작성하면 
framework가 개발자의 코드를 가져와서 동작하게 한다.

Next.js에서는 정해진 규칙내에서 코드를 작성해야한다.
개발자가 약속된 위치에 파일을 배치하고 코드를 작성할때
next.js가 개발자의 코드 구동을 돕는다.
React.js 에서의 ReactDOM.render()부분과 같은것을 수정하는 방법은 없으며
단지 /pages에 페이지를 작성하는것 밖에 없다. 
그외는 Next.js가 보이지 않는곳에서 일한다.(추상화)
-> Next.js가 만들어둔 전체 구조(추상화된 틀)안에서 코드를 작성하면 
   Next.js는 작성된 코드를 동작시킨다.

다른 설정없이 /pages/index.js 생성 후 코드를 작성하면
Next.js는 자동으로 서버의 Home에서 작성한 코드를 구동시킨다.
(http://localhost:3000/ 접속시 작성한 코드 구동 확인가능)

같은 방법으로 /pages/about.js 생성 후 코드를 작성하면
http://localhost:3000/about 접속시 작성한 코드 구동을 확인할 수 있다.
(pages 아래에 componet를 작성하면 해당 compoent 파일명의 주소로 자동 라우팅한다.)


3) 정리
library는 개발자가 필요할때 가져와서 사용.
framework는 개발자의 코드를 짜는 틀이자 구동기.