"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Cloud,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  ChevronUp,
  Server,
  Layers,
  Globe,
  Database,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiDocker, SiKubernetes, SiLinux, SiNextdotjs, SiShadcnui, SiSpringboot } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaAws, FaReact } from "react-icons/fa";


const timelineData = [
  {
    id: 1,
    date: "Now",
    title: "프론트엔드 엔지니어",
    company: "구직중",
    description:
    [
      "3개의 개인 프로젝트를 수행하여, 프론트엔드 개발 경험을 쌓고 있습니다.",
      "‧ JobSync : 취업 준비생을 위한 채용 정보 제공 웹 애플리케이션",
      "‧ PeerNow Refactoring : PeerNow 웹 애플리케이션 리팩터링",
      "‧ Portfolio : 개인 포트폴리오 사이트 ",
    ],
    achievements: [
      "풀 스택 프로젝트 수행 (JobSync)",
      "TypeScript 전환 프로젝트 수행 (PeerNow Refactoring)",
      "Next.js 프로젝트 수행 (Portfolio)",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React-Query", "shadcn/ui", "axios", "vite"],
    icon: Code,
    category: "frontend",
  },
  {
    id: 2,
    date: "2024 ~ 2025",
    title: "클라우드 엔지니어 근무",
    company: "베스핀글로벌 테크센터",
    description:
    [
      "AWS 클라우드 인프라 운영 및 구축",
      "AWS 클라우드 기반 데이터 수집 플랫폼 구축",
    ],
    achievements: [
      "LG 이노택 사내 빅테이터 플랫폼 신규 인프라 구축 (2024.08 ~ 2024.12)",
      "‧ AWS 기반의 신규 인프라 구축 (ETL 서버구축, 데이터 수집 플랫폼 구축)",
      "‧ 121개 원천 서버와의 방화벽 체크 자동화 구현(Python 스크립트)",
      <br/>,
      "LG 전자 사내 빅데이터 플랫폼 인프라 운영 (2024.01 ~ 2024.07)",
      "‧ 시스템 리소스 모니터링 및 개선 스크립트 개발",
      "‧ 서버 운영 중 발생하는 예외 사항 처리 알람처리 스크립트 개발",
    ],
    skills: ["AWS", "Docker", "Kubernetes" , "Linux"],
    icon: Cloud,
    category: "cloud",
  },
  {
    id: 3,
    date: "2023 ~ 2024",
    title: "베스핀글로벌 클라우드 개발자 교육",
    company: "베스핀글로벌",
    description:
    [
      "베스핀글로벌에서 주관하는 클라우드 개발자 교육수료",
      "‧ AWS 클라우드 학습 및 실습",
      "‧ React, Spring Boot 프레임워크 학습 및 실습",
      "‧ AWS 클라우드 기반의 풀스택 프로젝트를 수행",
    ],
    achievements: [
      "AWS 클라우드 기반의 풀스택 프로젝트 수행 (PeerNow)",
      "베스핀글로벌 테크센터 채용연계 입사",
    ],
    skills: ["React", "SpringBoot", "AWS"],
    icon: GraduationCap,
    category: "education",
  },
  {
    id: 5,
    date: "2022",
    title: "한국교통대학교 졸업",
    company: "의료IT공학과",
    description:
    [
      "의료IT공학과 학사 학위 취득",
      "‧ 3.76/4.5 평점",
      "‧ 운영체제(4.5), 정보보안(4.5), 컴퓨터구조(4.5)",
      "‧ 정보처리기사 취득",
    ],
    achievements: [
    ],
    skills: [],
    icon: Award,
    category: "education",
  },
]

const skillCategoryIcons = {
  frontend: <Globe className="h-4 w-4" />,
  backend: <Server className="h-4 w-4" />,
  cloud: <Cloud className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
  general: <Layers className="h-4 w-4" />,
}

const skillCategories = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "UI/UX", "Redux"],
  backend: ["Node.js", "Express", "REST APIs", "GraphQL", "API Design"],
  cloud: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD", "DevOps"],
  database: ["MongoDB", "SQL", "Database Design", "PostgreSQL"],
  general: ["Git", "Algorithms", "Data Structures", "Problem Solving", "Agile", "Scrum"],
}

const categorizeSkill = (skill: string) => {
  for (const [category, skills] of Object.entries(skillCategories)) {
    if (skills.includes(skill)) {
      return category
    }
  }
  return "general"
}

export function AboutTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 md:translate-x-0" />

      <div className="relative space-y-12">
        {timelineData.map((item, index) => {
          const isExpanded = expandedId === item.id
          const isEven = index % 2 === 0

          return (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2 md:translate-x-0 z-10">
                <item.icon className="h-4 w-4 text-primary-foreground" />
              </div>

              {/* Timeline card - alternating left/right on desktop */}
              <div
                className={`relative md:w-1/2 ${isEven ? "md:ml-auto" : "md:mr-auto"} pl-12 md:pl-0 ${isEven ? "md:pl-12" : "md:pr-12"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="w-full shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Briefcase className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                            {item.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className={`text-xs font-medium ${item.date === "Now" ? "bg-green-500 text-white" : "bg-black text-white"}`}>
                          {item.date}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-3">
                      <div className="text-sm text-muted-foreground">{item?.description?.map((description, i) => (
                        <p key={i}>{description}</p>
                      ))}</div>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <h4 className="text-sm font-medium mb-2">상세 내용:</h4>
                          <ul className="text-sm space-y-1  text-muted-foreground">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </CardContent>

                    <CardFooter className="flex flex-col items-start pt-0">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.skills.slice(0, isExpanded ? item.skills.length : 4).map((skill, i) => {
                          const category = categorizeSkill(skill)
                          return (
                            <Badge key={i} variant="secondary" className="text-xs gap-1 flex items-center">
                              {skill === "React" && <FaReact className='mr-2 text-blue-500 w-4 h-4' />}
                              {skill === "Next.js" && <SiNextdotjs className='mr-2 text-black w-4 h-4' />}
                              {skill === "TypeScript" && <SiTypescript className='mr-2 text-sky-500 w-3 h-3' />}
                              {skill === "Tailwind CSS" && <SiTailwindcss className='mr-2 text-green-500 w-4 h-4' />}
                              {skill === "React-Query" && <SiReactquery className='mr-2 text-red-500 w-4 h-4' />}
                              {skill === "axios" && <SiAxios className='mr-2 text-orange-500 w-4 h-4' /> }
                              {skill === "vite" && <SiVite className='mr-2 text-purple-500 w-4 h-4' /> }
                              {skill === "shadcn/ui" && <SiShadcnui className='mr-2 text-purple-500 w-4 h-4' /> }
                              {skill === "AWS" && <FaAws  className='mr-2 text-orange-500 w-4 h-4' /> }
                              {skill === "Docker" && <SiDocker className='mr-2 text-blue-500 w-4 h-4' /> }
                              {skill === "Kubernetes" && <SiKubernetes className='mr-2 text-blue-500 w-4 h-4' /> }
                              {skill === "Linux" && <SiLinux className='mr-2 text-gray-500 w-4 h-4' /> }
                              {skill === "SpringBoot" && <SiSpringboot className='mr-2 text-gray-500 w-4 h-4' /> }
                              <span className="text-xs">{skill}</span>
                            </Badge>
                          )
                        })}
                        {!isExpanded && item.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.skills.length - 4} more
                          </Badge>
                        )}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs self-end"
                        onClick={() => toggleExpand(item.id)}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-3.5 w-3.5 mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3.5 w-3.5 mr-1" />
                            Show More
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
