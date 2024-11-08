import { SectionContainer, SkillContainer, SkillSection } from "./styles";
import Typography from "../typography";
import Skills from "../skills";
import { skillsGroups } from "../../utils/constants/skills";

interface SkillsSectionProps {
  id: string;
}

const SkillsSection = ({ id }: SkillsSectionProps) => {
  return (
    <SectionContainer id={id}>
      <Typography variant="h2">Conocimientos</Typography>

      <SkillContainer>
        {skillsGroups.map((group, index) => (
          <SkillSection key={index}>
            {group.skills.map((item, id) => (
              <Skills key={id} $variant={group.variant} {...item} />
            ))}
          </SkillSection>
        ))}
      </SkillContainer>
    </SectionContainer>
  );
};

export default SkillsSection;
