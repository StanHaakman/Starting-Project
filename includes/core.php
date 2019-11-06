<?php
/**
 *
 * Base functions and more
 * Note: All functions should be prefixed with `RED_`
 *
 *
 * @since   1.0.0
 *
 */

define('RED_LANG_KEY', 'redmond');
define('RED_THEME_URL', get_bloginfo('template_url'));
define('RED_ASSET_URL', RED_THEME_URL . '/dist');
define('RED_CSS_URL', RED_ASSET_URL . '/css');
define('RED_JS_URL', RED_ASSET_URL . '/js');
define('RED_IMG_URL', RED_ASSET_URL . '/images');

/**
 *
 * Theme setup
 *
 * @since 1.0.0
 *
 */

function red_setup()
{
//  Add thumbnails to posts
    add_theme_support('post-thumbnails');

//  Add locations for Wordpress menu locations
    register_nav_menus(array(
        'primary' => __('Main Menu', RED_LANG_KEY),
        'footer' => __('Footer Menu', RED_LANG_KEY),
    ));

    do_action('red_setup');
}

add_action('after_setup_theme', 'red_setup');