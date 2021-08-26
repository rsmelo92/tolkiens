import React from 'react'
import styles from './styles.module.css'

interface Props {
  url: string;
  children: React.ReactNode;
}

function Anchor({ url, children }: Props) {
  return (
    <a className={styles.anchor} href={url}>
      {children}
    </a>
  )
}

export default Anchor
