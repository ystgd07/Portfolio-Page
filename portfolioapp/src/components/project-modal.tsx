"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  X,
} from "lucide-react";
import type { Project, ProjectImplementation } from "@/lib/data";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiAxios } from "react-icons/si";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
  onNavigate,
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 프로젝트가 변경되거나 모달이 열릴 때 인덱스 초기화
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project, isOpen]);

  if (!project) return null;

  // screenshots 배열이 비어있는 경우 처리
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const currentScreenshot = hasScreenshots
    ? project.screenshots[activeImageIndex]
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto'>
        <DialogHeader className='flex flex-row items-start justify-between'>
          <div>
            <DialogTitle className='text-2xl font-bold'>
              {project.title}
            </DialogTitle>
            <DialogDescription className='mt-1.5'>
              {project.summary}
            </DialogDescription>
          </div>
          <Button
            variant='ghost'
            size='icon'
            className='absolute right-4 top-4'
            onClick={onClose}
          >
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </Button>
        </DialogHeader>

        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Project Image Carousel */}
          <div className='space-y-3'>
            {hasScreenshots && currentScreenshot && (
              <>
                <div className='relative h-64 md:h-72 rounded-lg overflow-hidden border'>
                  <Image
                    src={currentScreenshot.url || "/placeholder.svg"}
                    alt={currentScreenshot.caption || "Project screenshot"}
                    fill
                    className='object-contain object-center'
                  />
                </div>

                {/* Image Navigation */}
                <div className='flex items-center justify-between'>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? project.screenshots.length - 1 : prev - 1
                      )
                    }
                    disabled={project.screenshots.length <= 1}
                  >
                    <ChevronLeft className='h-4 w-4' />
                  </Button>

                  <span className='text-sm text-muted-foreground'>
                    {activeImageIndex + 1} / {project.screenshots.length}
                  </span>

                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === project.screenshots.length - 1 ? 0 : prev + 1
                      )
                    }
                    disabled={project.screenshots.length <= 1}
                  >
                    <ChevronRight className='h-4 w-4' />
                  </Button>
                </div>

                <p className='text-sm text-center text-muted-foreground'>
                  {currentScreenshot.caption}
                </p>
              </>
            )}

            {/* External Links */}
            <div className='flex gap-3 mt-4'>
              {project.githubUrl && (
                <Button variant='outline' size='sm' className='gap-2' asChild>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='h-4 w-4' />
                    View Code
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button size='sm' className='gap-2' asChild>
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='h-4 w-4' />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Details 페이지별 구현 내용이 달라야 함 */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>기술스택</h3>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant='secondary'>
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
                    {tag === "shadcn/ui" && (
                      <SiShadcnui className='mr-2 text-purple-500 w-4 h-4' />
                    )}
                    <span>{tag}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>프로젝트 설명</h3>
              <p className='text-sm text-muted-foreground'>
                {project.description}
              </p>
            </div>

            {hasScreenshots &&
              currentScreenshot &&
              currentScreenshot.implementations.length > 0 && (
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    프로젝트 구현 내용
                  </h3>
                  <Tabs defaultValue='overview' className='w-full'>
                    <TabsList className='grid w-full grid-cols-2 md:grid-cols-3'>
                      <TabsTrigger value='overview'>개요</TabsTrigger>
                      {currentScreenshot.implementations.map(
                        (impl: ProjectImplementation, index: number) => (
                          <TabsTrigger key={index} value={`impl-${index}`}>
                            {impl.title}
                          </TabsTrigger>
                        )
                      )}
                    </TabsList>

                    <TabsContent
                      value='overview'
                      className='mt-4 min-h-[300px] overflow-y-auto'
                    >
                      <ul className='space-y-2 text-sm'>
                        {currentScreenshot.implementations.map(
                          (impl: ProjectImplementation, index: number) => (
                            <li key={index} className='flex items-start'>
                              <span className='mr-2 mt-0.5 h-2 w-2 rounded-full bg-primary' />
                              <span className='font-bold'>
                                {impl.title}:
                                <span className='text-muted-foreground text-[13px]'>
                                  {" "}
                                  {impl.description.split(".")[0]}.
                                </span>
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </TabsContent>

                    {currentScreenshot.implementations.map(
                      (impl: ProjectImplementation, index: number) => (
                        <TabsContent
                          key={index}
                          value={`impl-${index}`}
                          className='mt-4 space-y-3 min-h-[300px] overflow-y-auto'
                        >
                          <p className='text-sm font-semibold'>
                            {impl.description}
                          </p>

                          <div>
                            <h4 className='text-sm font-medium mb-1'>
                              사용 기술:
                            </h4>
                            <div className='flex flex-wrap gap-1.5'>
                              {impl.technologies.map((tech: string) => (
                                <Badge
                                  key={tech}
                                  variant='outline'
                                  className='text-xs'
                                >
                                  {tech === "React" && (
                                    <FaReact className='mr-2 text-blue-500 w-4 h-4' />
                                  )}
                                  {tech === "TypeScript" && (
                                    <SiTypescript className='mr-2 text-sky-500 w-3 h-3' />
                                  )}
                                  {tech === "Tailwind" && (
                                    <SiTailwindcss className='mr-2 text-green-500 w-4 h-4' />
                                  )}
                                  {tech === "react-query" && (
                                    <SiReactquery className='mr-2 text-red-500 w-4 h-4' />
                                  )}
                                  {tech === "JavaScript" && (
                                    <RiJavascriptFill className='mr-2 text-yellow-500 w-4 h-4' />
                                  )}
                                  {tech === "shadcn/ui" && (
                                    <SiShadcnui className='mr-2 text-purple-500 w-4 h-4' />
                                  )}
                                  {tech === "axios" && (
                                    <SiAxios className='mr-2 text-orange-500 w-4 h-4' />
                                  )}
                                  <span>{tech}</span>
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {impl.challenges && (
                            <div>
                              <h4 className='text-sm font-medium mb-1'>
                                도전 과제:
                              </h4>
                              <p className='text-xs text-muted-foreground'>
                                {impl.challenges}
                              </p>
                            </div>
                          )}

                          {impl.solutions && (
                            <div>
                              <h4 className='text-sm font-medium mb-1'>
                                해결 방법:
                              </h4>
                              <p className='text-xs text-muted-foreground'>
                                {impl.solutions}
                              </p>
                            </div>
                          )}
                        </TabsContent>
                      )
                    )}
                  </Tabs>
                </div>
              )}
          </div>
        </div>

        {/* Project Navigation */}
        <div className='flex justify-between mt-8'>
          <Button
            variant='ghost'
            onClick={() => onNavigate("prev")}
            className='gap-2'
          >
            <ChevronLeft className='h-4 w-4' />
            Previous Project
          </Button>
          <Button
            variant='ghost'
            onClick={() => onNavigate("next")}
            className='gap-2'
          >
            Next Project
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
