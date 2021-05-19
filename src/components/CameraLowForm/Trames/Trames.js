import React, { useState } from 'react';

import { useFieldArray } from 'react-hook-form';

import { Frames, Zooms, InputText, ImageFile } from '@components';

import { makeStyles } from '@material-ui/core/styles';

import NewAccordion from '../../Accordion/Accordion';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Trames = ({
    className,
    control,
    register,
    errors,
    getValues,
    setValue,
}) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name: 'trames',
    });

    // const classes = useStyles();

    return (
        <div className={className}>
            <div className="trames">
                <p>Tramos</p>

                {fields.map((item, index) => {
                    const fieldName = `trames[${index}]`;
                    return (
                        <div key={item.id}>
                            <NewAccordion index={index} defaultExpanded>
                                <div className="trames__inputs">
                                    <InputText
                                        register={register}
                                        name={`${fieldName}.title`}
                                        label={'Título'}
                                        error={errors && errors[index]?.title}
                                    />

                                    <InputText
                                        register={register}
                                        name={`${fieldName}.description`}
                                        label={'Descripción'}
                                        error={
                                            errors && errors[index]?.description
                                        }
                                    />

                                    <label>
                                        <span>Imagen</span>
                                        <ImageFile
                                            getValues={getValues}
                                            setValue={setValue}
                                            register={register}
                                            name={`${fieldName}.image`}
                                        />
                                    </label>
                                    {errors &&
                                    errors[index]?.image?.message && (
                                        <span className="inputText__error">
                                            {errors[index].image.message}
                                        </span>
                                    )}

                                    <Frames
                                        setValue={setValue}
                                        control={control}
                                        register={register}
                                        name={fieldName}
                                        errors={errors && errors[index]}
                                        getValues={getValues}
                                    />

                                    <Zooms
                                        setValue={setValue}
                                        control={control}
                                        register={register}
                                        name={fieldName}
                                        errors={errors && errors[index]}
                                        getValues={getValues}
                                    />

                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => remove(index)}
                                    >
                                        Eliminar{' '}
                                    </Button>
                                </div>
                            </NewAccordion>
                        </div>
                    );
                })}

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleIcon />}
                    onClick={() => append()}
                >
                    Nuevo tramo
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => remove()}
                    startIcon={<DeleteIcon />}
                >
                    Eliminar todos
                </Button>
            </div>
        </div>
    );
};

export default Trames;
