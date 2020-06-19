import React, { useState, useEffect } from 'react'
import { Button } from 'antd-mobile'

interface Greeting {
  name: string
  firstName?: string
  lastName?: string
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    if (count > 5) {
      setText('休息一下')
    }
  }, [count])

  return (
    <div>
      <p>
        点击次数：{count} {text}
      </p>
      <Button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Hello {props.name}
      </Button>
    </div>
  )
}

export default HelloHooks
