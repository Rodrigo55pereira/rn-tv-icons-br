import React from "react";
import { IconBase } from "../../components/Icon/types";
import Svg, { Path } from "react-native-svg";

export const National = ({ size = 100, color = "black" }: IconBase) => (
  <Svg width={size} height={size} viewBox="0 0 667 667" fill="none">
    <Path
      d="M247 209H420V457H247V209ZM394.975 233.984H271.912V432.035H394.977L394.975 233.984Z"
      fill={color}
    />
  </Svg>
);
