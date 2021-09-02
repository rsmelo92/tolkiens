import type { Item } from '../index'

import styles from './colors.module.css'

function ColorItem({ color }: { color: string }) {
  return (
    <div className={styles.colorContainer}>
      <div className={styles.color} style={{ backgroundColor: color }}></div>
      <span className={styles.colorName}>{color}</span>
    </div>
  )
}

export default function ColorRender({ item }: { item: Item }) {
  const { 
    color: { 
      theme: {
        primary, 
        secondary
      }
    } 
  } = item || {};

  return (
    <>
      <h2>Primary Colors</h2>
      <div className={styles.palette}>
        <ColorItem color={primary['00'].value} />
        <ColorItem color={primary['01'].value} />
        <ColorItem color={primary['02'].value} />
        <ColorItem color={primary['03'].value} />
        <ColorItem color={primary['04'].value} />
      </div>
      <h2>Secondary Colors</h2>
      <div className={styles.palette}>
        <ColorItem color={secondary['00'].value} />
        <ColorItem color={secondary['01'].value} />
        <ColorItem color={secondary['02'].value} />
        <ColorItem color={secondary['03'].value} />
        <ColorItem color={secondary['04'].value} />
      </div>
    </>
  )
}
