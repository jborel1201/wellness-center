import React, { useEffect } from 'react';
import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const Cookies = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <RegulatoryTitle title="POLITIQUE DE CONFIDENTIALITE" />
      <div className={styles.info}>
        <h1>Politique en matière de cookies</h1>

        <p>Dernière mise à jour : 18/12/2023</p>

        <h2>1. Introduction</h2>
        <p>Le Centre de Bien-Être (ci-après dénommé "nous", "notre" ou "notre site") utilise des cookies et d'autres technologies de suivi sur notre site Web (ci-après dénommés collectivement "cookies"). Cette Politique en matière de cookies explique ce que sont les cookies, comment nous les utilisons, et quelles options vous avez pour les gérer.</p>

        <h2>2. Qu'est-ce qu'un cookie ?</h2>
        <p>Un cookie est un petit fichier texte placé sur votre ordinateur ou appareil mobile lorsque vous visitez un site Web. Les cookies sont largement utilisés pour permettre aux sites Web de fonctionner efficacement, ainsi que pour fournir des informations aux propriétaires du site.</p>

        <h2>3. Comment utilisons-nous les cookies ?</h2>
        <p>Nous utilisons des cookies pour les raisons suivantes :</p>
        <ul>
          <li><strong>Fonctionnalité du site :</strong> Nous utilisons des cookies nécessaires pour le bon fonctionnement de notre site Web, y compris la navigation, l'authentification, et la gestion de session.</li>
          <li><strong>Analyse et performances :</strong> Nous utilisons des cookies pour collecter des informations sur la manière dont les visiteurs utilisent notre site, ce qui nous aide à améliorer la convivialité et les performances du site.</li>
        </ul>

        <h2>4. Vos options en matière de cookies</h2>
        <p>Vous avez le contrôle sur les cookies que vous acceptez ou refusez. Vous pouvez généralement configurer votre navigateur pour refuser tous les cookies ou vous avertir lorsque des cookies sont envoyés. Cependant, veuillez noter que la désactivation des cookies peut affecter la fonctionnalité de certaines parties de notre site Web.</p>

        <h2>5. Cookies tiers</h2>
        <p>Nous pouvons autoriser des tiers à placer des cookies sur notre site Web pour diverses fins, notamment l'analyse, la publicité et le suivi des performances. Ces tiers peuvent avoir leurs propres politiques en matière de cookies, que nous vous encourageons à consulter.</p>

        <h2>6. Mises à jour de la Politique en matière de cookies</h2>
        <p>Nous pouvons mettre à jour cette Politique en matière de cookies de temps à autre pour refléter les changements dans nos pratiques ou pour des raisons légales. Nous vous encourageons à consulter cette page régulièrement pour vous tenir informé des dernières mises à jour.</p>

        <h2>7. Nous contacter</h2>
        <p>Si vous avez des questions ou des préoccupations concernant notre Politique en matière de cookies, vous pouvez nous contacter à [adresse e-mail de contact].</p>

      </div>
    </div>
  )
}

export default Cookies;