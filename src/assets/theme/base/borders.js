/**
=========================================================
*  React - v2.0.0
=========================================================





 =========================================================

* 
*/

/**
 * The base border styles for the  React.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire  React using thie file.
 */

//  React Base Styles
import colors from "assets/theme/base/colors";

//  React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey } = colors;

export default {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};