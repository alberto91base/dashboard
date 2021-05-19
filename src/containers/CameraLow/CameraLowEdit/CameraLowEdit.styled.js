import styled, { css } from 'styled-components';
import CameraLowEdit from './CameraLowEdit';

export default styled(CameraLowEdit).attrs({})`
    padding: 20px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
