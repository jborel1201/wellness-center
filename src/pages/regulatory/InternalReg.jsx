import React, { useEffect } from 'react';
import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const InternalReg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <RegulatoryTitle title="Règlement Intérieur de l’Organisme de Formation Wellness Center" />
      <div className={styles.info}>
        <h2>Règlement Intérieur</h2>

        <h4>Article 1 : Objet et champ d’application</h4>
        <p>Le présent règlement intérieur a pour objet de définir les règles relatives à l’hygiène, la sécurité et la discipline applicables aux participants des formations dispensées par Wellness Center. Il s’applique à toutes les personnes inscrites à une session de formation, qu’elle soit en présentiel ou à distance.</p>

        <h3>1. Dispositions Générales</h3>
        <h4>Article 2 : Accès aux locaux et aux formations</h4>
        <ul>
          <li>Les formations se déroulent dans les locaux de Wellness Center ou en distanciel selon le programme prévu.</li>
          <li>L’accès aux locaux est réservé aux apprenants, formateurs et personnels autorisés.</li>
          <li>Toute personne extérieure souhaitant assister à une session doit obtenir une autorisation écrite de la direction.</li>
        </ul>

        <h4>Article 3 : Horaires et assiduité</h4>
        <ul>
          <li>Les apprenants doivent respecter les horaires indiqués sur leur convocation ou planning de formation.</li>
          <li>Un retard de plus de 15 minutes pourra être considéré comme une absence non justifiée.</li>
          <li>Toute absence doit être signalée au plus tôt à l’organisme avec justification écrite.</li>
        </ul>

        <h3>2. Hygiène et Sécurité</h3>
        <h4>Article 4 : Règles générales de sécurité</h4>
        <ul>
          <li>Chaque participant est tenu de respecter les consignes de sécurité affichées dans les locaux.</li>
          <li>Il est interdit d’introduire des substances dangereuses ou des objets pouvant nuire à la sécurité des personnes présentes.</li>
          <li>En cas d’incident ou d’accident, tout participant doit immédiatement alerter un responsable.</li>
        </ul>

        <h4>Article 5 : Règles d’hygiène</h4>
        <ul>
          <li>Les locaux doivent être maintenus propres et en bon état par tous les utilisateurs.</li>
          <li>Toute consommation de nourriture ou de boissons est interdite en salle de formation, sauf autorisation expresse.</li>
          <li>Les comportements nuisant à l’hygiène collective (manque d’hygiène, non-respect des sanitaires, etc.) ne seront pas tolérés.</li>
        </ul>

        <h3>3. Discipline et Sanctions</h3>
        <h4>Article 6 : Comportement et respect d’autrui</h4>
        <ul>
          <li>Chaque participant s’engage à adopter une attitude respectueuse envers les formateurs, le personnel et les autres apprenants.</li>
          <li>Tout propos ou comportement discriminatoire, violent ou perturbateur entraînera des sanctions immédiates.</li>
        </ul>

        <h4>Article 7 : Utilisation du matériel</h4>
        <ul>
          <li>Les équipements mis à disposition doivent être utilisés conformément à leur usage prévu.</li>
          <li>Toute dégradation volontaire ou utilisation abusive pourra entraîner une sanction et/ou une obligation de remboursement.</li>
        </ul>

        <h4>Article 8 : Interdictions spécifiques</h4>
        <ul>
          <li>L’usage du téléphone portable est interdit en session sauf en cas d’urgence ou d’autorisation du formateur.</li>
          <li>L’enregistrement audio, vidéo ou la diffusion de contenu lié à la formation sans autorisation est strictement interdit.</li>
          <li>Toute consommation de substances illicites ou d’alcool est prohibée dans l’enceinte de l’organisme.</li>
        </ul>

        <h3>4. Sanctions et Procédures</h3>
        <h4>Article 9 : Nature des sanctions</h4>
        <p>En cas de non-respect du présent règlement, la direction de Wellness Center peut appliquer les sanctions suivantes, en fonction de la gravité de la faute :</p>
        <ul>
          <li>Avertissement oral</li>
          <li>Avertissement écrit</li>
          <li>Exclusion temporaire de la formation</li>
          <li>Exclusion définitive avec justification écrite</li>
        </ul>

        <h4>Article 10 : Procédure disciplinaire</h4>
        <ul>
          <li>Aucune sanction ne peut être appliquée sans un entretien préalable avec l’apprenant concerné.</li>
          <li>En cas d’exclusion temporaire ou définitive, une notification écrite sera envoyée à l’apprenant et, le cas échéant, à son employeur ou financeur.</li>
        </ul>

        <h3>5. Dispositions Finales</h3>
        <h4>Article 11 : Affichage et acceptation</h4>
        <ul>
          <li>Ce règlement est remis à chaque participant avant son entrée en formation.</li>
          <li>L’inscription à une formation implique l’acceptation pleine et entière de ces règles.</li>
        </ul>
      </div>
    </div>
  )
}

export default InternalReg;