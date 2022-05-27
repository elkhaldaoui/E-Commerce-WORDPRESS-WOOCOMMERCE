<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'O=!V&[`Y1))1akp<[f?/_0)EkC/|#l}^-L99Y+@ML0BwB]FuszCxWe=RKM2_@&,u' );
define( 'SECURE_AUTH_KEY',  'J=35 N*bCs?+1E>4]+WA$V[n|+d>!,Ch%J5`U}:TA(1QoIGQrk#-/yT?:^D}!1H#' );
define( 'LOGGED_IN_KEY',    'o`R}W$_aU|E(>{%RAFhkmvo!g%rWE&p_GPRWUI9t1Dxg&Fc2(c)_x5-g2K[wg$?6' );
define( 'NONCE_KEY',        '1h_gV(0d+-r:7J!K^.Z?d)2ia1zU|WYG+W4/+A$s9!zV<)[VJiu%0F}Gs2@DR6o8' );
define( 'AUTH_SALT',        'ThJ+~EB75xwr9b0_}XV]mt[m:_y:^[hTTz,F~#pXlJBV1rYkDBYOp!paF:Yurox8' );
define( 'SECURE_AUTH_SALT', '@JnXfQU3+[*F?w#.,0)ckY~vw1%I8Y=sJgKOi!A*8:bL%AKDYAC4L$9&s#VR%^t}' );
define( 'LOGGED_IN_SALT',   '{I3;ZjZ$J86$ZC_E}0Cu4p]-v=K{pkqyT)SKmPzZDw=^phcWdwXC$]~Qe=},-~1-' );
define( 'NONCE_SALT',       'sI<+T-!],X2G}x8PM o_ 6lvj|NU&3^ Xx%6.%X,TG=Fcmv.{+lt}<}`P@d~sx=u' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
