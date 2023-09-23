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
            <div className='form-block-dash-icon'>
                <Dashicon
                    icon="email"
                    style={{ fontSize: "54px", width: "54px", height: "54px" }}
                />
            </div>

            <div className='form-block-title'>
                <Text variant="title.large" as="h1" >  {props.attributes.title}

                </Text>
            </div>

            <div className='form-block-subtitle'>
                <Text variant="title.small" as="h3">
                    {props.attributes.subtitle}
                </Text>
            </div>

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