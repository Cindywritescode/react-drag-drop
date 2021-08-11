import styled from 'styled-components';

const InstructionsSection = () => (
  <InfoText>
    <InfoTextTitle>Choose a file</InfoTextTitle> or drag it here
  </InfoText>
);

const SummarySection = ({
  files,
  onClickMore
}) => (
  <InfoText>
    <InfoTextTitle>Job done!</InfoTextTitle>
    <p>{files.length} files selected</p>
    <ul>
      {files.map(item => <li>{item.name}</li>)}
    </ul>
    <a href="#" onClick={onClickMore}>More files?</a>
  </InfoText>
);

const InfoText = styled.p`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 60px;

  & p {
    margin: 0;
    font-size: 1rem;
  }

  & ul {
    margin: 0;
    font-size: 0.7rem;
    line-height: 1.8;

  }

  & a {
    text-decoration: none;
    color: #103c4a;

    &:hover {
      color: black;
    }
  }
`;


const InfoTextTitle = styled.strong`

`;

export {
  InstructionsSection,
  SummarySection
}