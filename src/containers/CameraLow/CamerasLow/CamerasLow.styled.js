import styled, { css } from 'styled-components';
import CamerasLow from './CamerasLow';

export default styled(CamerasLow).attrs({})`
    padding: 20px;
    .camerasLow__content {
        padding: 20px;
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
