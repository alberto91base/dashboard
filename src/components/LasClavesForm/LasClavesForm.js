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
} from '@components';

import { transformObject } from './LasClavesTransformObject';

const validationSchema = yup.object().shape({
    title: yup.string().min(4, 'mínimo 4').required('required'),
    published: yup.boolean().required('required'),
});

const LasClavesForm = ({ className, data, handleSubmitPrimary }) => {
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

    console.log('errors', errors);

    return (
        <div className={className}>
            <form
                data-test-id="form-las-claves"
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
                    name={'absoluteUrl'}
                    label={'Url absoluta (Ejemplo: https://google.es)'}
                    error={errors.absoluteUrl}
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

                <label>Imágen</label>
                <ImageFile
                    getValues={getValues}
                    setValue={setValue}
                    register={register}
                    name="image.src"
                />

                <InputText
                    register={register}
                    name={'image.alternativeText'}
                    label={'imagen alt'}
                    error={errors.image?.alternativeText}
                />

                <DatePicker
                    register={register}
                    name={'date'}
                    label={'Fecha'}
                    dateSelected={data.date}
                    error={errors.date}
                    setValue={setValue}
                />

                <div>
                    {!data ? (
                        <button type="submit">Crear</button>
                    ) : (
                        <button type="submit">Guardar</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LasClavesForm;
