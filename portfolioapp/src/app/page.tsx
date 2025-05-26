"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, ArrowRight, Code, Cloud, Calendar } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { projects, type Project } from "@/lib/data";
import { AboutTimeline } from "@/components/about-timeline";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast } from 'sonner';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";


export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedProject(projects[newIndex]);
  };

  const copyEmail = () => {
    const email = "ysotgood@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success("이메일 주소가 복사되었습니다!");
      })
      .catch((err) => {
        console.error("이메일 복사 실패:", err);
        toast.error("이메일 복사에 실패했습니다. 직접 복사해주세요.");
      });
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              alt='logo'
              className='rounded-full'
              width={32}
              height={32}
            />
            <Link href='/' className='font-bold text-xl'>
              포트폴리오
            </Link>
          </div>
          <nav className='hidden md:flex gap-6'>
            <Link
              href='#about'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              소개
            </Link>
            <Link
              href='#projects'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              프로젝트
            </Link>

          </nav>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='py-20 md:py-32 container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='space-y-6'>
              <h1 className='text-4xl md:text-5xl font-bold'>
                안녕하세요, 프론트엔드 개발자 <br />
                <div className='mt-1.5'></div>
                양성수 입니다.
              </h1>
              <p className='text-xl text-muted-foreground'>
                새로운 기술을 학습하여, 다양한 문제를 해결하는 것을 좋아합니다.{" "}
                <br />
                최적의 프론트 서비스를 만들어내는 것을 목표로 나아가는 개발자
                입니다.
              </p>
              <div className='flex gap-4'>
                <Button asChild>
                  <a href='#projects'>프로젝트 보기</a>
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href='https://github.com/ystgd07' target='_blank'>
                        <Button
                          variant='outline'
                          className='flex items-center gap-1.5'
                        >
                          <FaGithub className='h-5 w-5' /> GitHub
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>GitHub 프로필 바로가기</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        onClick={copyEmail}
                        className='flex items-center gap-1.5'
                      >
                        <SiGmail className='h-5 w-5' /> Gmail:
                        ysotgood@gmail.com
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>이메일 주소 복사</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary'>
                <Image
                  src='/myphoto.jpg?height=320&width=320'
                  alt='Profile'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-20 bg-muted/50'>
          <div className='container'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold mb-4'>소개</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
              <Card className='p-6'>
                <CardContent className='p-0 flex flex-col items-center text-center space-y-4'>
                  <div className='h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center'>
                    <Code className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>프론트엔드</h3>
                  <p className='text-muted-foreground'>
                    React, Next.js, TypeScript를 주로 사용하여 <br />
                    개발 경험을 쌓고 있습니다.
                    <br />
                    (총 3개의 프로젝트를 수행)
                  </p>
                </CardContent>
              </Card>

              <Card className='p-6'>
                <CardContent className='p-0 flex flex-col items-center text-center space-y-4'>
                  <div className='h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center'>
                    <Cloud className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>클라우드 엔지니어링</h3>
                  <p className='text-muted-foreground'>
                    AWS 서비스를 사용하여 인프라 구축과 운영 경험을 쌓았습니다.
                    <br />
                    (MSP 기업에서 1년간 근무)
                  </p>
                </CardContent>
              </Card>
            </div>
            <AboutTimeline />
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='py-20 container'>
          <h2 className='text-3xl font-bold mb-12 text-center'>프로젝트</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
              <Card
                key={project.id}
                className='overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-md transition-shadow duration-300'
                onClick={() => openProjectModal(project)}
              >
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className='object-contain transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <Button variant='secondary' size='sm' className='gap-1'>
                      View Details
                      <ArrowRight className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <CardContent className='p-6 flex flex-col flex-1'>
                  <div className='flex gap-2 items-center mb-2'>
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <Badge
                      variant='outline'
                      className='text-xs bg-primary text-white'
                    >
                      {project.role}
                    </Badge>
                  </div>
                  <div className='flex gap-2 items-center mb-4'>
                    <Calendar className='h-4 w-4 text-muted-foreground' />
                    <p className='text-muted-foreground flex-1'>
                      {project.date}
                    </p>
                  </div>
                  <p className='text-muted-foreground mb-4 flex-1'>
                    {project.summary}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4 '>
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant='secondary'
                        className='text-xs flex items-center'
                      >
                        {tag === "React" && (
                          <FaReact className='mr-2 text-blue-500 w-4 h-4' />
                        )}
                        {tag === "Next.js" && (
                          <SiNextdotjs className='mr-2 text-black w-4 h-4' />
                        )}
                        {tag === "TypeScript" && (
                          <SiTypescript className='mr-2 text-sky-500 w-3 h-3' />
                        )}
                        {tag === "Tailwind" && (
                          <SiTailwindcss className='mr-2 text-green-500 w-4 h-4' />
                        )}
                        {tag === "React-Query" && (
                          <SiReactquery className='mr-2 text-red-500 w-4 h-4' />
                        )}
                        {tag === "JavaScript" && (
                          <RiJavascriptFill className='mr-2 text-yellow-500 w-4 h-4' />
                        )}
                        <span>{tag}</span>
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant='outline' className='text-xs'>
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t py-6 md:py-8'>
        <div className='container flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} ysotgood@gmail.com All rights
              reserved.
            </p>
          </div>
          <div className='flex gap-4'>
            <Link
              href='https://github.com/ystgd07'
              target='_blank'
              className='text-muted-foreground hover:text-foreground'
            >
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        onNavigate={navigateProject}
      />
    </div>
  );
}
