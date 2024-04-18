<?php defined( 'ABSPATH' ) || exit; // Exit if accessed directly
use Bookly\Backend\Components\Controls\Inputs;

?>
<?php foreach ( $options as $option ) : ?>
    <div class="form-group">
        <label for="bookly-option-<?php echo esc_attr( $option ) ?>"><?php echo esc_html( $option ) ?></label>
        <div class="input-group mb-3 bookly-js-diagnostic-option">
            <input value="<?php echo esc_attr( get_option( $option ) ) ?>" id="bookly-option-<?php echo esc_attr( $option ) ?>" class="form-control" type="text" name="<?php echo esc_attr( $option ) ?>"/>
            <div class="input-group-append">
                <button class="btn btn-default ladda-button" type="button" data-spinner-size="40" data-style="zoom-in" data-spinner-color="#666666">Apply</button>
            </div>
        </div>
    </div>
<?php endforeach ?>
