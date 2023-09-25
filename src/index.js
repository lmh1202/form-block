import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	attributes: {
		title: {
			type: 'string',
			default: 'Title'
		},
		subtitle: {
			type: 'string',
			default: 'Subtitle'
		},
		toggle: {
			type: 'boolean',
			default: true,
		},
		textArea: {
			type: 'object',
			default: {
				content: '',
				heightProp: 250
			}
		},
		rating: {
			type: 'number',
			default: 0
		}
	},

	edit: Edit,

	save,
});
