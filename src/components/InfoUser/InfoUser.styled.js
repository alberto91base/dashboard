import styled, { css } from 'styled-components';
import InfoUser from './InfoUser';

export default styled(InfoUser).attrs({})`

    .infoUser {
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
