import { StyledTypography } from "./style";

export interface TypographyProps {
  variant?: "h1" | "h2" | "title1" | "title2" | "description";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Typography = ({
  variant = "title2",
  children,
  style,
}: TypographyProps) => {
  return (
    <StyledTypography $variant={variant} style={style}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
