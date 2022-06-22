import styled from "styled-components";

export const StyledFooter = styled.footer `
  background-color: ${({ theme }) => theme.color.veryDarkCyan};
  padding: 10rem 8% 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  color: ${({ theme }) => theme.color.white};

  & > * {
    width: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }


  small {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.grayishBlue};
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: flex-start;

    .logo {
      grid-column: 1 / -1;
    }
    small {
      grid-column: 1 / -1;
      margin-left: auto;
      align-items: flex-end;
      text-align: right;
    }
  }
`;