import React from 'react'

class Screen extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.content}</div>
  }
}

Screen.defaultProps = {
  content: 'YOLO'
}

export default Screen
