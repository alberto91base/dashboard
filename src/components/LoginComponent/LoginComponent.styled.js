import styled, { css } from 'styled-components';
import LoginComponent from './LoginComponent';

export default styled(LoginComponent).attrs({})`

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
