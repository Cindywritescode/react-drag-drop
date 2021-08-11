import styled from 'styled-components';
import { DropBox } from './components/DropBox';

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
