# React + TypeScript + Vite

1. IDE (선택)
   VS Code: https://code.visualstudio.com/download

2. 맥용 터미널 (선택)

iTerm:https://iterm2.com

3. 윈도우용 터미널 (선택)

Cmder: https://cmder.app/

4. Node 설치
   NodeJS: https://nodejs.org/en/

5. Git 설치
   Git: https://git-scm.com/downloads

6. Node와 Git이 설치 되었는지 확인

node -v : node 버전 확인
npm -v : npm 버전 확인
git --version : git 버전 확인

7. yarn 설치
   corepack enable : yarn 설치
   yarn -v : yarn 버전 확인
   yarn global add corepack : 시스템 전역에 설치

8. 소스 다운로드

git clone https://github.com/leekeunha/lotto_laos_web.git

9. 의존성 설치 : 프로젝트 디렉토리로 이동한 후, 필요한 패키지를 설치합니다:

yarn

10. 개발 서버 실행

yarn dev

11. 프로덕션을 위한 애플리케이션 빌드

yarn build

# TODO : Lint 설정 하는 방법 그림으로 하기.

12. Code snippets(설치)
<!-- {
  "reactFunction": {
    "prefix": "rfc",
    "body": "import React from 'react';\n\nexport default function ${1:${TM_FILENAME_BASE}}() {\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n}\n\n",
    "description": "Creates a React Function component"
  },
  "reactStatelessImplicitReturn": {
    "prefix": "rsi",
    "body": "import React from 'react';\n\nexport const ${1:${TM_FILENAME_BASE}} = (props) => (\n\t\t\t$0\n\t);",
    "description": "Creates a React Function component"
  },
  "ClassName": {
    "prefix": "cn",
    "body": ["className={styles.$1}"],
    "description": "Adding className"
  },

} -->
