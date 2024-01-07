import styles from './RegulatoryTitle.module.scss';

const RegulatoryTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default RegulatoryTitle;