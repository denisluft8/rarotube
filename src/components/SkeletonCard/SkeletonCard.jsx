import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/theme";
import favorite from "../../assets/favorite.svg";

const FadeInAnimation = keyframes`  
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;
const SkeletonCardStyled = styled.div`
  margin-top: 10px;
  width: 229.2px;
  height: 150px;
  border-radius: 10px;
  background: ${colors["light-silver"]};
  display: flex;
  animation-name: ${FadeInAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const FooterStyled = styled.div`
  width: 229.2px;
  height: 44.91px;
  border-radius: 10px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors["philippine-grey"]};
  animation-name: ${FadeInAnimation};
`;

const TextContainerStyled = styled.div`
  padding-top: 8px;
  padding-bottom: 2px;
`;

const RowStyled = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: 0;
  margin-left: 14px;
  margin-bottom: 4px;
  background: ${colors["davys-grey"]};
  border-radius: 10px;
`;

const FavoriteStyled = styled.img`
  box-sizing: border-box;
  width: 19.25px;
  height: 17.96px;
  margin-right: 14px;
  filter: invert(83%) sepia(0%) saturate(4502%) hue-rotate(183deg)
    brightness(108%) contrast(87%);
`;

const SkeletonCard = (width, height) => (
  <SkeletonCardStyled>
    <FooterStyled>
      <TextContainerStyled>
        <RowStyled height="10px" width="150px" />
        <RowStyled height="8px" width="100px" />
      </TextContainerStyled>
      <FavoriteStyled src={favorite} />
    </FooterStyled>
  </SkeletonCardStyled>
);

export default SkeletonCard;
