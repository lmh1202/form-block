/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	Dashicon,
	__experimentalText as Text,
	RadioControl,
	TextareaControl,
} from '@wordpress/components';

import {
	useBlockProps,
} from '@wordpress/block-editor';
import Star from './editor/Star';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	// return (
	// 	<p {...useBlockProps.save()}>
	// 		{'Form Block – hello from the saved content!'}
	// 	</p>
	// );
	return (
		<div
			{...useBlockProps.save()}
		>
			<p>Cmt:{attributes.textArea.content}</p>
			<p>Rating:{attributes.rating}</p>
		</div>
	);
}
