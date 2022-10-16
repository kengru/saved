import { useCallback, useMemo } from "react";
import type { Colors } from "../utils/wwtypes";
import { invertHex } from "../utils/colors";

import styles from "./components.module.css";

type Props = {
  color: Colors;
};

export function Color({ color }: Props) {
  const invertColor = useMemo(() => invertHex(color.color), [color]);
  const copyHexValue = useCallback(() => {
    navigator.clipboard.writeText(color.color);
  }, []);

  return (
    <figure className={styles.colorFigure} onClick={() => copyHexValue()}>
      <div
        className={styles.colorRect}
        style={{ backgroundColor: color.color }}
      ></div>
      <figcaption
        style={{
          color: invertColor
        }}
      >
        {color.name}
      </figcaption>
      {color.desc ? (
        <p
          style={{
            color: invertColor
          }}
        >
          {color.desc}
        </p>
      ) : null}
    </figure>
  );
}
