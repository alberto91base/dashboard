import styled, { css } from 'styled-components';
import Zooms from './Zooms';

export default styled(Zooms).attrs({})`
    padding: 50px;

    .zoom {
        &__title {
            &__icon {
                margin-right: 5px;
            }
        }
        &__items {
            margin-bottom: 30px;
            &__item {
                margin-bottom: 30px;
                padding: 20px;
                background: #dddddd;
            }
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
