import styled from "styled-components";

type MyTextProps = {
  color?: string;
};
const MyText = styled.p<MyTextProps>`
  background-color: ${({ theme, color }) => color || theme.colors.main};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.md};
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
`;

export default MyText;
