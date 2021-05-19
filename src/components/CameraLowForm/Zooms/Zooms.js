import React, { useState } from 'react';

import { useFieldArray } from 'react-hook-form';

import ImageSearchIcon from '@material-ui/icons/ImageSearch';

import { InputText, ImageFile, DatePicker, ZoomFrames } from '@components';

const Zooms = ({
    className,
    control,
    register,
    errors,
    name,
    getValues,
    setValue,
}) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name: `${name}.zoom`,
    });

    const getDataItem = (nameRecibed) => {
        return getValues(nameRecibed) || '';
    };

    return (
        <div className={className}>
            <div className="zoom">
                <p className="zoom__title">
                    <span className="zoom__title__icon">
                        <ImageSearchIcon style={{ fontSize: 50 }} />
                    </span>
                    Zoom
                </p>
                <div className="zoom__items">
                    {fields.map((item, index) => {
                        const fieldName = `${name}.zoom[${index}]`;

                        return (
                            <div key={item.id} className="zoom__items__item">
                                <InputText
                                    register={register}
                                    name={`${fieldName}.title`}
                                    label={'Título'}
                                    error={errors?.zoom[index]?.title}
                                />

                                {errors?.zoom[index]?.title && (
                                    <span className="inputText__error">
                                        {errors?.zoom[index]?.title.message}
                                    </span>
                                )}

                                <InputText
                                    register={register}
                                    name={`${fieldName}.description`}
                                    label={'Descripción'}
                                    error={errors?.zoom[index]?.description}
                                />

                                <label>
                                    <span>Imagen zoom {index}:</span>
                                    <ImageFile
                                        getValues={getValues}
                                        setValue={setValue}
                                        register={register}
                                        name={`${fieldName}.image.src`}
                                    />
                                </label>

                                <InputText
                                    register={register}
                                    name={`${fieldName}.image.alternativeText`}
                                    label={'Texto alternativo imagen'}
                                    error={
                                        errors?.zoom[index]?.image
                                            .alternativeText
                                    }
                                />

                                <label>
                                    <span>Imagen zoom bg {index}:</span>
                                    <ImageFile
                                        getValues={getValues}
                                        setValue={setValue}
                                        register={register}
                                        name={`${fieldName}.imageBg.src`}
                                    />
                                </label>

                                <InputText
                                    register={register}
                                    name={`${fieldName}.imageBg.alternativeText`}
                                    label={
                                        'Texto alternativo imagen background'
                                    }
                                    error={
                                        errors?.zoom[index]?.imageBg
                                            .alternativeText
                                    }
                                />

                                <ZoomFrames
                                    setValue={setValue}
                                    control={control}
                                    register={register}
                                    name={fieldName}
                                    errors={errors && errors[index]}
                                    getValues={getValues}
                                />

                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                >
                                    Eliminar zoom
                                </button>
                            </div>
                        );
                    })}
                </div>

                <button type="button" onClick={() => append()}>
                    Añadir zoom
                </button>

                <button type="button" onClick={() => remove()}>
                    Eliminar todos los zooms
                </button>
            </div>
        </div>
    );
};

export default Zooms;
