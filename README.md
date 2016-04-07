# ES5 React Demo

*React without a build step*

[Demo link](https://btmills.github.io/es5-react-demo/)

This is a quick hello world example using React written in plain ES5.

### Differences

I've included the equivalent ES6 (plus Babel stage 1) source code for comparison, but I haven't included the infrastructure that would be required to build it. Without Webpack and Babel, not too much changes:

- Use [npmcdn](https://npmcdn.com/) for dependencies.
- Replace JSX with [`React.createElement`](https://facebook.github.io/react/docs/top-level-api.html#react.createelement).
- During development, manually remove `.min` from npmcdn script URLs to get React's development-time errors messages.
