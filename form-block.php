<?php
/**
 * Plugin Name:       Form Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       form-block
 */
add_action('init', 'init');

function init()
{
    register_block_type(__DIR__ . '/build');

    add_action('wp_ajax_form_block_action',  'handle_ajax');
    add_action('wp_ajax_nopriv_form_block_action',  'handle_ajax');
    add_action('wp_enqueue_scripts',  'register_ajax');
    add_filter('comment_text', 'custom_comment_text', 10, 2);
}

function handle_ajax()
{   
    $wp_json_error = array(
        'status'=>500,
        'message' => 'Add new comment failed'
    );

    if (empty($_POST)) {
        return wp_send_json_error($wp_json_error);
    }

    $comment = isset($_POST['form_block_comment']) ? sanitize_text_field($_POST['form_block_comment'])  : '';
    $rating = isset($_POST['form_block_rating']) ? intval($_POST['form_block_rating'])  : '';
    $post_id = isset($_POST['postID']) ? intval($_POST['postID']) : '';

    if (empty($comment) || empty($post_id)) {
        return wp_send_json_error($wp_json_error);
    }

    // $author_id = get_post_field('post_author', $post_id);
    // $display_name = get_the_author_meta('nickname', $author_id); 

    $comment_data = array(
        'comment_post_ID' => $post_id, 
        // 'comment_author' => $display_name,
        'comment_content' => $comment,
    );

    if ($rating) {
        $comment_data['comment_meta'] = array('rating'=>$rating);
    }

    $is_insert_comment = wp_insert_comment($comment_data);

    if(!$is_insert_comment) {
        return wp_send_json_error($wp_json_error);
    }

    return wp_send_json_success(
        [
            'status'=>200,
            'message'=>'Add new a comment successfully'
        ]
    );
}

function register_ajax()
{
    wp_register_script('form-block', plugin_dir_url(__FILE__) . 'src/ajax/ajax.js');
    wp_enqueue_script('form-block');
    wp_localize_script(
        'form-block',
        'form_block',
        array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'template_directory' => plugin_dir_url(__FILE__)   
        ),
    );
}

function custom_comment_text($comment_text,$comment)
{
    $comment_meta = get_comment_meta($comment->comment_ID, 'rating', true);
    if($comment_meta) {
        $rating =  '<div class="form-block-front-rate">';
        for ($i=$comment_meta;$i>=1;$i--){
            $rating .= '<label></label>';
        }
        $rating .= '</div>';

        $comment_text .= $rating;

        return $comment_text;
    }
    return $comment_text;
}
