import styled from "styled-components";

const BnSection = styled.div`
   width : 80%;
   margin : auto;
`;
const Heading = styled.h1`
 text-align = center;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */

  background: ${props => props.primary ? ("rgb(58, 120, 255)" ) : props.text ? "none" : "white"};
  color: ${props => props.primary ? "white" : props.link ? ("rgb(58, 120, 255)") : "black" };
  font-size: 1em;
  margin: 1em;
  font-weight: ${props => props.primary ? "normal" : "bold"};
  padding: 0.25em 1em;
     border: 0;
     box-shadow:${props => props.dashed ? "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" : !props.text && !props.link ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;":""} 
  border-radius: 3px;
  width : 300px;
  font-size : 25px;
`;

export default function StyledButton(){

    return (
        <BnSection>
            <Heading>Buttons  using Styled Componenets</Heading>
            <Button primary>Primary</Button>
            <Button default>Default Button</Button>
            <Button dashed>Dashed Button</Button>
            <Button text>Text Button</Button>
            <Button link>Link Button</Button>
        </BnSection >
    );
}