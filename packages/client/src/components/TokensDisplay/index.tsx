import Colors from './Items/Colors'
import Fonts from './Items/Fonts'

type InnerColor = {
  '00': { value: string };
  '01': { value: string };
  '02': { value: string };
  '03': { value: string };
  '04': { value: string };
}

export interface Item {
  color: {  
    theme: {
      primary: InnerColor,
      secondary: InnerColor,
    }
  },
  font: {
    'line-height': { 
      "small": { "value": string },
      "medium": { "value": string },
      "large": { "value": string },
      "reset": { "value": string },
    };
    family: { 
      "default": { "value": string},
      "alternative": { "value": string},
    };
    weight: {   
      '100'?: 'thin',
      '200'?: 'extralight',
      '300'?: 'light',
      '400'?: 'normal',
      '500'?: 'medium',
      '600'?: 'semibold',
      '700'?: 'bold',
      '800'?: 'extrabold',
      '900'?: 'ultrabold', 
    };
    size: { 
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
  },
}

interface Props {
  tokens: Array<Item>;
}

function TokensDisplay({ tokens }: Props) {
  return (
    <div>
      {tokens.map(token => {
        const [key] = Object.keys(token);
        if (key === 'color' && token.color) { 
          return <Colors item={token} />
        }
        if (key === 'font' && token.font) { 
          return <Fonts item={token} />
        }
        return null;
      })}
    </div>
  )
}

export default TokensDisplay;
