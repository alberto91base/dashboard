import styled, { css } from 'styled-components';
import Login from './Login';

export default styled(Login).attrs({})`

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
