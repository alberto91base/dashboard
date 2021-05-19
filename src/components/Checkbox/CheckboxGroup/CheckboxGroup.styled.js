import styled, { css } from 'styled-components';
import CheckboxGroup from './CheckboxGroup';

export default styled(CheckboxGroup).attrs({})`
    .checkboxGroup {
        margin-bottom: 20px;
        &__principalLabel {
            display: block;
            padding-bottom: 5px;
        }
        &__label {
        }
        &__input {
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
