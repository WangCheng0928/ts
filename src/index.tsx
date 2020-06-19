import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC'
import HelloHooks from './components/demo/HelloHooks'

ReactDOM.render(
  <React.StrictMode>
    <HelloHooks name="typescript" />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
