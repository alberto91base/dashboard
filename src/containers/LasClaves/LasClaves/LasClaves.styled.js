import styled, { css } from 'styled-components';
import LasClaves from './LasClaves';

export default styled(LasClaves).attrs({})`
    padding: 20px;
    .lasClaves__content {
        padding: 20px;
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
