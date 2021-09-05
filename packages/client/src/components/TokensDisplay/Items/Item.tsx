import Card from '../../Card';
import styles from './item.module.css';

type ItemType = {
  item?: { value: string };
  title: string;
  style?: object;
  example?: React.ReactNode;
  force?: boolean;
}

export default function Item({ item, title, style, example, force }: ItemType) {
  if (!item && !force) {
    return null;
  }
  const ex = example || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  return (
    <Card>
      <div className={styles.item}>
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemContent}>{item?.value.replace(/,/g, ', ')}</p>
        <p className={styles.itemExample} style={style}>{ex}</p>
      </div>
    </Card>
  )
}
