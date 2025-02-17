import React, { useEffect } from 'react';
import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const CGV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <RegulatoryTitle title="CONDITIONS GENERALES DE VENTE" />
      <div className={styles.info}>
        <h3>Désignation</h3>
        <p>La société WELLNESS CENTER désigne un organisme de formation professionnelle, dont le siège social est situé au 96, rue Paradis 13006 Marseille.</p>
        <p>WELLNESS CENTER met en place et dispense des formations inter et intra entreprises, en région parisienne, région Centre, et sur l’ensemble du territoire national, seule ou en partenariat.</p>
        <ul>
          <li><strong>Client :</strong> toute personne physique ou morale qui s’inscrit ou passe commande d’une formation auprès de la société WELLNESS CENTER.</li>
          <li><strong>Stagiaire :</strong> la personne physique qui participe à une formation.</li>
          <li><strong>CGV :</strong> les conditions générales de vente, détaillées ci-dessous.</li>
          <li><strong>OPCO :</strong> les opérateurs de compétence agréés chargés de collecter et gérer l’effort de formation des entreprises.</li>
        </ul>

        <h3>Objet et champ d’application</h3>
        <p>Les présentes Conditions Générales de Vente déterminent les conditions applicables aux prestations de formation effectuées par la société WELLNESS CENTER pour le compte d’un client.</p>
        <p>Toute commande de formation implique l’acceptation sans réserve du client des présentes Conditions Générales de Vente.</p>

        <h3>Devis et attestation</h3>
        <ul>
          <li>Un devis est fourni pour chaque formation et doit être retourné signé avec la mention « Bon pour accord ».</li>
          <li>Une convention particulière peut être établie avec l’OPCO ou le client.</li>
          <li>À la demande du client, une attestation de présence ou de fin de formation peut être fournie.</li>
        </ul>

        <h3>Prix et modalités de paiement</h3>
        <ul>
          <li>Les prix sont indiqués en euros hors taxes et majorés de la TVA en vigueur.</li>
          <li>Le paiement est dû après exécution de la prestation, à réception de la facture.</li>
          <li>Le règlement peut être effectué par virement bancaire ou chèque.</li>
          <li>Le paiement échelonné doit être formalisé avant le début de la formation.</li>
        </ul>

        <h3>Prise en charge</h3>
        <ul>
          <li>Le client doit faire une demande de prise en charge auprès de l’OPCO avant la formation.</li>
          <li>Si la prise en charge n’est pas reçue au premier jour de la formation, le client est facturé en totalité.</li>
        </ul>

        <h3>Conditions de report et d’annulation</h3>
        <ul>
          <li>Annulation possible au moins 10 jours avant la formation, par email.</li>
          <li>Annulation entre 4 et 10 jours : pénalité de 10% du coût.</li>
          <li>Annulation moins de 3 jours avant : pénalité de 50% du coût.</li>
          <li>Le report est possible avec une demande écrite au moins 10 jours avant la formation.</li>
        </ul>

        <h3>Programme des formations</h3>
        <p>Les formateurs peuvent adapter les contenus en fonction de l’actualité, du groupe ou du niveau des participants.</p>

        <h3>Propriété intellectuelle et droit d’auteur</h3>
        <p>Les supports de formation sont protégés par la propriété intellectuelle et ne peuvent être reproduits sans autorisation.</p>

        <h3>Informatique et libertés</h3>
        <p>Les données du client sont collectées pour le traitement des inscriptions et peuvent être utilisées à des fins commerciales.</p>
        <p>Le client peut exercer ses droits d’accès et de rectification des données personnelles conformément à la loi « informatique et libertés ».</p>

        <h3>Loi applicable et attribution de compétence</h3>
        <p>Les présentes CGV sont régies par la loi française. En cas de litige, une solution amiable sera recherchée avant tout recours aux tribunaux de Paris.</p>
      </div>
    </div>
  )
}

export default CGV;