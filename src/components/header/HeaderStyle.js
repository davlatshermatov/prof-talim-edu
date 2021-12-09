import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 1rem 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;

  .sibebarToggle {
    border: 1px solid #9b9b9b;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: #9b9b9b;
    display: flex;
    align-items: center;
  }

  .avatar {
    cursor: pointer;
    > img {
      width: 3rem;
      object-fit: contain;
      border-radius: 50%;
    }
  }
`;
