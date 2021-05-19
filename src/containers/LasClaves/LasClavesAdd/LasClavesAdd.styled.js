import styled, { css } from 'styled-components';
import LasClavesAdd from './LasClavesAdd';

export default styled(LasClavesAdd).attrs({})`
    padding: 20px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
