// TODO: Consider analyzing font size
function parseFontSize(array: Array<string>) {
  // Default web CSS3 font size mapping equivalent
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#syntax
  return {
    "font": {
      "size": {
        'xx-small': '0.5rem',
        'x-small': '0.625rem',
        'small': '0.875rem',
        'medium': '1rem',
        'large': '1.125rem',
        'x-large': '1.5rem',
        'xx-large': '2rem',
        'xxx-large': '3rem',
        'ultra': '4.25rem',
      }
    }
  }
}


export { parseFontSize }
