import {
	useBlockProps,
} from '@wordpress/block-editor';

import Star from './editor/Star';
import img from './logo/logo.jpg'
export default function save({ attributes, setAttributes }) {
	const imgPath = '';

	return (
		<div
			{...useBlockProps.save()}
		>
			<div className='form-block-logo	'>
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
				<textarea style={{ height: attributes.textArea.heightProp }} value={attributes.textArea.content} id='form-block-textarea'></textarea>
			</div>

			<Star />

			<button id='form-block-submit-btn'>
				Submit
			</button>
		</div >
	);
}
