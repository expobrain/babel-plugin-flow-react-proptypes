const babel = require('babel-core');
const content = `
import React from 'react';
import type { Props as BaseProps } from './types';

type Props = BaseProps & { };

class C extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render = () => {
    return <div />;
  };
}
`;

it('class_with_render_and_extended_prop_types', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;

  // expect(res).toMatch(/_defineProperty\(.*Object.assign\({}, _types\.bpfrpt_proptype_Props/);
  expect(res).toMatchSnapshot();
});
