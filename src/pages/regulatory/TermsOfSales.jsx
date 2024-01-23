import React, { useEffect } from 'react';
import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const TermsOfSales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <RegulatoryTitle title="CONDITIONS GÉNÉRALES DE VENTE" />
      <div className={styles.info}>
        <h2>ARTICLE 1 - Champs d'application et objet des services en ligne</h2>
        <p>Les présentes conditions générales de vente s'appliquent, sans restriction ni réserve à l'ensemble des services et prestations proposés par la société WELLNESS CENTER ACADEMY, sur son site Internet et à destination des clients (“Clients”) ou visiteurs.</p>
        <p>A défaut, l’utilisation des services de réservation en ligne est interdite.</p>
        <p>Pour accepter les Conditions Générales, le Client est invité à cocher la case correspondante lors de son inscription aux services de réservation en ligne, telle que décrite à l’Article 2 des présentes.</p>
        <p>Par l’intermédiaire de son site Internet, la société WELLNESS CENTER ACADEMY offre au Client la possibilité d’accéder à une gamme complète de soins esthétiques et de beauté, à réserver en ligne dans son établissement, ou de produits à acheter pour se faire livrer à l’adresse de son choix.</p>
        <p>En conséquence, le fait pour une personne physique ou morale, de procéder à une réservation ou un achat (“commande” ou “commander”) sur le site Internet de la société WELLNESS CENTER ACADEMY emporte acceptation pleine et entière des présentes conditions générales de vente.</p>
        <p>Elles sont accessibles à tout moment sur ce site Internet et prévaudront, le cas échéant, sur toute autre version, étant précisé que seule la version en vigueur lors de la commande du Client lui sera opposable.</p>

        <h2>ARTICLE 2 - Modalités et choix des commandes sur le site Internet</h2>
        <h3>1) Inscription sur le Site</h3>
        <p>Afin de passer commande sur le Site, le Client doit créer un compte utilisateur en renseignant son nom, son prénom, son email, son numéro de téléphone et éventuellement tout autre élément permettant de personnaliser son expérience Client, tels que sa date de naissance, son adresse postale par exemple.</p>
        <p>Afin de finaliser son inscription, le Client déterminera un mot de passe qui lui permettra avec son identifiant email, d’accéder à son compte. Le Client s’engage à conserver son identifiant et son mot de passe confidentiels. Il prend la responsabilité de l’ensemble des actions effectuées au moyen de ses identifiants et mot de passe. Le Client garantit donner des informations exactes, complètes et actualisées.</p>
        <p>Au cas où les informations fournies par le Client seraient fausses, incomplètes ou obsolètes, WELLNESS CENTER ACADEMY se réserve le droit, sans aucune indemnité et sans préavis, de suspendre ou de mettre fin au compte du Client, de supprimer tout ou partie des données du Client, sans préjudice des actions de droit commun qui pourraient lui être ouvertes.</p>
        <h3>2) Commande</h3>
        <p>Afin de procéder à une commande, le Client sélectionne la réservation ou l’achat en ligne d’un produit qu’il souhaite puis confirme sa commande présentée sous forme de récapitulatif ou corrige sa commande le cas échéant, puis confirme pour exprimer son acceptation expresse et accepte les présentes CGV en cochant la case prévue à cet effet.</p>
        <p>Le Client recevra alors un email de confirmation comprenant les détails de sa commande.</p>
        <p>Plusieurs types de services et produits sont proposés sur le site Internet :</p>
        <ul>
          <li><strong>Réservation en ligne avec paiement en point de vente</strong>: Lorsque le Client a procédé à une réservation en ligne sans qu’aucun paiement ne soit demandé, il a la possibilité d’annuler sa réservation pour choisir une autre réservation avant la date de l’horaire de la prestation initialement choisie.</li>
          <li><strong>Réservation en ligne avec paiement d’un acompte en ligne</strong>: La réservation de certaines prestations donne lieu à une demande de paiement d’un acompte en ligne. Lorsque le Client a procédé à une réservation avec le paiement d’un acompte en ligne, il sera dû par le Client et son remboursement ne sera possible qu’en cas de rétractation ou en cas d’annulation jusqu’à 24h avant la date et l’horaire de la prestation initialement choisis. Passé ce délai et en cas de désistement du Client, l'acompte restera dû et l’acceptation d’un report ou d’une annulation restera à l’entière discrétion du Professionnel.</li>
          <li><strong>Réservation en ligne avec paiement en ligne</strong>: La réservation de certaines prestations peut donner lieu à une demande de paiement en ligne. Lorsque le Client a procédé à une réservation avec paiement en ligne, il a la possibilité de se rétracter ou d’annuler sa réservation jusqu’à 24h avant la date de l’horaire de la prestation initialement choisie. Il doit pour cela contacter directement l’établissement.</li>
          <li><strong>Bons cadeaux expédiés à domicile</strong>: La vente de bons cadeaux expédiés à domicile est matérialisée par l'envoi au Client d’une facture correspondant à la commande. La société WELLNESS CENTER ACADEMY fera son possible pour expédier au plus vite le bon cadeau par défaut à l’adresse de l’acheteur. Si le Client souhaite faire expédier le bon cadeau à une autre adresse, il lui faudra alors contacter directement L'institut WELLNESS CENTER ACADEMY pour en faire la demande.</li>
          <li><strong>Bons cadeaux envoyés par email</strong>: La vente de bons cadeaux envoyés par email est matérialisée par l'envoi au Client d’une facture correspondant à la commande ainsi que l’envoi immédiat et par email d’un bon cadeau au bénéficiaire.</li>
          <li><strong>Achat de produits en ligne</strong>: Le Client a la possibilité d'acheter en ligne les produits de WELLNESS CENTER ACADEMY. Les prix sont indiqués en euros, toutes taxes comprises, hors frais de participation aux frais d’expédition. Les prix en vigueur sont ceux indiqués au jours de la commande.</li>
        </ul>
        <h3>3)  Modification, annulation et rétractation</h3>
        <p>Le Client peut modifier sa réservation jusqu'à 24h heures avant la date de réservation initiale en prenant attache directement avec WELLNESS CENTER ACADEMY .</p>
        <p>En application du droit en vigueur, lorsque le Client souhaite annuler une réservation, il peut se rétracter dans le délai légal de 14 jours à compter de sa commande, sous réserve de ne pas avoir commencé à recevoir la prestation commandée pendant ce délai.</p>
        <p>Il en est de même pour la commande d’un bon cadeau envoyé par la poste ou par email, qui peut faire l’objet du droit de rétractation dans un délai de 14 jours à compter de l’achat si le bon cadeau acheté n’a pas encore donné lieu à la prestation ou une prise de rendez-vous avant l'expiration du délai de 14 jours.</p>
        <p>En cas de commande d’un produit, le délai de 14 jours court à compter de la réception du produit commandé. Le produit renvoyé ne doit pas être abîmé ni entamé pour être accepté au titre du droit de rétractation.</p>
        <p>Le Client peut simplement notifier à WELLNESS CENTER ACADEMY son choix de se rétracter sans ambiguïté par tous moyens, il peut utiliser à cet effet le formulaire figurant en fin des présentes. En cas d’achat d’un produit, si le Client se rétracte, il devra renvoyer les produit, intact, et à ses frais à WELLNESS CENTER ACADEMY . Des réception de la demande de rétractation, et si le produit est bien réceptionné intact, le remboursement interviendra alors dans les 14 jours suivant la demande de rétractation selon les mêmes modalités de paiement que le règlement initial.</p>

        <h2>ARTICLE 3 - Paiement du prix</h2>
        <p>La fourniture des prestations est réalisée contre paiement par le Client du prix total correspondant à la prestation choisie, selon les modalités établies dans l’Établissement WELLNESS CENTER ACADEMY.</p>
        <p>Le prix est payable, selon l’offre (en acompte ou en totalité) et en un seul versement à la commande et vaut confirmation de commande.</p>
        <p>Les prix indiqués sur le site Internet sont exprimés en Euros et TTC et correspondent à ceux en vigueur au jour de la commande.</p>
        <p>La société WELLNESS CENTER ACADEMY se réserve le droit de modifier les prix à tout moment, le prix indiqué dans la confirmation de la commande étant le prix en vigueur.</p>
        <p>Le paiement ne sera considéré comme définitif qu'après encaissement effectif des fonds par la société WELLNESS CENTER ACADEMY .</p>
        <p>Le règlement des achats s'effectue par cartes bancaires, les cartes acceptées étant les suivantes : CB, VISA, MASTERCARD. Sécurisation des paiement par XXXXX selon les conditions qui lui sont propres, voir: <a href="https://www.mangopay.com/wp-content/uploads/CGU_MANGOPAY_France.pdf" target="_blank" rel="noopener noreferrer">Conditions de MangoPay</a></p>
        <p>A aucun moment WELLNESS CENTER ACADEMY est destinataire ni n’a accès aux coordonnées bancaires qui sont seulement collectées et éventuellement conservées par le prestataire de paiement.</p>

        <h2>ARTICLE 4 - Fourniture des prestations</h2>
        <p>Les prestations commandées par le Client seront fournies sur présentation de la confirmation de commande reçue par email, dans l’établissement L'institut du Luxembourg.</p>
        <p>En cas d’impossibilité pour l’Établissement L'institut du Luxembourg de fournir la prestation commandée pendant la période de validité du bon d’échange, l'établissement WELLNESS CENTER ACADEMY s’engage à procéder au remboursement du prix du bon d’échange ou un avoir du même montant dans un délai maximal de 15 jours, par crédit sur la carte bancaire débitée à la commande, à l'exclusion de toute indemnisation ou retenue.</p>

        <h2>ARTICLE 5 - Avis en ligne</h2>
        <p>Le site de WELLNESS CENTER ACADEMY offre la possibilité aux Clients de laisser un avis de satisfaction sur les prestations qu’il a commandées. Ces avis apparaissent par ordre chronologiques et ne font l’objet d’aucune contrepartie.</p>
        <p>Dans certains cas, ces avis peuvent faire l’objet d’une modération par WELLNESS CENTER ACADEMY qui se réserve le droit de ne pas publier des avis qui seraient susceptibles de porter atteinte aux droits des tiers ou enfreindre toute loi en vigueur.</p>
        <p>En tout état de cause, WELLNESS CENTER ACADEMY se réserve le droit de contacter le Client suite à la publication d’un avis.</p>
        <p>Les avis sont conservés pendant un délai maximal de cinq (5) ans, sauf autre cas prévus expressément avec le Client (suppression ultérieure ou conservation ultérieure aux 5 ans).</p>

        <h2>ARTICLE 6 - Responsabilité de et du prestataire</h2>
        <p>WELLNESS CENTER ACADEMY est responsable de plein droit à l’égard du Client de la bonne exécution du contrat conclu avec le Client.</p>
        <p>Cependant, la responsabilité de WELLNESS CENTER ACADEMY ne saurait être engagée pour l’inexécution ou la mauvaise exécution du contrat conclu en cas de force majeure, de survenance d’un fait imputable au Client ou de tout inconvénient, dommage imprévisible et insurmontable inhérent à l’utilisation du réseau Internet, notamment une rupture du service, une intrusion extérieure ou la présence de virus informatiques.</p>
        <p>Les services de réservation proposés sur le site WELLNESS CENTER ACADEMY sont fournis par la société FlexyCorp (opérant la marque FlexyBeauty) qui agit comme prestataire pour le compte de la société WELLNESS CENTER ACADEMY .</p>
        <p>L’acceptation des présentes Conditions implique la reconnaissance que la société FlexyCorp agit uniquement en qualité de mandataire sans que sa responsabilité puisse être engagée sur l’une quelconque des obligations de WELLNESS CENTER ACADEMY dans l’exécution des prestations commandés.</p>
        <p>A ce titre, dès lors que toute réservation sur le Site aura été effectuée et que la prestation désirée sera disponible, le contrat sera conclu entre le Client et l’Établissement WELLNESS CENTER ACADEMY.</p>
        <p>Sauf dispositions légales contraires, la société FlexyCorp ne pourra en aucun cas voir sa responsabilité engagée en cas de manquements de la société WELLNESS CENTER ACADEMY aux obligations découlant des prestations vendues par son intermédiaire.</p>
        <p>La société WELLNESS CENTER ACADEMY ne sera pas considérée comme responsable ni défaillante pour tout retard ou inexécution consécutif à la survenance d'un cas de force majeure habituellement reconnu par la jurisprudence française.</p>

        <h2>ARTICLE 7 - Garantie légale sur les produits</h2>
        <p>Tous les produits proposés à la vente sont soumis à la garantie légale prévue par les articles L. 217-4 et suivants du Code de la consommation et à la garantie des vices cachés prévue par les articles 1641 et suivants du Code civil.</p>
        <p>Le Client dispose de deux (2) ans pour faire valoir ces garanties légales. Pour le défaut de conformité le délai court à compter de la délivrance, pour les vices cachés à compter de la découverte du vice. Naturellement cette garantie ne peut être invoquée que dans le cadre d’un usage normal et licite du produit.</p>

        <h3>Article L 217-4 du Code de la consommation</h3>
        <p>Le vendeur livre un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance.</p>
        <p>Il répond également des défauts de conformité résultant de l'emballage, des instructions de montage ou de l'installation lorsque celle-ci a été mise à sa charge par le contrat ou a été réalisée sous sa responsabilité.</p>

        <h3>Article L 217-5 du Code de la consommation</h3>
        <p>Le bien est conforme au contrat :</p>
        <ul>
          <li>S'il est propre à l'usage habituellement attendu d'un bien semblable et, le cas échéant :
            <ul>
              <li>s'il correspond à la description donnée par le vendeur et possède les qualités que celui-ci a présentées à l'acheteur sous forme d'échantillon ou de modèle ;</li>
              <li>s'il présente les qualités qu'un acheteur peut légitimement attendre eu égard aux déclarations publiques faites par le vendeur, par le producteur ou par son représentant, notamment dans la publicité ou l'étiquetage ;</li>
            </ul>
          </li>
          <li>Ou s'il présente les caractéristiques définies d'un commun accord par les parties ou est propre à tout usage spécial recherché par l'acheteur, porté à la connaissance du vendeur et que ce dernier a accepté.</li>
        </ul>

        <h3>Article L 217-12 du Code de la consommation</h3>
        <p>L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien.</p>

        <h3>Article L 217-16 du Code de la consommation</h3>
        <p>Lorsque l'acheteur demande au vendeur, pendant le cours de la garantie commerciale qui lui a été consentie lors de l'acquisition ou de la réparation d'un bien meuble, une remise en état couverte par la garantie, toute période d'immobilisation d'au moins sept jours vient s'ajouter à la durée de la garantie qui restait à courir.</p>
        <p>Cette période court à compter de la demande d'intervention de l'acheteur ou de la mise à disposition pour réparation du bien en cause, si cette mise à disposition est postérieure à la demande d'intervention.</p>

        <h3>ARTICLE 8 - Informatiques et Libertés</h3>
        <p>En application de la loi n° 78-17 du 6 janvier 1978 modifiée par la loi n° 2018-493 du 20 juin 2018 et le Règlement UE no 2016/679 “RGPD”, il est rappelé que les données nominatives qui sont demandées au Client sont nécessaires au traitement de sa commande et sont destinées à un usage interne.</p>
        <p>Ces données nominatives peuvent néanmoins être transmises à des tiers, prestataires ou sous réserve d’un consentement exprès, partenaires de la société L'institut du Luxembourg.</p>
        <p>Conformément à cette législation et au RGPD, tout Client bénéficie d’un droit d’accès, d’information complémentaire, de rectification, de portabilité, de limitation, de suppression et d’opposition aux données personnelles le concernant. Pour plus d'information sur vos droits, voir Politique de confidentialité</p>
        <p>Pour la bonne utilisation du site, nous utilisons un cookie sur votre ordinateur. Ce cookie a pour objet, d’une part, d’enregistrer des informations relatives à la navigation de votre ordinateur sur notre site pour nous permettre de tirer des statistiques et améliorer nos services en ligne ; d’autre part, d’identifier votre ordinateur au début de la phase d’abonnement en ligne, préalable nécessaire pour tout abonnement passé sur le site. Le cookie que nous implantons dans votre ordinateur n’est pas permanent.</p>

        <h3>ARTICLE 9 - Propriété intellectuelle</h3>
        <p>WELLNESS CENTER ACADEMY est titulaire exclusife de tous les droits de propriété intellectuelle relatifs au Site et aux Services et notamment sur leur structure (notamment chartes graphiques, onglets, fonctionnalités), et leur contenu (notamment marques, images, logos, illustrations, photos, textes, etc.).</p>
        <p>En acceptant les présentes CGV, le Client se voit concéder, à titre personnel, le droit non exclusif et non cessible d’utiliser le Site et les Services dans le cadre et pour la durée de votre inscription aux Services.</p>
        <p>Il est expressément interdit à l’Utilisateur, sans l’accord préalable et écrit de L'institut WELLNESS CENTER ACADEMY de copier, modifier, améliorer, éditer, traduire, décompiler, créer une œuvre dérivée, inverser la conception ou l’assemblage ou de toute autre manière tenter de trouver le code source (à l’exception des cas prévus par la loi), vendre, attribuer, sous licencier ou transférer de quelque manière que ce soit tout ou partie du Site ou des Services. Toute reproduction, représentation, exploitation de quelque nature que ce soit et à quelque fin que ce soit, de tout ou partie du Site ou des Services, et notamment de leur structure et/ou de leur contenu, sans l’autorisation préalable et écrite de L'institut WELLNESS CENTER ACADEMY constitue des actes de contrefaçon.</p>

        <h3>ARTICLE 10 - Droit applicable</h3>
        <p>Les présentes Conditions générales sont régies exclusivement par le droit français et compétence territoriale exclusive est donnée aux juridictions françaises.</p>
        <p>Le Client reconnaît expressément la force probante de l’écrit électronique tel qu’il est utilisé sur le site et reconnaît que les données enregistrées par FlexyCorp font foi et constituent la preuve de l’ensemble des transactions passées.</p>
        <p>En cas de litige survenant dans le cadre des prestations sans résolution directe avec WELLNESS CENTER ACADEMY , le Client aura la possibilité, avant toute action en justice, de rechercher une solution amiable, en saisissant un médiateur de la consommation, le cas échéant avec l’aide d’une association de consommateurs ou de tout autre conseil de son choix.</p>
        <p>Vous avez la possibilité de renoncer à ce contrat en nous écrivant, dans un délai de 14 jours comme indiqué à l’article 4 ci-dessus, par courrier à :</p>
        <p>
          WELLNESS CENTER ACADEMY<br />
          26 Rue Aristide Briand<br />
          Joué-Lès-Tours
        </p>
        <p>Je soussigné(e) Nom : ………………………… Prénom : …………………………</p>
        <p>Adresse : ………………………………………………………………………………</p>
        <p>Code postal : ………………………… Ville : ……………………………………………………</p>
        <p>Déclare renoncer à l’achat / à la réservation de …………………………………………………………</p>
        <p>Dont la commande est intervenue le ………………………………………………………………………</p>
        <p>Fait à …………………………………………………… le …………………………</p>
        <p>Signature du client</p>
      </div>
    </div>
  )
}

export default TermsOfSales;