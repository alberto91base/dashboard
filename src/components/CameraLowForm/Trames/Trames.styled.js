import styled, { css } from 'styled-components';
import Trames from './Trames';

export default styled(Trames).attrs({})`
    padding: 50px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
