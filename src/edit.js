import {
	useBlockProps,
} from '@wordpress/block-editor';

import Editor from './editor/Editor';
import Sidebar from './sidebar/Sidebar';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<Editor attributes={attributes} />
			<Sidebar attributes={attributes} setAttributes={setAttributes} />
		</div>
	);
}
