import styled from "styled-components";

export const DashboardStyled = styled.div`
  > h1 {
    margin: 1rem 0;
  }

  .doughnutCharts {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
    padding: 2rem 1rem;
    border-radius: 5px;
  }

  .barCharts {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    margin: 2rem 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
    padding: 3rem 1rem;
  }
`;
