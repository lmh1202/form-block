/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 * 
 * 
 */

export default function Star({ props }) {
    return (
        <div className='form-block-rating'>
            <p style={{ marginBottom: 0 }}>
                How satisfied are you with our company overall??
            </p>

            <div class="form-block-rate">
                <input type="radio" id="star5" name="rate" value="5" onChange={(val) => props.setAttributes({ rating: val.target.value })} />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" onChange={(val) => props.setAttributes({ rating: val.target.value })} />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" onChange={(val) => props.setAttributes({ rating: val.target.value })} />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" onChange={(val) => props.setAttributes({ rating: val.target.value })} />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" onChange={(val) => props.setAttributes({ rating: val.target.value })} />
                <label for="star1" title="text">1 star</label>
            </div>

        </div>

    )
}