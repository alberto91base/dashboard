import styled, { css } from 'styled-components';
import AlertIndicator from './AlertIndicator';

export default styled(AlertIndicator).attrs({})`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .alertIndicator {
        padding: 20px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        &__error {
            background: #f34b4b;
        }
        &__info {
            background: #4ede4e;
        }
    }
    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
