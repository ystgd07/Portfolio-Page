import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Server, Database, Layers, Globe } from "lucide-react"

const skillsData = {
  frontend: [
    { name: "React", proficiency: 85 },
    { name: "Next.js", proficiency: 80 },
    { name: "TypeScript", proficiency: 75 },
    { name: "JavaScript", proficiency: 90 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "Tailwind CSS", proficiency: 85 },
    { name: "UI/UX Principles", proficiency: 70 },
  ],
  cloud: [
    { name: "AWS", proficiency: 80 },
    { name: "Terraform", proficiency: 75 },
    { name: "Docker", proficiency: 85 },
    { name: "Kubernetes", proficiency: 65 },
    { name: "CI/CD", proficiency: 80 },
    { name: "Linux", proficiency: 85 },
  ],
  backend: [
    { name: "Node.js", proficiency: 70 },
    { name: "Express", proficiency: 65 },
    { name: "REST APIs", proficiency: 80 },
    { name: "API Design", proficiency: 75 },
  ],
  database: [
    { name: "MongoDB", proficiency: 70 },
    { name: "SQL", proficiency: 65 },
    { name: "Database Design", proficiency: 60 },
  ],
  tools: [
    { name: "Git", proficiency: 90 },
    { name: "VS Code", proficiency: 95 },
    { name: "Chrome DevTools", proficiency: 85 },
    { name: "Figma", proficiency: 70 },
    { name: "Jira", proficiency: 75 },
  ],
}

export function SkillProgress() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Technical Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="frontend">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="frontend" className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Frontend</span>
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex items-center gap-1.5">
              <Cloud className="h-4 w-4" />
              <span className="hidden sm:inline">Cloud</span>
            </TabsTrigger>
            <TabsTrigger value="backend" className="flex items-center gap-1.5">
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Backend</span>
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-1.5">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Database</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              <span className="hidden sm:inline">Tools</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
