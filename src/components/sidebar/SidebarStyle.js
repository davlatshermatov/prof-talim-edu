import styled from "styled-components";

export const SidebarStyled = styled.div`
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
    width: 100%;
    overflow-x: hidden;

    .container {
      margin-top: 6rem;
      padding: 1rem 3rem;
    }
  }
`;
