import React from 'react';

import { InputText, ImageFile } from '@components';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Metadata = ({ className, register, errors, setValue, getValues }) => {
    return (
        <div className={`${className}`}>
            <div className="metadata">
                <img
                    className="metadata__imgTitle"
                    src={process.env.PUBLIC_URL + '/metadata.png'}
                />
                <div className="metadata__content">
                    <InputText
                        register={register}
                        name={'metadata.title'}
                        label={'Título'}
                        error={errors.metadata?.title}
                    />
                    <InputText
                        register={register}
                        name={'metadata.keywords'}
                        label={'Keywords'}
                        error={errors.metadata?.keywords}
                    />
                    <FacebookIcon style={{ color: '#4267B2', fontSize: 50 }} />
                    <p>Datos Para Facebook - Tamaño imagen ideal 1200x630</p>
                    <ImageFile
                        getValues={getValues}
                        setValue={setValue}
                        register={register}
                        name="metadata.facebook.image"
                    />
                    <InputText
                        register={register}
                        name={'metadata.facebook.image_alternativeText'}
                        label={'Texto alternativo imagen facebook'}
                        error={errors.metadata?.facebook?.image_alternativeText}
                    />
                    <InputText
                        register={register}
                        name={'metadata.facebook.textToShare'}
                        label={'Texto a compartir facebook'}
                        error={errors.metadata?.facebook?.textToShare}
                    />
                    <TwitterIcon
                        style={{ color: 'rgba(29,161,242,1.00)', fontSize: 50 }}
                    />
                    <WhatsAppIcon style={{ color: '#25D366', fontSize: 50 }} />
                    <ImageFile
                        getValues={getValues}
                        setValue={setValue}
                        register={register}
                        name="metadata.twitter.image"
                    />
                    <InputText
                        register={register}
                        name={'metadata.twitter.image_alternativeText'}
                        label={'Texto alternativo imagen twitter'}
                        error={errors.metadata?.twitter?.image_alternativeText}
                    />
                    <InputText
                        register={register}
                        name={'metadata.twitter.textToShare'}
                        label={'Texto a compartir twitter'}
                        error={errors.metadata?.twitter?.textToShare}
                    />
                </div>
            </div>
        </div>
    );
};

export default Metadata;
