interface SkillGroup {
  skills: { text: string; icon: string }[];
  variant: SkillVariant;
}

type SkillVariant = "default" | "alternative";

export const LenguageSkills = [
  { text: "HTML", icon: "/skills/html.png" },
  { text: "CSS", icon: "/skills/css.png" },
  { text: "JavaScript", icon: "/skills/javascript.png" },
  { text: "ReactJs", icon: "/skills/react.png" },
  { text: "NextJs", icon: "/skills/nextjs.png" },
  { text: "React Native", icon: "/skills/react.png" },
  { text: "TypeScript", icon: "/skills/typescript.png" },
];

export const ToolSkills = [
  { text: "YUP", icon: "/skills/yup.jpg" },
  { text: "Styled-Components", icon: "/skills/styled-components.png" },
  { text: "TailwindCSS", icon: "/skills/tailwindcss.png" },
  { text: "Material UI", icon: "/skills/mui.png" },
];

export const OtherSkills = [
  { text: "GitHub", icon: "/skills/github.png" },
  { text: "Scrum", icon: "/skills/scrum.png" },
  { text: "Jira", icon: "/skills/jira.png" },
];

export const skillsGroups: SkillGroup[] = [
  { skills: LenguageSkills, variant: "default" },
  { skills: ToolSkills, variant: "alternative" },
  { skills: OtherSkills, variant: "default" },
];
