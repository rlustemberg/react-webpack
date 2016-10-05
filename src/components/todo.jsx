import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {complete, edit, text} = this.props
    const icon = complete
      ? "fa fa-fw fa-check"
      : "fa fa-fw fa-times"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      )
    }

    return (
      <li class="list-group-item">
        <span>{text}</span>
        <i class={icon}></i>
      </li>
    )
  }
}
