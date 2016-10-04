import React from 'react'

import Article from '../article'

export default class Featured extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Featured'
    }
  }

  render() {
    const articles = ['Some Article', 'Some Other Article', 'Yet Another Article', 'Still More'].map((title, i) => <Article key={i} title={title}/>)

    const adText = ['Add spot #1', 'Add spot #2', 'Add spot #3', 'Add spot #4', 'Add spot #5']

    const randomAd = adText[Math.round(Math.random() * (adText.length - 1))]

    return (
      <div>
        <h1>{this.state.title}</h1>
        <div class="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
              {randomAd}
            </div>
          </div>
          {articles}
        </div>
      </div>
    )
  }
}
