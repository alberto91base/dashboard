import styled, { css } from 'styled-components';
import InputText from './InputText';

export default styled(InputText).attrs({})`
    .inputText {
        margin-bottom: 20px;
        &--hidden {
            display: none;
        }
        &__label {
            &__text {
                padding-bottom: 4px;
                display: block;
            }
        }
        &__input {
            display: block;
            width: 100%;
            border-radius: 4px;
            border: 1px solid #c8c8c8;
            padding-left: 6px;
            line-height: 1.7;
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
