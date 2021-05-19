import styled, { css } from 'styled-components';
import ImageFile from './ImageFile';

export default styled(ImageFile).attrs({})`
    .imageFile {
        &__label {
            display: inline-block;
            &__text {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                background-color: indigo;
                color: white;
                padding: 0.5rem;
                font-family: sans-serif;
                border-radius: 4px;
                cursor: pointer;
                margin-bottom: 5px;
                svg{
                    padding-left: 5px;
                }
            }
        }
        &__inputFile {
            display: none;
        }
        &__inputText {
            display: none;
        }
        &__imgPreview {
            width: 500px;
            display: block;
            &__img {
                width: 100%;
            }
            &__notImg {
                width: 100%;
                min-height: 200px;
                border: 2px dashed lightgrey;
                cursor: pointer;
                height: 310px;
                display: flex;
                background: #f3f3f3;
                align-items: center;
                flex-direction: column;
                justify-content: center;
            }
        }
    }

    ${({ isTablet, isDesktop }) => (isTablet || isDesktop) && css``}
    ${({ isDesktop }) => isDesktop && css``};
`;
