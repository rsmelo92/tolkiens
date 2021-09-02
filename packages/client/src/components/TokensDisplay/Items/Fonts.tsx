import type { Item } from '../index'
import styles from './fonts.module.css'

function Fonts({ item }: { item: Item }) {
  const { font } = item;
  const [title, values] = Object.entries(font)[0];
  const items = Object.keys(values);
  console.log({ values });

  console.log({ items });
  
  const final = items.forEach(i => {
    console.log({ i });
  })

  console.log({ final });
  
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div>
      </div>
    </>
  )
}

export default Fonts
