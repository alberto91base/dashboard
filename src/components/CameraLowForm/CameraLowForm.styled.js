import styled, { css } from 'styled-components';
import CameraLowForm from './CameraLowForm';

export default styled(CameraLowForm).attrs({})`
    padding: 20px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
