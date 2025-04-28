import React from "react";
import { IconBase } from "../../components/Icon/types";
import Svg, { Path } from "react-native-svg";

export const ID = ({ size = 100, color = "black" }: IconBase) => (
  <Svg width={size} height={size} viewBox="0 0 667 667" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M119 210V375.792L218.371 398.385V210H119ZM254.445 210V337.291V406.587L467.379 455C514.718 437.884 546.675 398.553 546.675 337.291C546.675 252.265 484.751 210 406.985 210H254.445ZM353.706 279.625H394.745C421.07 279.625 442.374 298.205 442.374 337.44C442.374 369.708 427.025 395.256 394.641 395.256H353.706V279.625Z"
      fill={color}
    />
  </Svg>
);
