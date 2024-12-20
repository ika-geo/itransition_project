import React from 'react';

import ImageUploading from 'react-images-uploading';
import {useTranslation} from "react-i18next";

const AddImage=({image, setImage}) =>{

    const {t} = useTranslation()

    const onChange = (image) => {
        setImage(image);
    };

    return (
        <div>
            <ImageUploading
                multiple={false}
                value={image}
                onChange={onChange}
                dataURLKey="data_url"
                // maxFileSize='10000000'
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    <div className="upload__image-wrapper">

                        {   !image.length &&
                            <button
                                className='button'
                                style={isDragging ? {color: 'red'} : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                {t('addImage')}
                            </button>
                        }
                        {imageList.map((image, index) => (
                            <div key={index}>
                                <img className='mb-2 rounded max-h-[500px]' src={image['data_url']} alt=""/>
                                <div className="image-item__btn-wrapper mb-2 flex justify-between">
                                    <button className='button mr-2' onClick={() => onImageUpdate(index)}>{t('update')}</button>
                                    <button className='button bg-red-500' onClick={() => onImageRemove(index)}>{t('remove')}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default AddImage