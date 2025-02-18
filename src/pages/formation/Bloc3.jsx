import React, { useEffect } from 'react'
import FormationItemTitle from '#components/FormationItemTitle'
import BlocHead from '#components/BlocHead.jsx'

import styles from './Formation.module.scss'

const Bloc3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <header>
        <h2>FORMATION</h2>
        <h3>Bloc 3 du CAP esthétique</h3>
      </header>
      <BlocHead />
      <div className={styles.content}>
        <FormationItemTitle title='Objectif de la formation' />
        <div className={styles.formationItemContent}>
          <ul>
            <li>Permet la compréhension et l'organisation d'un institut de beauté et de bien être</li>
            <li>Apprendre la prise en charge d'une clientèle et mettre en valeur les produits
              et les soins proposés (voir notamment le règlement d'examen et les
              définitions d'épreuves)</li>
            <li>Les modalités d’évaluation sont décrites dans les annexes de l’arrêté
              définissant le diplôme relatives à l’évaluation (voir notamment le règlement
              d’examen et les définitions d’épreuves)</li>
          </ul>
        </div>
        <FormationItemTitle title='Public visé' />
        <div className={styles.formationItemContent}><p className={styles.bold}>Tout public</p></div>
        <FormationItemTitle title='Pré-requis' />
        <div className={styles.formationItemContent}>
          Une attestation sur l’honneur sera à signer en début de formation attestant que
          l’apprenant a bien l’intention de passer le CAP esthétique, Cosmétique, Parfumerie en candidat libre.
        </div>
        <FormationItemTitle title='Orientation et type d’emploi accessible' />
        <div className={styles.formationItemContent}>
          <ul>
            <li>instituts de beauté et de bien-être :
              <ul>
                <li>indépendants</li>
                <li>franchisés</li>
                <li>affiliés</li>
              </ul>
            </li>
            <li>en établissements de thalassothérapie, de balnéothérapie</li>
            <li>en établissements de tourisme, centres de vacances, de loisirs, de remise en forme</li>
            <li>en établissements de soins, de cure, de convalescence, de réadaptation,
              d'hébergement pour personnes âgées</li>
            <li>mobiles, à domicile</li>
            <li>centres esthétiques spécialisés :
              <ul>
                <li>beauté des ongles</li>
                <li>bronzage</li>
                <li>épilation</li>
                <li>maquillage</li>
              </ul>
            </li>
            <li>parfumerie avec ou sans activités esthétiques intégrées</li>
            <li>parapharmacies avec ou sans activités esthétiques intégrées</li>
            <li>salons de coiffure avec activités esthétiques intégrées</li>
            <li>entreprises de distribution au public de produits cosmétiques et d'hygiène corporelle</li>
          </ul>
        </div>
        <FormationItemTitle title='Type d’emploi accessible' />
        <div className={styles.formationItemContent}>
          <ul>
            <li>esthéticien(ne) qualifié(e)</li>
            <li>conseiller(ère) de vente auprès de la clientèle</li>
            <li>chef(fe) d'entreprise</li>
          </ul>
        </div>
        <FormationItemTitle title='Lieu de la formation' />
        <div className={styles.formationItemContent}>Malakoff</div>
        <FormationItemTitle title='Date' />
        <div className={styles.formationItemContent}>A définir avec l’apprenant</div>
        <FormationItemTitle title='Durée' />
        <div className={styles.formationItemContent}>45 heures</div>
        <FormationItemTitle title='Contenu de la formation' />
        <div className={styles.formationItemContent}>
          <ul>
            <li>Biologie liée à l’acte de vente d’un parfum</li>
            <li>Les parfums</li>
            <li>Les produits d’hygiène corporelle</li>
            <li>Réglementation des produits cosmétiques</li>
          </ul>
        </div>
        <FormationItemTitle title='Moyens prévus' />
        <div className={styles.formationItemContent}>
          <h4>Moyens Pédagogiques</h4>
          <p>Cours théorique envoyé au préalable par mail. Les cours théoriques et pratiques sont vus en présentiel avec une formatrice diplômée et compétente.</p>

          <h4>Moyens Techniques</h4>
          <p>Support PDF pour les cours théoriques. Les cours pratiques sont réalisés sur modèles réels.</p>

          <h4>Suivi de l'Exécution</h4>
          <p>Feuille d’émargement signée lors de chaque cours.</p>

          <h4>Sanction</h4>
          <p>Certificat de réalisation à la fin de la formation.</p>

          <h4>Évaluation</h4>
          <p>Un test est réalisé à l’entrée et à la sortie de la formation.</p>
        </div>
        <FormationItemTitle title='Résultats attendus' />
        <div className={styles.formationItemContent}>
          Maîtriser les compétences attestées du bloc de compétence 3 du CAP esthétique et
          cosmétique Parfumerie. Vous devez obligatoirement vous inscrire en candidat libre et
          passer les examens du BC03 du CAP esthétique enregistré sur la fiche RNCP31041.
          Inscription à l’examen en candidat libre.
        </div>
        <FormationItemTitle title='Modalité d’évaluation' />
        <div className={styles.formationItemContent}>
          <ul>
            <li>Test de positionnement avant et après la formation</li>
            <li>Remise d’une attestation de fin de formation</li>
            <li>Le bloc sera considéré comme acquis lorsque le taux de réussite atteindra 50% de bonnes réponses ou une note comprise entre 5 et 10/10</li>
          </ul>
        </div>
        <FormationItemTitle title='Handicap' />
        <div className={styles.formationItemContent}>
          Bâtiment conforme, nous contacter.
        </div>
        <FormationItemTitle title='Les points forts' />
        <div className={styles.formationItemContent}>
          Parcours de formation individualisé et adapté à votre expérience professionnelle en
          fonction de chaque profil. Formateur expérimenté dans le domaine de l’esthétique.
        </div>
        <FormationItemTitle title='Suite de parcours' />
        <div className={styles.formationItemContent}>
          <ul>
            <li>Brevet Professionnel en Esthétique</li>
            <li>Bac Professionnel en esthétique</li>
            <li>BTS esthétique</li>
          </ul>
        </div>
        <FormationItemTitle title='Tarif' />
          <div className={styles.formationItemContent}>
            Nous contacter
          </div>
          <FormationItemTitle title="Modalité et délai d'accès" />
          <div className={styles.formationItemContent}>
            14 jours après après l'inscription à la formation
          </div>
      </div>
    </div>
  )
}

export default Bloc3;