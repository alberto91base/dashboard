import React, { useState } from 'react';

import { useFieldArray } from 'react-hook-form';

import { InputText, ImageFile, DatePicker } from '@components';

const ZoomFrames = ({
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
        name: `${name}.elements`,
    });

    const getDataItem = (nameRecibed) => {
        return getValues(nameRecibed) || '';
    };

    return (
        <div className={className}>
            <p>Zoom frame</p>

            {fields.map((item, index) => {
                const fieldName = `${name}.elements[${index}]`;

                return (
                    <div key={item.id}>
                        <InputText
                            register={register}
                            name={`${fieldName}.title`}
                            label={'Título'}
                            error={errors?.elements[index]?.title}
                        />

                        <InputText
                            register={register}
                            name={`${fieldName}.description`}
                            label={'Descripción'}
                            error={errors?.elements[index]?.description}
                        />

                        <InputText
                            register={register}
                            name={`${fieldName}.photoDescription`}
                            label={'Descripción foto'}
                            error={errors?.elements[index]?.photoDescription}
                        />

                        <InputText
                            register={register}
                            name={`${fieldName}.paragraph`}
                            label={'Paragraph'}
                            error={errors?.elements[index]?.paragraph}
                        />

                        <InputText
                            register={register}
                            name={`${fieldName}.link`}
                            label={'link'}
                            error={errors?.elements[index]?.link}
                        />

                        <InputText
                            register={register}
                            name={`${fieldName}.position.x`}
                            label={'Position x'}
                            error={errors?.elements[index]?.position.x}
                        />

                        <InputText
                            register={register}
                            name={`${fieldName}.position.y`}
                            label={'Position y'}
                            error={errors?.elements[index]?.position.y}
                        />

                        <label>
                            <span>Imagen zoom frame {index}:</span>
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
                                errors?.elements[index]?.image?.alternativeText
                            }
                        />

                        <button type="button" onClick={() => remove(index)}>
                            Eliminar zoom frame
                        </button>
                    </div>
                );
            })}

            <button type="button" onClick={() => append()}>
                Añadir zoom frame
            </button>

            <button type="button" onClick={() => remove()}>
                Eliminar todos los zooms frames
            </button>
        </div>
    );
};

export default ZoomFrames;
