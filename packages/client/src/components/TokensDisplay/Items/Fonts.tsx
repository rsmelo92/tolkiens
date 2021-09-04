import Item from './Item';

import type { InnerFont } from '../index';

import styles from './fonts.module.css';

type FamilyType = {
  family: InnerFont['family'];
}

function Family({ family }: FamilyType) {
  const { default: main, alternative } = family;
  return (
    <div>
      <Item
        style={{ fontFamily: main?.value }}
        item={main}
        title="Default"
      />
      <Item
        style={{ fontFamily: alternative?.value }}
        item={alternative}
        title="Alternative"
      />
    </div>
  );
}

type WeightType = {
  weight: InnerFont['weight']
}

function Weight({ weight }: WeightType) {
  const { bold, extrabold, light, medium, normal, semibold, ultrabold } = weight || {};
  return (
    <div className={styles.itemsWrapper}>
      <Item style={{ fontWeight: ultrabold?.value }} item={ultrabold} title="Ultrabold" />
      <Item style={{ fontWeight: extrabold?.value }} item={extrabold} title="Extrabold" />
      <Item style={{ fontWeight: bold?.value }} item={bold} title="Bold" />
      <Item style={{ fontWeight: semibold?.value }} item={semibold} title="Semibold" />
      <Item style={{ fontWeight: medium?.value }} item={medium} title="Medium" />
      <Item style={{ fontWeight: normal?.value }} item={normal} title="Normal" />
      <Item style={{ fontWeight: light?.value }} item={light} title="Light" />
    </div>
  );
}

type SizeType = {
  size: InnerFont['size']
}

function Size({ size }: SizeType) {
  const { 
    large,
    medium,
    small,
    ultra,
    xlarge,
    xsmall,
    xxlarge,
    xxsmall,
  } = size || {};
  return (
    <div className={styles.itemsSizeWrapper}>
      <Item
        style={{ fontSize: ultra?.value }}
        item={ultra}
        title="ultra"
        example="Aa"
      />
      <Item
        style={{ fontSize: xxlarge?.value }}
        item={xxlarge}
        title="Xxlarge"
        example="Aa"
      />
      <Item
        style={{ fontSize: xlarge?.value }}
        item={xlarge}
        title="xlarge"
        example="Aa"
      />
      <Item
        style={{ fontSize: large?.value }}
        item={large}
        title="large"
        example="Aa"
      />
      <Item
        style={{ fontSize: medium?.value }}
        item={medium}
        title="Medium"
        example="Aa"
      />
      <Item
        style={{ fontSize: small?.value }}
        item={small}
        title="Normal"
        example="Aa"
      />
      <Item
        style={{ fontSize: xsmall?.value }}
        item={xsmall}
        title="xsmall"
        example="Aa"
      />
      <Item
        style={{ fontSize: xxsmall?.value }}
        item={xxsmall}
        title="xxsmall"
        example="Aa"
      />
    </div>
  );
}

type LineHeightType = {
  lineHeight: InnerFont['line-height']
}

function LineHeight({ lineHeight }: LineHeightType) {
  const { 
    large,
    medium,
    small,
    reset,
  } = lineHeight || {};
  return (
    <div className={styles.itemsWrapper}>
      <Item
        style={{ lineHeight: large?.value }}
        item={large}
        title="large"
        example="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum officia nesciunt obcaecati repellat minus architecto tenetur eum animi distinctio quos pariatur, modi hic accusantium recusandae optio sit inventore expedita." />
      <Item
        style={{ lineHeight: medium?.value }}
        item={medium}
        title="medium"
        example="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum officia nesciunt obcaecati repellat minus architecto tenetur eum animi distinctio quos pariatur, modi hic accusantium recusandae optio sit inventore expedita."
      />
      <Item
        style={{ lineHeight: small?.value }}
        item={small}
        title="small"
        example="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum officia nesciunt obcaecati repellat minus architecto tenetur eum animi distinctio quos pariatur, modi hic accusantium recusandae optio sit inventore expedita."
      />
      <Item
        style={{ lineHeight: reset?.value }}
        item={reset}
        title="reset"
        example="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum officia nesciunt obcaecati repellat minus architecto tenetur eum animi distinctio quos pariatur, modi hic accusantium recusandae optio sit inventore expedita."
      />
    </div>
  );
}

function Fonts({ item }: { item: InnerFont}) {
  const [title] = Object.keys(item);
  const {
    family,
    weight,
    size,
    'line-height': lineHeight,
  } = item || {};
  
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div>
        {family && <Family family={family} />}
        {weight && <Weight weight={weight} />}
        {size && <Size size={size} />}
        {lineHeight && <LineHeight lineHeight={lineHeight} />}
      </div>
    </>
  )
}

export default Fonts
