import React from 'react'
import styles from './styles.module.css'

class Features extends React.PureComponent {
  renderList = (title, image, features) => (
    <div className={styles.list}>
      <img className={styles.listImage} src={image} alt={title} />
      <div className={styles.listTitle}>{title}</div>
      <ul>
        {features.map((feature, index) => (
          <li key={index.toString()}>{feature}</li>
        ))}
      </ul>
    </div>
  )

  render = () => (
    <div className={styles.container}>
      {this.renderList('Inspired by LISP', 'img/lisp-logo.png', [
        'Laconical syntax',
        'Prefix notation',
        'Powerful macros'
      ])}
      ,
      {this.renderList('JavaScript compatible', 'img/js-logo.png', [
        'Import JavaScript modules to Una',
        'Use any npm package in Una',
        'Works with React and React Native'
      ])}
    </div>
  )
}

export default Features
