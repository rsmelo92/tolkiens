import { useState } from 'react'

import Colors from './Items/Colors'
import Fonts from './Items/Fonts'
import Button from '../Button'
import Modal from '../Modal'

import styles from './styles.module.css';

export type InnerColor = {
  '00': { value: string };
  '01': { value: string };
  '02': { value: string };
  '03': { value: string };
  '04': { value: string };
}

export type InnerFont = {
  'line-height'?: {
    "small": { "value": string },
    "medium": { "value": string },
    "large": { "value": string },
    "reset": { "value": string },
  };
  family: { 
    "default"?: { "value": string},
    "alternative"?: { "value": string},
  };
  weight: {
    'thin'?: { value: '100' },
    'extralight'?: { value: '200' },
    'light'?: { value: '300' },
    'normal'?: { value: '400' },
    'medium'?: { value: '500' },
    'semibold'?: { value: '600' },
    'bold'?: { value: '700' },
    'extrabold'?: { value: '800' },
    'ultrabold'?: { value: '900' }, 
  };
  size?: { 
    'xxsmall': { value: string },
    'xsmall': { value: string },
    'small': { value: string },
    'medium': { value:string },
    'large': { value: string },
    'xlarge': { value: string },
    'xxlarge': { value:string },
    'xxxlarge': { value:string },
    'ultra': { value: string }, 
  };
}

export interface Item {
  color: {  
    theme: {
      primary: InnerColor,
      secondary: InnerColor,
    }
  };
  font: InnerFont;
}

interface Props {
  tokens: Array<Item>;
}

function TokensDisplay({ tokens }: Props) {
  const [opened, setOpened] = useState<boolean>(false)

  const fonts = tokens.map(t => t.font).filter(Boolean);
  const colors = tokens.map(t => t.color).filter(Boolean);
  const hasTokens = tokens && tokens.length > 0;
  const showContainer = hasTokens ? styles.containerShow : '';

  const handleDownload = () => {
    const stringifiedTokens = JSON.stringify(tokens);
    const tokensEncoded = btoa(stringifiedTokens);
    window.location.assign(`/download?tokens=${tokensEncoded}`)
    setOpened(true);
  }

  return (
    <>
      {hasTokens && (
        <div className={`${styles.downloadButton} ${showContainer}`}>
          <Button variation="tertiary" text="Download Variations" onClick={handleDownload} />
        </div>
      )}
      <div className={`${styles.container} ${showContainer}`}>
        {colors.map(c => <Colors item={c} />)}
        {fonts.map(f => <Fonts item={f} />)}
      </div>
      <Modal open={opened} onClose={() => {setOpened(false)}} />
    </>
  )
}

export default TokensDisplay;
