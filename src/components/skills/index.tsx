import Typography from "../typography";
import { Icon, SkillsContainer } from "./styles";

export interface SkillsProps {
  text: string;
  icon: string;
  $variant?: "default" | "alternative";
}

const Skills = ({ text, icon, $variant = "default" }: SkillsProps) => {
  return (
    <SkillsContainer>
      <Typography
        variant="title2"
        style={{
          color: $variant === "default" ? "#fff" : "#CCB86C",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
      <Icon>
        <img src={icon} alt="" width={30} height={30} />
      </Icon>
    </SkillsContainer>
  );
};

export default Skills;
