
# Getting started: [SAP Fiori Fundamentals](https://sap.github.io/fundamental) with React.JS

- `yarn create react-app fiori-on-react && cd fiori-on-react`
- `yarn add fundamental-ui`
- add `@import "../node_modules/fundamental-ui/dist/all.min.css";` at the beginning of `./src/App.css`
- add the following in `./src/App.js`:

```jsx
...
render() {
    return (
      <div className="App fd-ui fd-ui--fundamental">
        <div className="fd-ui__header">
          <nav className="fd-global-nav">
            <div className="fd-global-nav__group fd-global-nav__group--left">
              <div className="fd-global-nav__product-name">Fiori Fundamentals on React</div>
            </div>
          </nav>
        </div>
        <header className="App-header">
        ... as in original file
```

- `yarn start`
- Keep an eye on the maturity level of https://github.com/SAP/fundamental-react