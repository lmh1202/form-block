import { __ } from '@wordpress/i18n';

import {
    TextControl,
    ToggleControl,
    __experimentalNumberControl as NumberControl,
    PanelBody
} from '@wordpress/components';

import {
    InspectorControls,
} from '@wordpress/block-editor';

export default function Sidebar({ attributes, setAttributes }) {
    return (
        <>
            <InspectorControls>
                <PanelBody title='Setting'>
                    <div className='form-block-sidebar'>
                        <fieldset>
                            <legend>{__('Title', 'form-block')}</legend>
                            <TextControl value={attributes.title} onChange={(nextValue) => setAttributes({ title: nextValue })} />
                        </fieldset>
                        <fieldset>
                            <legend>{__('Subtitle', 'form-block')}</legend>
                            <TextControl value={attributes.subtitle} onChange={(nextValue) => setAttributes({ subtitle: nextValue })} />
                        </fieldset>
                        <fieldset>
                            <ToggleControl
                                label="Hide Radio"
                                checked={attributes.toggle}
                                onChange={(e) => setAttributes({ toggle: e })}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>
                                {__('Textarea Height', 'form-block')}
                            </legend>
                            <NumberControl
                                value={attributes.textArea.heightProp}
                                onChange={(e) => setAttributes({ textArea: { ...attributes.textArea, heightProp: e } })
                                }
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </InspectorControls>
        </>
    )
}