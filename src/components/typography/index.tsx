import { StyledTypography } from "./style";

export interface TypographyProps {
  variant?: "h1" | "title1" | "title2" | "description";
  children: React.ReactNode;
}

const Typography = ({ variant = "title2", children }: TypographyProps) => {
  return <StyledTypography $variant={variant}>{children}</StyledTypography>;
};

export default Typography;
