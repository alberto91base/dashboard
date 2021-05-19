const transformObject = (dataForm) => {
    const dataNew = transformObjectGeneral(dataForm);
    const metadata = transformObjectMetadata(dataForm);

    const dataTransformed = { ...dataNew, metadata };

    console.log('dataTransform', dataTransformed);

    return dataTransformed;
};

const transformObjectGeneral = (dataForm) => {
    const dataNew = {
        title: dataForm.title,
        url: dataForm.url,
        description: dataForm.description,
        date: dataForm.date,
        link: dataForm.link,
        linkName: dataForm.linkName,
        published: dataForm.published,
        shortText: dataForm.shortText,
        sideText: dataForm.sideText,
        sports: dataForm.sports,
        imageH1: dataForm.imageH1,
        imageBackground: dataForm.imageBackground,
        imageBackgroundFinal: dataForm.imageBackgroundFinal,
        elements: dataForm.trames,
    };
    return dataNew;
};

const transformObjectMetadata = (dataForm) => {
    const metadata = {
        title: dataForm.metadata.title || '',
        keywords: dataForm.metadata.keywords || '',
        rrss: [
            {
                social: 'facebook',
                textToShare: dataForm.metadata?.facebook?.textToShare,
                image: dataForm.metadata?.facebook?.image,
                image_alternativeText:
                    dataForm.metadata?.facebook?.image_alternativeText,
            },
            {
                social: 'twitter',
                textToShare: dataForm.metadata?.twitter?.textToShare,
                image: dataForm.metadata?.twitter?.image,
                image_alternativeText:
                    dataForm.metadata?.twitter?.image_alternativeText,
            },
        ],
    };
    return metadata;
};

const transformDataBbddMetatada = (dataForm) => {
    const metadata = {
        title: dataForm.metadata.title || '',
        keywords: dataForm.metadata.keywords || '',
        facebook: {
            textToShare: dataForm.metadata.rrss[0].textToShare || '',
            image: dataForm.metadata.rrss[0].image || '',
            image_alternativeText: dataForm.metadata.rrss[0].image_alternativeText || '',
        },
        twitter: {
            textToShare: dataForm.metadata.rrss[1].textToShare || '',
            image: dataForm.metadata.rrss[1].image || '',
            image_alternativeText: dataForm.metadata.rrss[1].image_alternativeText || '',
        },
    };
    return metadata;
};

const getValuesForDataDefault = (data) => {
    let dataDefault = {
        title: '',
        url: '',
        date: '',
        description: 'prueba',
        link: '',
        linkName: '',
        metadataDescription: '',
        metadataFacebookDescription: '',
        metadataFacebookImage: '',
        metadataKeywords: '',
        metadataTitle: '',
        metadataTwitter: '',
        published: false,
        shortText: '',
        sideText: '',
        sports: ['boxeo'],
        imageH1: { src: '', alternativeText: '' },
        imageBackground: { src: '', alternativeText: '' },
        imageBackgroundFinal: { src: '', alternativeText: '' },
        trames: [],
    };
    if (data) {
        const metadata = transformDataBbddMetatada(data);
        dataDefault = {
            ...dataDefault,
            id: data._id,
            title: data.title,
            url: data.url,
            date: data.date,
            description: data.description,
            link: data.link,
            linkName: data.linkName,
            published: data.published,
            shortText: data.shortText,
            sideText: data.sideText,
            sports: data.sports,
            imageH1: data.imageH1,
            imageBackground: data.imageBackground,
            imageBackgroundFinal: data.imageBackgroundFinal,
            trames: data.elements,
            metadata: metadata,
        };
    }
    return dataDefault;
};
export { transformObject, getValuesForDataDefault };
