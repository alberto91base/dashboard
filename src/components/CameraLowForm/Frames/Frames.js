import React, { useState } from 'react';

import { useFieldArray } from 'react-hook-form';

import { ImageFile } from '@components';

const Frames = ({
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
        name: `${name}.frames`,
    });

    return (
        <div className={className}>
            <p>Frames</p>

            {fields.map((item, index) => {
                const fieldName = `${name}.frames[${index}]`;

                return (
                    <div key={item.id}>
                        <label>
                            <span>Imagen frame {index}:</span>
                            <ImageFile
                                getValues={getValues}
                                setValue={setValue}
                                register={register}
                                name={`${fieldName}.image`}
                            />
                        </label>
                        {errors &&
                            errors.frames[index] &&
                            errors.frames[index].image && (
                            <span className="inputText__error">
                                {errors.frames[index].image.message}
                            </span>
                        )}

                        <button type="button" onClick={() => remove(index)}>
                            Eliminar frame
                        </button>
                    </div>
                );
            })}

            <button type="button" onClick={() => append()}>
                Añadir frame
            </button>

            <button type="button" onClick={() => remove()}>
                Eliminar todos los frames
            </button>
        </div>
    );
};

export default Frames;
