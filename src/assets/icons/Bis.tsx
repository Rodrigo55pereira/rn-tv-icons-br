import React from 'react';
import { Svg, Path, Mask, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { IconBase } from '../../components/Icon/types';

export const Bis = ({ size = 100, color = 'black' }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 667 667" fill="none">
      <G clipPath="url(#clip0_1_2)">
        <Mask id="mask0_1_2" maskUnits="userSpaceOnUse" x="27" y="181" width="613" height="304">
          <Path d="M27 485H640V181H27V485Z" fill="white" />
        </Mask>
        <G mask="url(#mask0_1_2)">
          <Path d="M288.228 485H380.964V180.992H288.228V485Z" fill={color} />
          <Path d="M194.532 296.834C199.922 286.041 202.981 273.889 202.981 261.033C202.981 217.327 167.992 181.819 124.504 180.992H27V485L141.273 484.909C196.872 484.162 241.885 438.698 241.885 382.917C241.885 347.495 223.954 315.426 194.532 296.834Z" fill={color} />
          <Path d="M537.287 212.758C495.086 252.213 491.545 293.624 491.545 329.043L491.532 332.138C491.532 359.007 488.925 366.868 476.065 378.858L475.686 379.239C469.36 385.259 458.718 389.267 427.323 389.267V485C466.791 485 507.944 480.597 541.517 448.715C583.696 409.246 587.218 367.833 587.218 332.416L587.254 329.349C587.254 302.458 595.246 289.414 602.787 282.588C610.323 275.78 630.917 276.788 640 276.788V180.992C601.75 181.932 564.55 186.887 537.287 212.758Z" fill={color} />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Rect width="613" height="304" fill="white" transform="translate(27 181)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
