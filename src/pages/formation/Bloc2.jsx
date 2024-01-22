import FormationItemTitle from '#components/FormationItemTitle'

import styles from './Formation.module.scss'

const Bloc2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <header>
          <h2>FORMATION</h2>
          <h3>Bloc 2 du CAP esthétique</h3>
        </header>
        <div className={styles.legals}>
          <p>Titre RNCP 31041 – CAP Esthétique, Cosmétique, Parfumerie</p>
          <p>Date échéance de l’enregistrement 01-01-2025</p>
          <p>Date d'enregistrement : 01-01-2020</p>
          <p>Certificateur : Ministère de l’éducation nationale et de la jeunesse</p>
          <p className={styles.italic}>Le CAP Esthétique n'est pas accessible en validation partielle par bloc de compétences</p>
        </div>
        <div className={styles.content}>
          <FormationItemTitle title='Objectif de la formation' />
          <div className={styles.formationItemContent}>
            <ul>
              <li>Mettre en oeuvre des protocoles de techniques esthétiques liées aux phanères</li>
              <li>Mettre en oeuvre des protocoles de techniques de maquillage des ongles</li>
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
          <div className={styles.formationItemContent}>Paris, Malakoff</div>
          <FormationItemTitle title='Date' />
          <div className={styles.formationItemContent}>A définir avec l’apprenant</div>
          <FormationItemTitle title='Durée' />
          <div className={styles.formationItemContent}>28 heures</div>
          <FormationItemTitle title='Contenu de la formation' />
          <div className={styles.formationItemContent}>
            <h2>Structure de la Formation</h2>

            <h3>Partie Théorique</h3>
            <h4>Partie 1 : Biologie liée aux techniques esthétiques des phanères</h4>
            <ul>
              <li>Le follicule pileux, le poil et le muscle horripilateur</li>
              <li>L’appareil Unguéal</li>
            </ul>

            <h4>Partie 2 : Technologie liée aux techniques esthétiques des phanères</h4>
            <ul>
              <li>Les produits utilisés lors des soins esthétiques liés aux phanères</li>
              <li>Appareils et instruments utilisés lors des épilations et des soins des ongles</li>
            </ul>

            <h4>Partie 3 : Technologie liée au maquillage des ongles</h4>
            <ul>
              <li>Les produits utilisés lors du maquillage des ongles</li>
            </ul>

            <h3>Partie Pratique</h3>
            <ul>
              <li>Réalisation d’épilation</li>
              <li>Coloration des sourcils et cils</li>
              <li>Mise en œuvre des soins esthétiques des ongles</li>
              <li>Réalisation de maquillage des ongles avec un vernis classique et semi-permanent</li>
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
            Maîtriser les compétences attestées du bloc de compétence 2 du CAP esthétique et
            cosmétique Parfumerie. Vous devez obligatoirement vous inscrire en candidat libre et
            passer les examens du BC02 du CAP esthétique enregistré sur la fiche RNCP31041.
            Inscription à l’examen en candidat libre.
          </div>
          <FormationItemTitle title='Modalité d’évaluation' />
          <div className={styles.formationItemContent}>
            <ul>
              <li>Test de positionnement avant et après la formation</li>
              <li>Remise d’une attestation de fin de formation</li>
            </ul>
          </div>
          <FormationItemTitle title='Handicap' />
          <div className={styles.formationItemContent}>
            Bâtiment conforme aux normes d’accessibilité aux personnes en mobilité réduite. Un
            questionnaire sera envoyé à l’apprenant afin d’établir avec lui les différentes actions à mener
            pour favoriser son apprentissage.
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
          <FormationItemTitle title='Prix' />
          <div className={styles.formationItemContent}>
            <p className={styles.bold}>990€</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bloc2;