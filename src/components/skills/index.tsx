import { IconContainer, SkillsContainer, StyledTypography } from "./styles";

interface SkillsProps {
  text: string;
  icon: string;
  $variant?: "default" | "alternative";
}

const Skills = ({ text, icon, $variant = "default" }: SkillsProps) => {
  return (
    <SkillsContainer>
      <StyledTypography
        variant="title2"
        className={$variant === "default" ? "default" : "alternative"}
      >
        {text}
      </StyledTypography>

      <IconContainer>
        <img src={icon} alt="" width={30} height={30} />
      </IconContainer>
    </SkillsContainer>
  );
};

export default Skills;
