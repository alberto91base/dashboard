import styled, { css } from 'styled-components';
import LasClavesForm from './LasClavesForm';

export default styled(LasClavesForm).attrs({})`
    padding: 20px;

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
