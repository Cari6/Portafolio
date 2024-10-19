import styled from "styled-components";
import { TypographyProps } from ".";

export const StyledTypography = styled.div<{
  $variant: TypographyProps["variant"];
}>`
  ${(props) =>
    props.$variant === "h1" &&
    `
        font-size: 40px;
    font-weight: bold;
    color: #9A9ACB;
    `}

  ${(props) =>
    props.$variant === "title1" &&
    `
        font-size: 24px;
    font-weight: 700;
    color: #9A9ACB;
    `}

     ${(props) =>
    props.$variant === "title2" &&
    `
        font-size: 16px;
    font-weight: 500;
    color: #9A9ACB;
    `}

     ${(props) =>
    props.$variant === "description" &&
    `
        font-size: 14px;
    font-weight: 400;
    color: #9A9ACB;
    `}
`;
