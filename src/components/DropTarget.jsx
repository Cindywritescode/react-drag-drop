import styled from 'styled-components';

const DropTarget = styled.div`
  margin: 20px 160px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #c8dadf;
  outline: 2px dashed ${props => props.active ? '#103c4a' : '#92b0b3'};
  outline-offset: -${props => props.active ? 25 : 15}px;
  padding: 25px;
  transition: outline-offset 95ms ease-in;
  filter: invert(${props => props.active ? 0.25 : 0});

  &:hover {
    outline-color: #103c4a;
  }

  & p {
    line-height: 2;
    color: #103c4a;
  }
`;

export {
  DropTarget
}