import { Link } from 'react-router-dom'
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
              <p>Taux de réussite : <span>80%</span></p>
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
              <img src="https://via.placeholder.com/150" alt="formation" />
              <h4>Bloc 1 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 1 du CAP Esthétique est accessible à toutes personnes souhaitant se former au métier d’esthéticienne. Il permet d’acquérir les compétences nécessaires pour réaliser les soins du visage, les soins des mains et des pieds, les épilations, les maquillages et les techniques de vente.</p>
            </div>
            <Link to='/mentions-legales'>Voir plus →</Link>
          </div>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src="https://via.placeholder.com/150" alt="formation" />
              <h4>Bloc 2 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 1 du CAP Esthétique est accessible à toutes personnes souhaitant se former au métier d’esthéticienne. Il permet d’acquérir les compétences nécessaires pour réaliser les soins du visage, les soins des mains et des pieds, les épilations, les maquillages et les techniques de vente.</p>
            </div>
            <Link to='/mentions-legales'>Voir plus →</Link>
          </div>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src="https://via.placeholder.com/150" alt="formation" />
              <h4>Bloc 3 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 1 du CAP Esthétique est accessible à toutes personnes souhaitant se former au métier d’esthéticienne. Il permet d’acquérir les compétences nécessaires pour réaliser les soins du visage, les soins des mains et des pieds, les épilations, les maquillages et les techniques de vente.</p>
            </div>
            <Link to='/mentions-legales'>Voir plus →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formation;