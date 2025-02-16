import { Link } from 'react-router-dom'

import {
  visagePath,
  nailsPath,
  managePath
} from '#images'

import styles from './Formation.module.scss'

const Formation = () => {
  return (
    <div className={styles.flexContainer}>
      <h2>FORMATIONS</h2>
      <div className={styles.figureContainer}>
        <h3>Nos chiffres</h3>
        <div className={styles.figure}>
          <div className={styles.card}>
            <h4>Résultats 2022</h4>
            <div className={styles.cardContent}>
              <p>Nombre d'apprenants : <span>69</span></p>
              <p>Taux d'assiduité : <span>100%</span></p>
              <p>Taux de réussite : <span>90%</span></p>
            </div>
          </div>
          <div className={styles.card}>
            <h4>Résultats 2023</h4>
            <div className={styles.cardContent}>
              <p>Nombre d'apprenants : <span>106</span></p>
              <p>Taux d'assiduité : <span>100%</span></p>
              <p>Taux de réussite : <span>89%</span></p>
            </div>
          </div>
          <div className={styles.card}>
            <h4>Résultats 2024</h4>
            <div className={styles.cardContent}>
              <p>Nombre d'apprenants : <span>169</span></p>
              <p>Taux d'assiduité : <span>100%</span></p>
              <p>Taux de réussite : <span>92%</span></p>
              <p>Taux de satisfaction : <span>100%</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionContent}>
          <h3>Validation :</h3>
          <p>Le CAP Esthétique n’est pas accessible en validation partielle par bloc de compétence.</p>

          <h3>Débouchés :</h3>
          <ul>
            <li>Esthéticien(ne) qualifié(e)</li>
            <li>Conseiller(ère) de vente auprès de la clientèle (*)</li>
            <li>Chef(fe) d'entreprise (*)</li>
            <li>Instituts de beauté et de bien-être :
              <ul>
                <li>Indépendants, franchisés ou affiliés</li>
                <li>En établissements de thalassothérapie, de balnéothérapie</li>
                <li>En établissements de tourisme, centres de vacances, de loisirs, de remise en forme</li>
                <li>En établissements de soins, de cure, de convalescence, de réadaptation, d'hébergement pour personnes âgées</li>
                <li>Mobiles, à domicile</li>
              </ul>
            </li>
            <li>Centres esthétiques spécialisés (*) :
              <ul>
                <li>Beauté des ongles, bronzage, épilation, maquillage</li>
              </ul>
            </li>
            <li>Parfumerie (*) avec ou sans activités esthétiques intégrées</li>
            <li>Parapharmacies avec ou sans activités esthétiques intégrées</li>
            <li>Salons de coiffure avec activités esthétiques intégrées (*)</li>
            <li>Entreprises de distribution au public de produits cosmétiques et d'hygiène corporelle</li>
          </ul>
          <h3>Que faire après un CAP esthétique, Cosmétique et parfumerie :</h3>
          <p>Le CAP Esthétique Cosmétique Parfumerie constitue le diplôme d’Etat, le premier niveau de qualification pour faire carrière en esthétique, cosmétique, parfumerie. Vous n’êtes pas encore titulaire du CAP Esthétique, lisez notre article sur comment l’obtenir sans stresser ? Pour continuer à évoluer dans un secteur qui ne cesse d’innover, il est conseillé de continuer à en apprendre toujours sur de nouvelles techniques, améliorer sa pratique, sa maitrise des soins corporels et du visage. Pour cela, après le CAP Esthétique, il est recommandé de poursuivre votre apprentissage en suivant un Brevet professionnel en Esthétique, un Bac Professionnel en Esthétique, Cosmétique, Parfumerie et le BTS Esthétique.</p>
          <h3>Inscription</h3>
          <p>L'inscription se fait en octobre - novembre. Vous devez déterminer votre académie en fonction de votre adresse postale et faire la préinscription.</p>
          <p>Vous trouverez les démarches sur ce site : <a href='https://siec.education.fr/candidats/examens/CAP/tout-savoir-sur-le-cap/cap-tout-savoir-sur-la-session' target="_blank" rel='noreferrer'> 👉 Inscription candidat libre</a></p>
          <p>Vous trouverez ci joint le référentiel du CAP esthétique, Cosmétique et parfumerie :  <a href='https://www.education.gouv.fr/bo/15/Hebdo20/MENE1508311A.htm ' target="_blank" rel='noreferrer'> 👉 Référentiel</a></p>

          <h3>Statistiques</h3>
          <h4>Statistiques en voie pro scolaire :</h4>
          <p>6 apprenants sortants sur 10 sont en emploi salarié 6 mois après leur sortie de formation.</p>
          <p><strong>42%</strong> poursuivent leurs études après la formation.</p>

          <h4>Statistiques en apprentissage :</h4>
          <p>5 apprenants sortants sur 10 sont en emploi salarié 6 mois après leur sortie de formation.</p>
          <p><strong>50%</strong> poursuivent leurs études après la formation.</p>

          <h4>Quelle rémunération un an après leur formation ?</h4>
          <p><strong>50%</strong> gagnent entre 1350€ et 1630€.</p>

          <h4>Part des contrats interrompus avant leur terme :</h4>
          <p><strong>51%</strong></p>

          <p>Statistiques pour les années scolaires 2021-2022 et 2022-2023 cumulées.</p>
          <p>Champ : apprenants du CAP au BTS. InserJeunes mesure l’emploi salarié public et privé en France.</p>

          <h4>Que deviennent les apprenants après cette formation ?</h4>
          <h5>Pour la voie scolaire</h5>
          <ul>
            <li><strong>14 %</strong> sont en emploi 6 mois après la fin de la formation (tout type d'emploi salarié).</li>
            <li><strong>63 %</strong> sont inscrits en formation (formation supérieure, redoublants, changement de filière).</li>
            <li><strong>23 %</strong> sont dans d'autres cas (recherche d'emploi, à l'étranger, indépendant, etc.).</li>
          </ul>

          <h5>Pour l'apprentissage</h5>
          <ul>
            <li><strong>27 %</strong> sont en emploi 6 mois après la fin de la formation (tout type d'emploi salarié).</li>
            <li><strong>49 %</strong> sont inscrits en formation (formation supérieure, redoublants, changement de filière).</li>
            <li><strong>24 %</strong> sont dans d'autres cas (recherche d'emploi, à l'étranger, indépendant, etc.).</li>
          </ul>

          <h4>Taux d'obtention :</h4>
          <p>Hors candidat libre (Scolaires, Apprentissage et Formation Continue) taux de réussite à 88% en moyenne contre 72% en individuel et à distance.</p>
          <p className={styles.statInformations}>* données issues de <a href='https://www.inserjeunes.education.gouv.fr/diffusion/accueil' target='_blank' rel="noopener">inserjeunes</a></p>
        </div>
      </div>
      <div className={styles.jobContainer}>
        <div className={styles.jobCard} style={{ backgroundColor: "#f5a98f" }}>
          <div className={styles.jobCardHeader}>
            <h4>Le brevet professionnel en esthétique cosmétique parfumerie</h4>
          </div>
          <p>Ce diplôme permet d’approfondir ses connaissances en matière de soin du visage et du corps. Le brevet professionnel en esthétique cosmétique parfumerie s’adresse aux personnes qui veulent une qualification supérieure. Il est ouvert aux titulaires du CAP Esthétique ou à toutes celles et ceux qui justifient de 5 ans de pratique professionnelle. Ce diplôme se situe entre le CAP et le BTS Esthétique Cosmétique.</p>
        </div>
        <div className={styles.jobCard} style={{ backgroundColor: "#fac6b5" }}>
          <div className={styles.jobCardHeader}>
            <h4>Le baccalauréat professionnel en esthétique cosmétique parfumerie</h4>
          </div>
          <p>La formation en Bac Professionnel permet d’apprendre les techniques d’esthétiques (soins du visage et du corps, épilation, maquillage, beauté des mains et des pieds, vente, etc.).
            Le Bac pro Esthétique Cosmétique Parfumerie vous donnera accès à un ensemble très complet de métiers dans la mode et dans le luxe. Vous devrez être capables de conseiller un client, de répondre à ses attentes aussi bien pour des produits cosmétiques que dans le choix d’un parfum.</p>
        </div>
        <div className={styles.jobCard} style={{ backgroundColor: "#ddbea6" }}>
          <div className={styles.jobCardHeader}>
            <h4>Le BTS Esthétique</h4>
          </div>
          <p>Les titulaires du BTS Esthétique-Cosmétique-Parfumerie (Brevet de Technicien supérieur) sont hautement qualifiés dans les trois domaines de l’esthétique, la cosmétique et la parfumerie. En plus, ce diplôme de l’enseignement supérieur va leur permettre également d’avoir une connaissance approfondie du produit cosmétique et de sa commercialisation.</p>
        </div>
      </div>
      <div className={styles.formationContainer}>
        <h3>Nos Formations</h3>
        <div className={styles.formationInnerContainer}>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src={visagePath} alt="formation B1" />
              <h4>Bloc 1 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 1 vous permettra d'apprendre les différentes techniques esthétique du visage, des mains et des pieds ainsi que la biologie du corps humain.</p>
            </div>
            <Link to='/formation/bloc_1'>Voir plus →</Link>
          </div>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src={nailsPath} alt="formation B2" />
              <h4>Bloc 2 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 2 vous permettra d'assimiler les soins des ongles, leur biologie ainsi que l'épilation.</p>
            </div>
            <Link to='/formation/bloc_2'>Voir plus →</Link>
          </div>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src={managePath} alt="formation B3" />
              <h4>Bloc 3 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 3 permet d'apprendre la gestion d'un institut de beauté, son coté administratif. Vous assimilerez également  le parfum, son histoire et sa composition</p>
            </div>
            <Link to='/formation/bloc_3'>Voir plus →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formation;