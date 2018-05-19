import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import zIndex from '../../styles/zIndex';

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${zIndex.below};
  background-color: ${colors.backgroundMain};
`;

const BgImage = styled.div`
  position: absolute;
  width: 150px;
  height: 100%;
  top: 0;
  background-size: 100% auto;
  background-repeat: repeat-y;
`;

const BgLeftImage = styled(BgImage)`
  left: 0;
  background-position: left center;
  background-image: url('/static/images/bg_stars_left.jpg');
`;

const BgRightImage = styled(BgImage)`
  right: 0;
  background-position: right center;
  background-image: url('/static/images/bg_stars_right.jpg');
`;

const Background = () => (
  <BgWrapper>
    <BgLeftImage />
    <BgRightImage />
  </BgWrapper>
);

export default Background;
