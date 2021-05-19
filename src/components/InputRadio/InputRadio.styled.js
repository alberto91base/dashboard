import styled, { css } from 'styled-components';
import InputRadio from './InputRadio';

export default styled(InputRadio).attrs({})`
    .inputRadio {
        margin-bottom: 20px;
        &__principalLabel {
            display: block;
            padding-bottom: 5px;
        }
        &__items {
        }
        &__label {
            display: inline-flex;
            align-items: center;
            margin-right: 15px;
            &__text {
                padding-left: 5px;
            }
        }
        &__input {
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
