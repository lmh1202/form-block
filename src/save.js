/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
// import { Dashicon } from '@wordpress/components';

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
export default function save({ attributes, setAttributes }) {
	return (
		<div
			{...useBlockProps.save()}
		>
			<div className='form-block-logo	'>
				<img src='logo/logo.jpg' alt='Form Block Logo' />

				{/* <Dashicon
					icon="email"
					style={{ fontSize: "54px", width: "54px", height: "54px" }}
				/> */}
			</div>

			<p className='form-block-title'>
				{attributes.title}
			</p>

			<p className='form-block-subtitle'>
				{attributes.subtitle}
			</p>

			<hr />

			{
				attributes.toggle && <div className='form-block-radio'>
					<span>Would you recommend it to your friends and colleagues?</span><br />
					<input type="radio" checked id="yes" name="radio" value="yes" />
					<label for="yes" id='yes-label'>Yes</label>
					<input type="radio" id="no" name="radio" value="no" />
					<label for="no">No</label>
				</div>
			}


			<div className='form-block-textarea'>
				<label for="textarea">Do you have any suggestions to improve our product and service?</label>
				<textarea style={{ height: attributes.textArea.heightProp }} value={attributes.textArea.content} name='form-block-textarea' id='form-block-textarea'></textarea>
			</div>

			<Star props={{ attributes, setAttributes }} />

			<button id='form-block-submit-btn'>
				Submit
			</button>

		</div >
	);
}
