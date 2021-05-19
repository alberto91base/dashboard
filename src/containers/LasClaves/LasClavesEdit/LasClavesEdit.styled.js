import styled, { css } from 'styled-components';
import LasClavesEdit from './LasClavesEdit';

export default styled(LasClavesEdit).attrs({})`
    padding: 20px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
