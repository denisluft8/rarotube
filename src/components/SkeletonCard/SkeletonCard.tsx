import {
  FooterStyled,
  RowStyled,
  SkeletonCardStyled,
  TextContainerStyled,
} from "./SkeletonCardStyled";

export interface SkeletonCardProps {
  width?: string;
  height?: string;
}

const SkeletonCard = ({ width, height }: SkeletonCardProps) => (
  <SkeletonCardStyled>
    <FooterStyled>
      <TextContainerStyled>
        <RowStyled height="10px" width="150px" />
        <RowStyled height="8px" width="100px" />
      </TextContainerStyled>
    </FooterStyled>
  </SkeletonCardStyled>
);

export default SkeletonCard;
