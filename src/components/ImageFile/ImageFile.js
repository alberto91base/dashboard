import React, { useState } from 'react';
import ApiFileService from '@services/apiFile.service';

import { Spinner } from '@components';
import ErrorIcon from '@material-ui/icons/Error';
import DoneIcon from '@material-ui/icons/Done';
import ImageIcon from '@material-ui/icons/Image';

const endpointImage = process.env.REACT_APP_API_IMAGE;

const ImageFile = ({ className, register, name, setValue, getValues }) => {
    const [imageFile, setImageFile] = useState(null);
    const [statusImageUpload, setStatusImageUpload] = useState(null);

    const changeFile = (event) => {
        if (isValidFileExtension(event.target)) {
            if (event.target.files.length > 0) {
                saveImage(event.target.files[0]);
            } else {
                setValue(name, '');
                setImageFile(null);
            }
        }
    };

    const isValidFileExtension = (target) => {
        const fileName = target.value;
        const idxDot = fileName.lastIndexOf('.') + 1;
        const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (
            extFile == 'jpg' ||
            extFile == 'jpeg' ||
            extFile == 'png' ||
            extFile == 'gif'
        ) {
            return true;
        }
        return false;
    };

    const saveImage = (file) => {
        setStatusImageUpload('loading');

        // CONTENT DATA:
        const formData = new FormData();
        formData.append('location', 'dashboard');
        formData.append('imageFile', file, '1' + '_' + file.name);

        ApiFileService(endpointImage, formData)
            .then((response) => {
                setStatusImageUpload('good');
                setValue(name, response.data);
                setImageFile(response.data);
            })
            .catch((error) => {
                setValue(name, '');
                setImageFile(null);
                setStatusImageUpload('error');
            });
    };

    const messageUploadImage = () => {
        let html = null;
        switch (statusImageUpload) {
            case 'loading':
                html = <Spinner />;
                break;
            case 'good':
                html = (
                    <p>
                        Subido con exito
                        <DoneIcon style={{ color: 'green', fontSize: 30 }} />
                    </p>
                );
                break;
            case 'error':
                html = (
                    <p>
                        Error al subir archivo
                        <ErrorIcon style={{ color: 'red', fontSize: 30 }} />
                    </p>
                );
                break;
            default:
                break;
        }
        return html;
    };

    const urlImage = () => {
        let url = getValues(name) || '';
        if (url) {
            url = `${process.env.REACT_APP_IMAGES_HOST}${url}`;
        }
        return url;
    };

    return (
        <div className={`${className}`}>
            <div className="imageFile">
                <label className="imageFile__label">
                    <span className="imageFile__label__text">
                        Subir imágen <ImageIcon style={{ fontSize: 30 }} />
                    </span>
                    <input
                        className="imageFile__inputFile"
                        type="file"
                        onChange={changeFile}
                        accept=".png, .jpg, .jpeg, .jpg, .gif"
                    />

                    <input
                        className="imageFile__inputText"
                        type="text"
                        readOnly
                        {...register(name)}
                    />
                </label>
                <div className="imageFile__imgPreview">
                    {messageUploadImage()}
                    {!urlImage() && (
                        <div className="imageFile__imgPreview__notImg">
                            Imágenes soportadas(jpg/png).
                        </div>
                    )}
                    <img
                        className="imageFile__imgPreview__img"
                        alt=""
                        src={urlImage()}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageFile;
