const transformObject = (dataForm) => {
    const dataNew = transformObjectGeneral(dataForm);
    console.log('dataTransform', dataNew);
    return dataNew;
};

const transformObjectGeneral = (dataForm) => {
    const dataNew = {
        title: dataForm.title,
        description: dataForm.description,
        absoluteUrl: dataForm.absoluteUrl,
        date: dataForm.date,
        published: dataForm.published,
        sports: dataForm.sports,
        image: dataForm.image,
    };
    return dataNew;
};

const getValuesForDataDefault = (data) => {
    let dataDefault = {
        title: '',
        absoluteUrl: '',
        date: '',
        description: 'prueba',
        published: false,
        sports: ['boxeo'],
        image: { src: '', alternativeText: '' },
    };
    if (data) {
        dataDefault = {
            ...dataDefault,
            id: data._id,
            title: data.title,
            absoluteUrl: data.absoluteUrl,
            date: data.date,
            description: data.description,
            published: data.published,
            sports: data.sports,
            image: data.image,
        };
    }
    return dataDefault;
};
export { transformObject, getValuesForDataDefault };
