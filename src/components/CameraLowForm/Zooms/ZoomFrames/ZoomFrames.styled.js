import styled, { css } from 'styled-components';
import ZoomFrames from './ZoomFrames';

export default styled(ZoomFrames).attrs({})`
    padding: 50px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
