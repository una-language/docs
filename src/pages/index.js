import clsx from 'clsx'
import Features from '../components/Features'
import InteractiveConsole from '../components/InteractiveConsole'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import React from 'react'
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title='Welcome'>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <Features />
        </section>
        <section className={clsx(styles.section, styles.sectionGrey)}>
          <InteractiveConsole />
        </section>
      </main>
    </Layout>
  )
}
