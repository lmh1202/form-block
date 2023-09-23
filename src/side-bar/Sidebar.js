/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
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

export default function Sidebar({ props }) {
    return (
        <>
            <InspectorControls>
                <PanelBody title='Chanel setting'>
                    <div className='form-block-sidebar'>
                        <fieldset>
                            <legend>{__('Title', 'form-block')}</legend>
                            <TextControl value={props.attributes.title} onChange={(nextValue) => props.setAttributes({ title: nextValue })} />
                        </fieldset>
                        <fieldset>
                            <legend>{__('Subtitle', 'form-block')}</legend>
                            <TextControl value={props.attributes.subtitle} onChange={(nextValue) => props.setAttributes({ subtitle: nextValue })} />
                        </fieldset>
                        <fieldset>
                            <ToggleControl
                                label="Hide Radio"
                                checked={props.attributes.toggle}
                                onChange={(e) => props.setAttributes({ toggle: e })}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>
                                {__('Textarea Height', 'form-block')}
                            </legend>
                            <NumberControl
                                value={props.attributes.textArea.heightProp}
                                onChange={(e) => props.setAttributes({ textArea: { ...props.attributes.textArea, heightProp: e } })
                                }
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </InspectorControls>
        </>
    )
}