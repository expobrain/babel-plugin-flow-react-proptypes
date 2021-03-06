const babel = require('babel-core');
const content = `
var React = require('react');

type Choices = 'option1' | 'option2';

type FooT = {
    x?: Choices
};

type FooC = {
    lang: string,
};

class Foo extends React.Component<FooT, void, FooC> {
  render() {
    return <div />;
  }
};

export default Foo;
`;

it('allows specifying both props and context via parameters', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatchSnapshot();
});
