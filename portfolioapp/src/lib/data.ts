export type ProjectImplementation = {
  title: string;
  description: string;
  technologies: string[];
  challenges?: string;
  solutions?: string;
};

export type ProjectScreenshot = {
  url: string;
  caption: string;
  implementations: ProjectImplementation[];
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  role: string;
  date: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  screenshots: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "jobsync",
    title: "JobSync",
    role: "Full Stack Developer",
    date:"2025.04 ~ 2025.05",
    summary:
      "취업 준비생을 위한 구직관리 애플리케이션",
    description:
      "모든 취업 준비 과정을 하나의 애플리케이션에서 편리하게 관리할 수 있도록 돕는 애플리케이션",
    image: "/JobSync_logo.png?height=192&width=384&text=E-Commerce",
    tags: ["React", "TypeScript", "Tailwind", "React-Query", "Zustand"],
    demoUrl: "https://www.jobsyncapp.com/",
    githubUrl: "https://github.com/ystgd07/Management-PRV",
    screenshots: [
      {
        url: "/JobSync-login.png?height=100&width=100&text=Homepage",
        caption: "로그인 페이지",
        implementations: [
          {
            title: "토큰 자동 갱신",
            description: "사용자의 서버 요청에 대해 토큰 검증 및 갱신 처리",
            technologies: ["React", "Tailwind","axios"],
            challenges: "API 호출 시 토큰 검증 및 갱신 ",
            solutions: "Axios 응답 인터셉터를 활용해 401 Unauthorized 응답 시 Refresh 토큰으로 새로운 Access 토큰을 요청하도록 구현",
          },
          {
            title: "CSRF 공격 방어",
            description: " LocalStorage 기반 상태 관리를 활용한 OAuth 보안 취약점 해결",
            technologies: ["React", "Tailwind","localStorage"],
            challenges: "CSRF 방지",
            solutions: "localStorage에 state 파라미터를 저장하는 방식으로 인증 로직을 구현하여 CSRF 공격 방지",
          },

        ],
      },
      {
        url: "/JobSync-search.png?height=100&width=100&text=Product+Page",
        caption: "검색 페이지",
        implementations: [
          {
            title:"검색 및 필터링 기능",
            description: "상세 필터 모달 구현 및 필터 상태를 시각화하는 UI구현",
            technologies: ["React", "Tailwind","axios","react-query"],
            challenges: "수천개의 공고 데이터 조회 시 렌더링 속도 저하",
            solutions: "React Query의 무한스크롤 기능을 활용 데이터를 불러오는 시점을 조절하여 렌더링 속도 향상",
          }
        ],
      },
      {
        url: "/JobSync-interest.png?height=100&width=100&text=Cart",
        caption: "관심 페이지",
        implementations: [
          {
            title:"관심 공고 상태 관리",
            description: "Zustand를 활용한 전역상태 구현",
            technologies: ["React", "Tailwind","Zustand"],
            challenges: "검색 페이지와 관심 페이지 간 공통 상태 및 액션 관리의 어려움",
            solutions: "Zustand를 활용하여 스토어 형태로 전역 상태 관리",
          }
        ],
      },
      {
        url: "/JobSync-apply.png?height=100&width=100&text=Cart",
        caption: "지원 페이지",
        implementations: [
          {
            title:"캐싱 데이터 관리",
            description: "최신 지원 데이터 상태 관리",
            technologies: ["React", "Tailwind","React-Query"],
            challenges: "지원 데이터 업데이트 요청 이후 기존 캐싱 데이터 사용 시 데이터 불일치 문제",
            solutions: "React Query의 캐싱 기능을 활용하여 최신 지원 데이터 상태 관리",
          },
        ],
      },
      {
        url: "/JobSync-history.png?height=100&width=100&text=Cart",
        caption: "히스토리 페이지(지원공고 현황)",
        implementations: [
          {
            title:"뱃지 컴포넌트 구현",
            description: "하나의 컴포넌트를 재사용하여 디자인 일관성 유지",
            technologies: ["React", "Tailwind","shadcn/ui"],
            challenges: "뱃지 컴포넌트 재사용 및 디자인 일관성 유지",
            solutions: "각 단계별 아이디를 받아 뱃지의 개별 디자인 적용",
          },
          {
            title:"검색 필터링 최적화",
            description: "특정 공고 검색시 여러번 호출되는 비효율적인 문제해결",
            technologies: ["React","lodash"],
            challenges: "검색 이벤트 발생 시 여러번 호출되는 비효율적인 문제",
            solutions: "lodash의 debounce 함수를 활용하여 검색 이벤트 발생 시 최소 호출 구현",
          }

        ],
      },
      {
        url: "/JobSync-note.png?height=100&width=100&text=Cart",
        caption: "취업 이력 페이지(노트내용)",
        implementations: [
          {
            title:"전역 상태 구현",
            description: "검색 컴포넌트에서 선택한 공고 데이터 전역 상태 관리",
            technologies: ["React", "Tailwind","Zustand"],
            challenges: "선택한 공고 ID를 통해 노트 컴포넌트에 데이터 전달 및 노트 컴포넌트에서 데이터 사용",
            solutions: "Zustand를 활용하여 선택한 데이터를 전역 상태로 관리",
          }
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "peernow",
    title: "PeerNow Refactoring",
    role: "Frontend Developer",
    date: "2025.01 ~ 2025.02",
    summary:
      "PeerNow 프로젝트를 리팩토링하여 더 나은 코드 구조로 개선",
    description:
      "기존 JS 기반으로 구현한 PeerNow 프로젝트를 TypeScript로 리팩토링하여 더 나은 코드 구조로 개선",
    image: "/PeerNow-Refactor.png?height=192&width=384&text=Portfolio",
    tags: ["React", "TypeScript", "Tailwind", "React-Query", "Zustand"],
    demoUrl: "",
    githubUrl: "https://github.com/ystgd07/Refactoring-PearNow",
    screenshots: [
      {
        url: "/PeerNow-Refactor.png?height=400&width=600&text=Homepage",
        caption: "메인 페이지",
        implementations: [
          {
            title:"타입스크립트 적용",
            description: "기존 JS 기반으로 구현한 PeerNow 프로젝트를 TypeScript로 리팩토링(메인페이지)",
            technologies: ["React", "TypeScript", "Tailwind"],
            challenges: "기존 JS 기반으로 구현한 PeerNow 프로젝트를 TypeScript로 리팩토링",
            solutions: "TypeScript로 리팩토링하여 런타임 오류 방지 및 코드 가독성 향상",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "peernow",
    title: "PeerNow",
    role: "Frontend Developer, Infra",
    date: "2023.10 ~ 2023.11",
    summary:
      "프로젝트 관리 웹 어플리케이션",
    description:
      "프로젝트 관리 웹 어플리케이션 (프로젝트 생성, 백로그, 칸반, 번다운 차트, 동료평가)",
    image: "/PeerNow-MainPage.png?height=192&width=384&text=Task+App",
    tags: ["React", "JavaScript", "Tailwind", "React-Query", "Zustand", "Chart.js"],
    demoUrl: "",
    githubUrl: "https://github.com/ystgd07/PeerNow-FE-",
    screenshots: [
      {
        url: "/PeerNow-MainPage.png?height=400&width=600&text=Dashboard",
        caption: "메인 페이지",
        implementations: [
          {
            title:"전역 상태 구현",
            description: "전역 상태 관리를 위해 Zustand 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "Zustand"],
            challenges: "Project(사용자 정보, 참여 프로젝트 정보)를 각각의 페이지 컴포넌트에서 사용",
            solutions: "Zustand를 활용하여 전역 상태를 관리하여 Props Drilling 문제 해결",
          },
          {
            title:"서버 상태 구현",
            description: "서버 상태 관리를 위해 React-Query 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "React-Query"],
            challenges: "서버 상태와 클라이언트 상태의 분리 필요",
            solutions: "React-Query를 활용하여 서버 상태 관리",
          },
        ],
      },
      {
        url: "/PeerNow-Backlog.png?height=400&width=600&text=Kanban",
        caption: "백로그 페이지",
        implementations: [
          {
            title:"전역 상태 구현",
            description: "전역 상태 관리를 위해 Zustand 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "Zustand"],
            challenges: "Project(사용자 정보, 참여 프로젝트 정보)를 각각의 페이지 컴포넌트에서 사용",
            solutions: "Zustand를 활용하여 전역 상태를 관리하여 Props Drilling 문제 해결",
          },
          {
            title:"서버 상태 구현",
            description: "서버 상태 관리를 위해 React-Query 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "React-Query"],
            challenges: "서버 상태와 클라이언트 상태의 분리 필요",
            solutions: "React-Query를 활용하여 서버 상태 관리",
          },
        ],
      },
      {
        url: "/PeerNow-Chart.png?height=400&width=600&text=Kanban",
        caption: "번다운 차트 페이지",
        implementations: [
          {
            title:"전역 상태 구현",
            description: "전역 상태 관리를 위해 Zustand 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "Zustand"],
            challenges: "Project(사용자 정보, 참여 프로젝트 정보)를 각각의 페이지 컴포넌트에서 사용",
            solutions: "Zustand를 활용하여 전역 상태를 관리하여 Props Drilling 문제 해결",
          },
          {
            title:"서버 상태 구현",
            description: "서버 상태 관리를 위해 React-Query 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "React-Query"],
            challenges: "서버 상태와 클라이언트 상태의 분리 필요",
            solutions: "React-Query를 활용하여 서버 상태 관리",
          },
        ],
      },
      {
        url: "/PeerNow-Peer.png?height=400&width=600&text=Kanban",
        caption: "동료평가 페이지",
        implementations: [
          {
            title:"전역 상태 구현",
            description: "전역 상태 관리를 위해 Zustand 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "Zustand"],
            challenges: "Project(사용자 정보, 참여 프로젝트 정보)를 각각의 페이지 컴포넌트에서 사용",
            solutions: "Zustand를 활용하여 전역 상태를 관리하여 Props Drilling 문제 해결",
          },
          {
            title:"서버 상태 구현",
            description: "서버 상태 관리를 위해 React-Query 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "React-Query"],
            challenges: "서버 상태와 클라이언트 상태의 분리 필요",
            solutions: "React-Query를 활용하여 서버 상태 관리",
          },
        ],
      },
      {
        url: "/PeerNow-Sprint.png?height=400&width=600&text=Kanban",
        caption: "스프린트 페이지",
        implementations: [
          {
            title:"전역 상태 구현",
            description: "전역 상태 관리를 위해 Zustand 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "Zustand"],
            challenges: "Project(사용자 정보, 참여 프로젝트 정보)를 각각의 페이지 컴포넌트에서 사용",
            solutions: "Zustand를 활용하여 전역 상태를 관리하여 Props Drilling 문제 해결",
          },
          {
            title:"서버 상태 구현",
            description: "서버 상태 관리를 위해 React-Query 라이브러리 사용",
            technologies: ["React", "JavaScript", "Tailwind", "React-Query"],
            challenges: "서버 상태와 클라이언트 상태의 분리 필요",
            solutions: "React-Query를 활용하여 서버 상태 관리",
          },
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
