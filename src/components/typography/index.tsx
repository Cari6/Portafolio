import { StyledTypography } from "./style";

export interface TypographyProps {
  variant?: "h1" | "h2" | "title1" | "title2" | "description";
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Typography = ({
  variant = "title2",
  children,
  style,
  className,
}: TypographyProps) => {
  return (
    <StyledTypography className={className} $variant={variant} style={style}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
