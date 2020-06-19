import React from 'react'
import { Button } from 'antd-mobile'

interface Greeting {
  firstName?: string
  lastName?: string
  name: string
}

interface State {
  count: number
}

class HelloClass extends React.Component<Greeting, State> {
  state: State = {
    count: 0,
  }

  static defaultProps = {
    firstName: '',
    lastName: '',
  }

  render() {
    return (
      <div>
        <p>点击次数：{this.state.count}</p>
        <Button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          Hello {this.props.name}
        </Button>
      </div>
    )
  }
}

export default HelloClass
