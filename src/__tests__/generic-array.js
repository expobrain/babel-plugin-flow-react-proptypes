const babel = require('babel-core');
const content = `
import React from 'react';

type Generic<T> = T[];
type Props = {
  foo: Generic<number>,
};

export default
class ArrayTest extends React.Component<Props> {
}
`;

it('generic-array', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['env', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
