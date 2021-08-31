// TODO: Consider analyzing font size
function parseFontSize() {
  // Default web CSS3 font size mapping equivalent
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#syntax
  return {
    "font": {
      "size": {
        'xxsmall': { value: '0.5rem' },
        'xsmall': { value: '0.625rem' },
        'small': { value: '0.875rem' },
        'medium': { value: '1rem' },
        'large': { value: '1.125rem' },
        'xlarge': { value: '1.5rem' },
        'xxlarge': { value: '2rem' },
        'xxxlarge': { value: '3rem' },
        'ultra': { value: '4.25rem' },
      }
    }
  }
}


export { parseFontSize }
