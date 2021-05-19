import styled, { css } from 'styled-components';
import LoadingIndicator from './LoadingIndicator';

export default styled(LoadingIndicator).attrs({})`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
