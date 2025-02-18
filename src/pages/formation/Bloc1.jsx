import React, { useEffect } from 'react'
import FormationItemTitle from '#components/FormationItemTitle'
import BlocHead from '#components/BlocHead.jsx'

import styles from './Formation.module.scss'

const Bloc1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <header>
          <h2>FORMATION</h2>
          <h3>Bloc 1 du CAP esthétique</h3>
        </header>
        <BlocHead />
        <div className={styles.content}>
          <FormationItemTitle title='Objectif de la formation' />
          <div className={styles.formationItemContent}>
            <ul>
              <li>Mettre en œuvre des protocoles de techniques de soins esthétiques</li>
              <li>Mettre en œuvre des protocoles de techniques de maquillage du visage</li>
            </ul>
          </div>
          <FormationItemTitle title='Public visé' />
          <div className={styles.formationItemContent}><p className={styles.bold}>Tout public</p></div>
          <FormationItemTitle title='Pré-requis' />
          <div className={styles.formationItemContent}>
            Une attestation sur l’honneur sera à signer en début de formation attestant que
            l’apprenant a bien l’intention de passer le CAP esthétique et s’y inscrire.
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
          <div className={styles.formationItemContent}>35 heures</div>
          <FormationItemTitle title='Contenu de la formation' />
          <div className={styles.formationItemContent}>
            <ul>
              <li>Biologie liée aux techniques esthétiques du visage, des mains et des pieds :
                <ul>
                  <li>Définition et notions de base en biologie humaine</li>
                  <li>Anatomie des os</li>
                  <li>Anatomie et physiologie des muscles</li>
                  <li>L’eau constituant de la matière vivante</li>
                  <li>La cellule unité de vie</li>
                  <li>Les tissus</li>
                  <li>Le système tégumentaire</li>
                  <li>La surface cutanée</li>
                  <li>L’épiderme</li>
                  <li>Le derme et la jonction dermo-épidermique</li>
                  <li>L’hypoderme ou tissus adipeux sous cutané</li>
                  <li>Les annexes cutanées : les glandes cutanées</li>
                  <li>La vascularisation cutanée</li>
                  <li>L’innervation cutanée</li>
                  <li>Les différents types et états de peau</li>
                  <li>Le vieillissement cutané</li>
                  <li>Les lésions élémentaires</li>
                  <li>Biocontamination et prévention</li>
                </ul>
              </li>
              <li>Technologie liée aux techniques esthétiques du visage, des mains et des pieds
                <ul>
                  <li>Les produits cosmétiques associés aux techniques de soins esthétiques du visage, des mains et des pieds</li>
                  <li>Appareils, matériels et instruments pour les soins esthétiques</li>
                </ul>
              </li>
              <li>Conduite d’une prestation UV
                <ul>
                  <li>Peau et œil aux rayonnements ultraviolets</li>
                  <li>Les appareils utilisant des rayonnements UV</li>
                  <li>Les produits solaires et les autobronzants</li>
                </ul>
              </li>
              <li>Technologie liée au maquillage du visage
                <ul>
                  <li>Les produits du maquillage du visage</li>
                  <li>Les instruments pour le maquillage</li>
                </ul>
              </li>
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
            Maîtriser les compétences attestées du bloc de compétence 1 du CAP esthétique et
            cosmétique Parfumerie. Vous devez obligatoirement vous inscrire en candidat libre et
            passer les examens du BC01 du CAP esthétique enregistré sur la fiche RNCP31041.
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
          <FormationItemTitle title="Nous Contacter" />
          <div className={styles.formationItemContent}>
            <h4>WELLNESS CENTER ACADEMY</h4>
            <p>43 Rue Pierre Valette<br />
              92 240 Malakoff</p>
            <p>Vous pouvez nous contacter par télephone au 06 73 33 42 93:</p>
            <p className={styles.marginLeft}>- Du lundi au vendredi, de 9h à 18h<br />
              - Samedi, de 9h à 12h</p>
            <p>Ou par mail à l'addresse: secretariat.wellnessformation@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bloc1;