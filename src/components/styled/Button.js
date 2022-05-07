import styled from "styled-components";

export const Button = styled.button`
  padding: 0.85rem 2.2rem;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  font-weight: bold;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.primary.green}, ${theme.colors.primary.cyan})`};
  color: ${({ theme }) => theme.colors.neutral.white};

  &:hover {
    opacity: 0.85;
  }
`;
