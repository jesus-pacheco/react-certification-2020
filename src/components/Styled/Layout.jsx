import styled from 'styled-components';

const PageLayout = styled.section`
  width: 1460px;
`;

const InlineChild = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  vertical-align: middle;
`;

const MainLayout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export { PageLayout, InlineChild, MainLayout };
