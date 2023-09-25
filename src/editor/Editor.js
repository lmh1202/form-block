import {
    RadioControl,
    TextareaControl,
} from '@wordpress/components';

import Star from './Star';
import img from '../logo/logo.jpg'
export default function Editor({ attributes }) {
    const imgPath = '';
    return (
        <>
            <div className='form-block-logo'>
                <img src={img} alt='Form Block Logo' />
            </div>

            <p className='form-block-title'>
                {attributes.title}
            </p>

            <p className='form-block-subtitle'>
                {attributes.subtitle}
            </p>

            <hr />

            {
                attributes.toggle && <RadioControl
                    className='form-block-radio'
                    label="Would you recommend it to your friends and colleagues"
                    options={[
                        { label: 'Yes', value: true },
                        { label: 'No', value: false },
                    ]}
                    disabled
                />
            }

            <div className='form-block-textarea'>
                <TextareaControl
                    label="Do you have any suggestions to improve our product and service?"
                    rows={2}
                    style={{ height: attributes.textArea.heightProp }}
                    disabled
                />
            </div>

            <Star />
        </>
    )
}