import React from 'react'
import styles from './styles.module.css'

class Features extends React.PureComponent {
  renderList = (title, image, features) => (
    <div className={styles.list}>
      <img className={styles.listImage} src={image} alt={title} />
      <div className={styles.listTitle}>{title}</div>
    </div>
  )

  render = () => (
    <div className={styles.container}>
      {this.renderList('JavaScript compatible', 'img/js-logo.png')}
      {this.renderList('Use any npm package', 'img/npm-logo.png')}
      {this.renderList('Works with React and React Native', 'img/react-logo.png')}
    </div>
  )
}

export default Features
