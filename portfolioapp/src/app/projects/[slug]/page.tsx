"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects, type Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: PageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
      const fetchedProject = getProjectBySlug(resolvedParams.slug);
      setProject(fetchedProject || null);
      setIsLoading(false);
    });
  }, [params]);

  if (isLoading) {
    return (
      <div className='flex flex-col min-h-screen'>
        {/* Header */}
        <header className='sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <div className='container flex h-16 items-center justify-between'>
            <Skeleton className='h-7 w-24' />
            <div className='hidden md:flex gap-6'>
              <Skeleton className='h-5 w-12' />
              <Skeleton className='h-5 w-16' />
              <Skeleton className='h-5 w-12' />
              <Skeleton className='h-5 w-16' />
            </div>
          </div>
        </header>

        <main className='flex-1'>
          <section className='py-12 md:py-20 container'>
            <div className='flex flex-col space-y-4'>
              <Skeleton className='h-6 w-32' />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
                <div>
                  <Skeleton className='h-10 w-3/4 mb-4' />
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Skeleton className='h-6 w-16' />
                    <Skeleton className='h-6 w-20' />
                    <Skeleton className='h-6 w-16' />
                  </div>
                  <Skeleton className='h-20 w-full mb-6' />
                  <div className='flex gap-4'>
                    <Skeleton className='h-10 w-28' />
                    <Skeleton className='h-10 w-28' />
                  </div>
                </div>
                <Skeleton className='h-64 md:h-80 rounded-lg' />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between'>
          <Link href='/' className='font-bold text-xl'>
            Portfolio
          </Link>
          <nav className='hidden md:flex gap-6'>
            <Link
              href='/#about'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              About
            </Link>
            <Link
              href='/#projects'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Projects
            </Link>
            <Link
              href='/#skills'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Skills
            </Link>
            <Link
              href='/#contact'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className='flex-1'>
        {/* Project Hero */}
        <section className='py-12 md:py-20 container'>
          <div className='flex flex-col space-y-4'>
            <Link
              href='/#projects'
              className='flex items-center text-primary hover:underline w-fit'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Projects
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                  {project.title}
                </h1>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className='text-lg text-muted-foreground mb-6'>
                  {project.description}
                </p>
                <div className='flex gap-4'>
                  {project.githubUrl && (
                    <Button variant='outline' className='gap-2' asChild>
                      <Link
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className='h-4 w-4' />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button className='gap-2' asChild>
                      <Link
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='h-4 w-4' />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className='relative h-64 md:h-80 rounded-lg overflow-hidden'>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Details */}
        <section className='py-12 bg-muted/50'>
          <div className='container'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8'>
              Implementation Details
            </h2>
            <Tabs
              key={`tabs-${project.slug}`}
              defaultValue='overview'
              className='w-full'
            >
              <TabsList className='grid w-full grid-cols-2 md:grid-cols-5 mb-8'>
                <TabsTrigger value='overview'>Overview</TabsTrigger>
                {project.screenshots.map((screenshot, index) => (
                  <TabsTrigger key={index} value={`impl-${index}`}>
                    {screenshot.caption}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value='overview' className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {project.screenshots.map((screenshot, index) => (
                    <Card key={index} className='h-full'>
                      <CardContent className='p-6'>
                        <h3 className='text-xl font-bold mb-2'>
                          {screenshot.caption}
                        </h3>
                        <div className='space-y-2'>
                          <h4 className='font-medium'>Implementations:</h4>
                          <div className='flex flex-wrap gap-2'>
                            {screenshot.implementations.map((impl) => (
                              <span
                                key={impl.title}
                                className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'
                              >
                                {impl.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {project.screenshots.map((screenshot, index) => (
                <TabsContent
                  key={index}
                  value={`impl-${index}`}
                  className='space-y-6'
                >
                  <Card key={index} className='h-full'>
                    <CardContent className='p-6'>
                      <h3 className='text-xl font-bold mb-2'>
                        {screenshot.caption}
                      </h3>
                      <ul className='list-disc list-inside text-sm'>
                        {screenshot.implementations.map((impl) => (
                          <li key={impl.title}>{impl.title}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Project Screenshots */}
        <section className='py-12 container'>
          <h2 className='text-2xl md:text-3xl font-bold mb-8'>
            Project Screenshots
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className='space-y-2'>
                <div className='relative h-64 md:h-80 rounded-lg overflow-hidden border'>
                  <Image
                    src={screenshot.url || "/placeholder.svg"}
                    alt={screenshot.caption}
                    fill
                    className='object-cover'
                  />
                </div>
                <p className='text-center text-muted-foreground'>
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation between projects */}
        <section className='py-12 bg-muted/50'>
          <div className='container'>
            <h2 className='text-2xl font-bold mb-8'>More Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Card key={relatedProject.id} className='overflow-hidden'>
                    <div className='relative h-40'>
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <CardContent className='p-6'>
                      <h3 className='text-xl font-bold mb-2'>
                        {relatedProject.title}
                      </h3>
                      <p className='text-muted-foreground mb-4'>
                        {relatedProject.summary}
                      </p>
                      <Button asChild>
                        <Link href={`/projects/${relatedProject.slug}`}>
                          View Project
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t py-6 md:py-8'>
        <div className='container flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
            >
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
            >
              <ExternalLink className='h-5 w-5' />
              <span className='sr-only'>Website</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
