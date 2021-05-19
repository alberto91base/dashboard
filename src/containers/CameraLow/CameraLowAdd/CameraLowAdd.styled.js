import styled, { css } from 'styled-components';
import CameraLowAdd from './CameraLowAdd';

export default styled(CameraLowAdd).attrs({})`
    padding: 20px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
