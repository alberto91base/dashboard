import styled, { css } from 'styled-components';
import Checkbox from './Checkbox';

export default styled(Checkbox).attrs({})`
    display: inline-flex;
    align-items: center;
    margin-right: 15px;
    .checkbox {
        &__label {
            cursor: pointer;
            &__text{
                padding-left: 5px;
            }
        }
        &__input {
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
