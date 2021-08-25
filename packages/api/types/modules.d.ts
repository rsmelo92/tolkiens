declare module 'get-css' {
  const func = (a: string): Promise<any> => {}
  export default func
}

interface Properties {
  background: Array<string>;
  fill: Array<string>;
  'background-color': Array<string>;
}

interface Stats {
  declarations: {
    getUniquePropertyCount: (prop: string) => {}
    properties: Properties
  },
}

declare module 'cssstats' {
  const func = (a: string): Stats => {}
  export default func
}

declare module 'get-css-colors' {
  const func = (a: string): Stats => {}
  export default func
}
