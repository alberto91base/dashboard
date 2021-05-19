import styled, { css } from 'styled-components';
import Frames from './Frames';

export default styled(Frames).attrs({})`
    padding: 50px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
