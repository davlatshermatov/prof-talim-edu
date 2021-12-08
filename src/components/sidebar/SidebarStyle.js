import styled from "styled-components";

export const SidebarStyled = styled.div`
  /* width: 100%; */
  display: flex;
  .sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
  }

  .sidebarImage {
    object-fit: contain;
    width: 100%;
  }

  .content {
    padding: 1rem 3rem;
    width: 100%;
    overflow-x: hidden;
  }
`;
