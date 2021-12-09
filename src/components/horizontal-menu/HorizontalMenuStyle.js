import styled from "styled-components";

export const HorizontalMenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
  margin: 1.5rem 0;
  padding: 1rem;
  color: #666666;
  background: #fff;
  border-radius: 5px;

  > div {
    display: flex;
    align-items: center;
    padding: 0.3rem 3rem;
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
      border-right: none;
    }

    > p:first-child {
      font-size: 3rem;
      margin-right: 1.5rem;
    }

    > p:last-child {
      font-size: 1rem;
      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`;
