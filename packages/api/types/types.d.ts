interface Properties {
  background: Array<string>;
  fill: Array<string>;
  'background-color': Array<string>;
  'color': Array<string>;
  'font-family': Array<string>;
  'font-size': Array<string>;
  'font-weight': Array<string>;
  'line-height': Array<string>;
  'letter-spacing': Array<string>;
}

interface Stats {
  declarations: {
    getUniquePropertyCount: (prop: string) => {}
    properties: Properties
  },
}

interface CountCase {
  name: string;
  count: number;
}

type Colors = Array<CountCase>
