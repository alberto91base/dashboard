import styled, { css } from 'styled-components';
import Metadata from './Metadata';

export default styled(Metadata).attrs({})`
    .metadata {
        &__imgTitle {
            width: 200px;
        }
        &__content {
            padding: 20px;
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
