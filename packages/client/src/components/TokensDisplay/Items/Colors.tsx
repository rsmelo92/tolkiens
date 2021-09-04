import Item from './Item';

import type { InnerColor } from '../index'

import styles from './colors.module.css'

function ColorItem({ color }: { color: string }) {
  return (
    <div className={styles.colorContainer}>
      <span className={styles.colorName}>{color}</span>
      <div className={styles.color} style={{ backgroundColor: color }}></div>
    </div>
  )
}

type ColorType = {
  theme: {
    primary: InnerColor,
    secondary: InnerColor,
  }
}

export default function ColorRender({ item }: { item: ColorType }) {
  const { theme: { primary, secondary } } = item || {};
  return (
    <>
      <div className={styles.itemsWrapper}>
      <h2>Colors</h2>
        <Item 
          title="Primary"
          force
          example={
            <div className={styles.palette}>
              <ColorItem color={primary['00'].value} />
              <ColorItem color={primary['01'].value} />
              <ColorItem color={primary['02'].value} />
              <ColorItem color={primary['03'].value} />
              <ColorItem color={primary['04'].value} />
            </div>
          }
        />
        <Item 
          title="Secondary"
          force
          example={
            <div className={styles.palette}>
              <ColorItem color={secondary['00'].value} />
              <ColorItem color={secondary['01'].value} />
              <ColorItem color={secondary['02'].value} />
              <ColorItem color={secondary['03'].value} />
              <ColorItem color={secondary['04'].value} />
            </div>
          }
        />
      </div>
    </>
  )
}
