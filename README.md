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


#1.1 Pages (05:10)

1) pages, componet, routing 
/pages 아래에 생성한 파일의 이름 그대로 url에 라우팅된다.
compoent 이름은 중요하지 않고 export default로 선언되는것이 중요하다.
-> 사용자에게 보여주고 싶은것은 pages 폴더에서 export default function으로 작성해야한다.

* Next.js는 잘못된 url(page) 접근시 404 page를 알아서 띄워준다.


2) pages 예외사항
index 이름은 앱의 홈페이지로 약속되어 자동으로 연결된다.
(http://localhost:3000/index 는 에러가 발생한다.)

jsx를 사용하고 있다면 React.js를 import할 필요가 없다.
(.jsx 파일을 만들거나 import react from "react"; 구문이 불필요.)

단, useState, useEffect와 같은 react method를 사용하고 싶을때는
react.js를 import 해야한다.


#1.2 Static Pre Rendering (10:24)

1) React.js와 CSR
create react-app은 client-side rander(CSR) 하는 앱을 만든다.
CSR : 사용자의 브라우저가 사용자가 보는 UI(nav-bar, logo, 검색창...)를 만드는 모든 작업을 수행한다.
사용자가 보는 UI는 사용자가 보는 HTML 소스코드안에 들어있지 않다.
사용자가 보는 HTML 소스코드는 <div id="root"></div> 하나를 제외하고는 모두 JS이다.

브라우저가 react.js와 개발자의 코드를 모두 다운받았을때 
react.js가 개발자의 코드를 포함한 모든것을 랜더링한 후에 
사용자는 비로소 nav-bar를 비롯한 나머지를 확인할 수 있게 된다.

-> 실제 보게되는 html 코드는 사용자의 브라우저가 react.js 랜더링한 결과물이며
react.js의 랜더링 이전에 사용자는 아무것도 볼수 없다.(오직 JS뿐...)
JS를 통한 랜더링이 이루어져야 하기때문에 JS 사용을 중지하면 noscript 구문이 화면에 출력된다.

크롬 개발자모드 - network 탭에서 throttling을 slow 3G로 설정(+새로고침)하여 확인하면 처음에는 react.js를 비롯한 JS코드를 가져오지 못하여 화면출력 부분이 랜더링 되지 않고 이로 인해서 흰화면만 출력되는 시간이 존재한다.
react.js 코드가 다운로드 되고 fetch되고 나서야 UI들이 랜더링되며 비로소 화면에 UI가 출력된다.


2) Next.js와 SSR
앱에 있는 페이지들이 미리 랜더링 된다. (static;정적으로 생성된다.)
Next.js에서 사용자가 다운받은 HTML 소스코드를 열어보면 실제 화면에 출력되는 HTML 요소 코드가 사용자가 다운받은 HTML에 실제로 존재하는것을 확인할 수 있다.

매우 느린환경에서 연결하거나 JS가 비활성화 되어있어도 최소한의 HTML은 다운받기 때문에 최소한의 UI를 사용자가 확인할 수 있다.
API를 통해 가져오는 데이터가 천천히 오더라도 사용자는 흰화면 대신 어떠한 HTML은 볼수 있는 상태로 페이지 로딩을 기다리게 된다.


3) hydration
/pages/index.js에 counter를 작성한다. 

크롬으로 접속하여 확인해보면 앱의 초기 상태 (Hello text, counter 값이 0, + 버튼)를 활용하여 HTML이 미리 랜더링되어 다운된것을 확인할 수 있다.
(= next.js는 앱의 초기 상태로 pre-rendering 한다.)

HTML 다운로드시 수많은 JS를 함께 다운받는데 페이지가 로딩되었을때 react.js가 넘겨 받아서 실제 구동되고 화면이 갱신되게한다.

사용자는 일부 완성된 UI를 가진 HTML + JS를 다운받는다.
react.js가 사용자에게 전송이 완료되면 react.js는 
실제 구동가능한 앱의 기능을 구동하여 react.js 앱이 된다.

Next.js는 react.js를 Back-end에서 동작시켜 페이지를 미리 만드는 작업을 통해 componet들을 render 시켜 HTML로 만든다.
react.js가 HTML로 만든것을 Next.js는 페이지의 소스코드에 넣게 되고 사용자가 다운로드 받았을때 react.js가 로딩되지 않더라도 콘텐츠는 볼수 있게 된다.
react.js가 로딩되면 이전에 받은 HTML과 연결되어 일반적인 react.js 앱이 된다.

react.js를 Front-end 안에서 실행하는것을 "hydration"이라고 부른다.

+ 이미 HTML에 무언가 있는 상태이기 때문에 SEO에도 좋다.