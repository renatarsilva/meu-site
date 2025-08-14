import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Swift", category: "frontend" },

  // Backend
  { name: "Java", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MariaDB", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VSCode", category: "tools" },
  { name: "IntelliJ", category: "tools" },
  { name: "XCode", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-3">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover max-w-[250px]"
            >
              <div className="text-left mb-4 justify-center flex items-center h-full">
                <h1 className="font-semibold text-xl">{skill.name}</h1>
              </div>{" "}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                {/* <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: 100 + "%" }}
                /> */}
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
