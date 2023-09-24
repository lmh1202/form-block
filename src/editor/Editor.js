import {
    Dashicon,
    __experimentalText as Text,
    RadioControl,
    TextareaControl,

} from '@wordpress/components';

import Star from './Star';
import Sidebar from '../side-bar/Sidebar';
export default function Editor({ props }) {
    return (
        <>
            <div className='form-block-logo'>
                <img src='logo/logo.jpg' alt='Form Block Logo' />
            </div>

            <p className='form-block-title'>
                {props.attributes.title}
            </p>

            <p className='form-block-subtitle'>
                {props.attributes.subtitle}
            </p>

            <hr />

            {
                props.attributes.toggle && <RadioControl
                    className='form-block-radio'
                    label="Would you recommend it to your friends and colleagues"
                    selected={props.attributes.radio}
                    options={[
                        { label: 'Yes', value: 'yes' },
                        { label: 'No', value: 'no' },
                    ]}
                    onChange={(option) => {
                        props.setAttributes({ radio: option })
                    }}
                />
            }

            <div className='form-block-textarea'>
                <TextareaControl
                    label="Do you have any suggestions to improve our product and service?"
                    rows={2}
                    value={props.attributes.textArea.content}
                    style={{ height: props.attributes.textArea.heightProp }}
                    onChange={(nextValue) => setAttributes({ textArea: { ...props.attributes.textArea, content: nextValue } })}
                />
            </div>

            <Star props={{ props }} />
            <Sidebar props={props} />
        </>
    )
}