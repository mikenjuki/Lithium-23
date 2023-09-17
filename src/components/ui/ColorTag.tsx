// Use this chip as a design accent
// You can only change the color with color="colorName", dimensions remain same
import styled from "styled-components";
import theme from "../../theme";

interface ColorTagProps {
  color?: keyof typeof theme.colors;
}

export const ColorTag = styled.div<ColorTagProps>`
  background-color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.medleyPurple};
  width: 16px;
  height: 32px;
  border-radius: 4px;
`;
