import styled, { css } from 'styled-components';
import DatePicker from './DatePicker';

export default styled(DatePicker).attrs({})`
    .datePicker {
        &__label {
        }
        &__input {
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
