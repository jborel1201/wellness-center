import { cpfPath, poleEmploiPath, fafceaPath, fourxPath, qualiopiAFPath } from '#images'

import styles from './Financing.module.scss'

const CHOICES = [
  {
    id: 1,
    title: 'CPF',
    description: 'Mon compte formation est un service et nous vous accompagnons pas à pas dans votre démarche.',
    image: cpfPath,
    color: '#DDBEA6'
  }, {
    id: 2,
    title: 'ÉCHELONNEMENT',
    description: 'Paiement en 4 fois sans frais à 0% pour le financement personnel',
    image: fourxPath,
    color: '#736C67'
  }, {
    id: 3,
    title: 'RECONVERSION',
    description: 'Le pôle emploi peut compléter votre budget CPF',
    image: poleEmploiPath,
    color: '#EDEDED'
  }, {
    id: 4,
    title: 'ARTISANS',
    description: 'Tout savoir sur cette solution de financement dédiée aux artisans et professions',
    image: fafceaPath,
    color: '#BB987D'
  }
]

const Financing = () => {
  return (
    <div className='container'>
      <header>
        <h2>Financements</h2>
        <h3>Obtenez un financement complet de votre formation</h3>
      </header>
      <section className={styles.sectionHelp}>
        <h3>Découvrez toutes nos solutions de financements</h3>
        <div className={styles.helpContent}>
          <p>Que vous souhaitiez évoluer professionnellement ou changer de voie, vous êtes au bon endroit. Nous vous encourageons à explorer toutes les options de financement disponibles. Ceux-ci vous aideront à profiter des opportunités d'apprentissage chez Wellness Center Academy.</p>
        </div>
      </section>
      <section className={styles.sectionFinancing}>
        <h3>Les différents modes de financements</h3>
        <p>Le délai d'accès à la formation inclut un droit de rétractation accordé à l'apprenant, conformément à la réglementation en vigueur.</p>
        <div className={styles.financingContent}>
          {CHOICES.map(choice => (
            <div className={styles.card} key={choice.id} style={{ backgroundColor: choice.color }}>
              <div className={styles.cardImage}>
                <img src={choice.image} alt="" />
              </div>
              <h3>{choice.title}</h3>
              <p>{choice.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <img src={qualiopiAFPath} alt="footer-logo" />
      </footer>
    </div>
  )
}

export default Financing