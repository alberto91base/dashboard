import React, { useState, useEffect, useRef, useMemo } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    InputText,
    InputRadio,
    ImageFile,
    CheckboxGroup,
    DatePicker,
    Trames,
    Metadata,
} from '@components';

import { transformObject } from './CameraLowTransformObject';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const validationSchema = yup.object().shape({
    title: yup.string().min(4, 'mínimo 4').required('required'),
    published: yup.boolean().required('required'),
    trames: yup.array().of(
        yup.object().shape({
            title: yup.string().required('title is required'),
            description: yup.string().required('description is required'),
        })
    ),
});

const CameraLowForm = ({ className, data, handleSubmitPrimary }) => {
    const [defaultValues] = useState(data);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        getValues,
        setValue,
    } = useForm({
        defaultValues,
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });

    const handleSubmitAction = (dataForm) => {
        //cambiado ficheros por url de imagen del servidor
        // const dataFiles = getDataFiles(dataForm);
        // dataForm = { ...dataForm, ...dataFiles };
        const dataTransformed = transformObject(dataForm);
        console.log('dataForm', dataForm);

        let dataFormNew = {
            data: {
                ...dataTransformed,
            },
        };
        if (data) {
            const id = data.id;
            dataFormNew = {
                ...dataFormNew,
                id: id,
            };
        }
        handleSubmitPrimary(dataFormNew);
    };

    const getDataFiles = (dataForm) => {
        const allInputFile = document.querySelectorAll('input[type="file"]');
        let dataFiles = {};
        const { trames } = dataForm; //no delete, use in eval(...)

        allInputFile.forEach((inputFile) => {
            const inputFileName = inputFile.getAttribute('name');

            const inputFileUrlImage = inputFile.getAttribute('data-url-image');
            if (inputFileName.includes('trames[')) {
                if (inputFileName.includes('frames[')) {
                    const indexPoint = inputFileName.lastIndexOf('.');
                    const frame = eval(inputFileName.slice(0, indexPoint));
                    frame.image = inputFileUrlImage;
                } else {
                    const indexPoint = inputFileName.indexOf('.');
                    const trame = eval(inputFileName.slice(0, indexPoint));
                    trame.image = inputFileUrlImage;
                }
            } else {
                dataFiles = {
                    ...dataFiles,
                    [inputFileName]: inputFileUrlImage,
                };
            }
        });
        return dataFiles;
    };

    const getErrors = (index, camp, field) => {
        let message;
        if (errors[camp]) {
            if (errors[camp][index]) {
                if (errors[camp][index][field]) {
                    if (errors[camp][index][field]['message']) {
                        message = errors[camp][index][field]['message'];
                    }
                }
            }
        }
        if (message) {
            return <p className="error">{message}</p>;
        } else {
            return <></>;
        }
    };

    console.log('errors', errors);

    return (
        <div className={className}>
            <form
                data-test-id="form-camera-low"
                onSubmit={handleSubmit(handleSubmitAction)}
            >
                <InputText
                    register={register}
                    name={'title'}
                    label={'Título'}
                    error={errors.title}
                />
                <InputText
                    register={register}
                    name={'description'}
                    label={'Descripción'}
                    error={errors.description}
                />
                <InputText
                    register={register}
                    name={'url'}
                    label={'Url (Ejemplo: simone-biles)'}
                    error={errors.url}
                />
                <InputRadio
                    register={register}
                    name={'published'}
                    label="¿Publicado?"
                    values={[
                        {
                            label: 'Publicado',
                            value: true,
                        },
                        {
                            label: 'Borrador',
                            value: false,
                        },
                    ]}
                    data={[data.published]}
                    error={errors.published}
                />
                <InputText
                    register={register}
                    name={'shortText'}
                    label={'Texto corto para relacionados y agregadores'}
                    error={errors.shortText}
                />

                <InputText
                    register={register}
                    name={'sideText'}
                    label={'Texto corto para el lateral'}
                    error={errors.sideText}
                />

                <CheckboxGroup
                    register={register}
                    name={'sports'}
                    label="Deporte"
                    values={[
                        { label: 'Boxeo', value: 'boxeo' },
                        { label: 'Baloncesto', value: 'baloncesto' },
                        {
                            label: 'Gimnasia rítmica',
                            value: 'Gimnasia rítmica',
                        },
                    ]}
                    error={errors.sports}
                />

                <label>Imagen nombre con medalla (Mínimo 300px altura)</label>
                <ImageFile
                    getValues={getValues}
                    setValue={setValue}
                    register={register}
                    name="imageH1.src"
                />

                <InputText
                    register={register}
                    name={'imageH1.alternativeText'}
                    label={'Image h1 alt'}
                    error={errors.imageH1?.alternativeText}
                />

                <label>Imagen Fondo</label>
                <ImageFile
                    getValues={getValues}
                    setValue={setValue}
                    register={register}
                    name="imageBackground.src"
                />

                <InputText
                    register={register}
                    name={'imageBackground.alternativeText'}
                    label={'Image Background alt'}
                    error={errors.imageBackground?.alternativeText}
                />

                <label>Imagen Fondo Final</label>
                <ImageFile
                    getValues={getValues}
                    setValue={setValue}
                    register={register}
                    name="imageBackgroundFinal.src"
                />

                <InputText
                    register={register}
                    name={'imageBackgroundFinal.alternativeText'}
                    label={'Image background final alt'}
                    error={errors.imageBackgroundFinal?.alternativeText}
                />

                <InputText
                    register={register}
                    name={'link'}
                    label={'Enlace al vídeo completo'}
                    error={errors.link}
                />

                <InputText
                    register={register}
                    name={'linkName'}
                    label={'Texto descriptivo del enlace al vídeo'}
                    error={errors.linkName}
                />

                <DatePicker
                    register={register}
                    name={'date'}
                    label={'Fecha'}
                    dateSelected={data.date}
                    error={errors.date}
                    setValue={setValue}
                />

                <Trames
                    setValue={setValue}
                    control={control}
                    getValues={getValues}
                    register={register}
                    getErrors={getErrors}
                    errors={errors.trames}
                />

                <Metadata
                    getValues={getValues}
                    setValue={setValue}
                    register={register}
                    errors={errors}
                />

                <div>
                    {!data ? (
                        <button type="submit">Crear</button>
                    ) : (
                        <button type="submit">Guardar</button>
                        // <Button
                        //     variant="contained"
                        //     color="primary"
                        //     size="large"
                        //     type="submit"
                        //     startIcon={<SaveIcon />}
                        // >
                        //     Guardar
                        // </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CameraLowForm;
