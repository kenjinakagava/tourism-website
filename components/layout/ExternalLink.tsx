import styled from "styled-components";

interface ExternalLinksProps {
  display?: string;
}

const ExternalLink = styled.a<ExternalLinksProps>`
  text-decoration: underline;
  color: -webkit-link;
  display: ${(props) => (props.display ? props.display : "inline")};
`;

export default ExternalLink;
