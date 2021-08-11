import { DropBox } from './components/DropBox';
import styled from 'styled-components';

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <BoxContainer>
      <DropBox/>
    </BoxContainer>
  );
}

export default App;
