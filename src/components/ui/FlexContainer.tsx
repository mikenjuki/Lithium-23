import styled, { css, CSSObject } from "styled-components";
// meant to be a modular flex container
// more features in future (simple config for test)
interface FlexContainerProps {
  $direction?: CSSObject["flexDirection"];
  $justifycontent?: CSSObject["justifyContent"];
  $alignitems?: CSSObject["alignItems"];
  $flexwrap?: CSSObject["flexWrap"];
  $flex?: CSSObject["flex"];
  $order?: CSSObject["order"];
  $flexbasis?: CSSObject["flexBasis"];
  $padding?: CSSObject["padding"];
  $margin?: CSSObject["margin"];
  $color?: CSSObject["color"];
  $gap?: CSSObject["gap"];
  $rowgap?: CSSObject["rowGap"];
  $columngap?: CSSObject["columnGap"];
  $border?: CSSObject["border"];
  $borderradius?: CSSObject["borderRadius"];
  $width?: CSSObject["width"];
  $customStyle?: string;
  $mediaDirection?: CSSObject["flexDirection"];
}

// Add more CSS properties as needed
// Also Add props
export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;

  ${(props) => css`
    ${props.$customStyle}
  `}

  ${(props) =>
    props.$direction &&
    css`
      flex-direction: ${props.$direction};
    `}

  ${(props) =>
    props.$justifycontent &&
    css`
      justify-content: ${props.$justifycontent};
    `}

  ${(props) =>
    props.$alignitems &&
    css`
      align-items: ${props.$alignitems};
    `}

  ${(props) =>
    props.$flexwrap &&
    css`
      flex-wrap: ${props.$flexwrap};
    `}

  ${(props) =>
    props.$flex &&
    css`
      flex: ${props.$flex};
    `}

  ${(props) =>
    props.$order &&
    css`
      order: ${props.$order};
    `}

  ${(props) =>
    props.$flexbasis &&
    css`
      flex-basis: ${props.$flexbasis};
    `}

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
    ${(props) =>
      props.$gap &&
      css`
        gap: ${props.$gap};
      `}

    ${(props) =>
      props.$rowgap &&
      css`
        row-gap: ${props.$rowgap};
      `}

    ${(props) =>
      props.$columngap &&
      css`
        column-gap: ${props.$columngap};
      `}

  ${(props) =>
    props.$border &&
    css`
      border: ${props.$border};
    `}

  ${(props) =>
    props.$borderradius &&
    css`
      border-radius: ${props.$borderradius};
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}

    /* Media query */
    @media screen and (max-width: 768px) {
      ${(props) =>
        props.$mediaDirection &&
        css`
          flex-direction: ${props.$mediaDirection};
          gap: 16px;
          align-items: flex-start;
        `}
`;
