import styled, { css } from 'styled-components';
import Modal from './Modal';

export default styled(Modal).attrs({})`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    padding: 20px;

    .modal {
        &__content {
            padding: 20px;
            background: #ffffff;
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
