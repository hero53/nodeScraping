const livres = [
  "https://librairie-viedimpact.com/produit/objectif-client-les-7-cles-dune-experience-client-reussie/",
  "https://librairie-viedimpact.com/produit/de-precieux-intermediaires-david-evans/",
  "https://librairie-viedimpact.com/produit/storybrand-scenarisez-votre-marque/",
  "https://librairie-viedimpact.com/produit/la-bible-de-la-petite-entreprise-steven-strauss/",
  "https://librairie-viedimpact.com/produit/effrondement-jared-diamond/",
  "https://librairie-viedimpact.com/produit/lidentite-de-marque-alina-wheeler/",
  "https://librairie-viedimpact.com/produit/penser-efficace-en-5-etapes-edward-b-burger/",
  "https://librairie-viedimpact.com/produit/le-personal-mba-josh-kaufman-nouveaux-horizons/",
  "https://librairie-viedimpact.com/produit/oprah-winfrey-lascension-dune-star/",
  "https://librairie-viedimpact.com/produit/parler-en-public-ted-le-guide-officiel/",
  "https://librairie-viedimpact.com/produit/idees-de-genie/",
  "https://librairie-viedimpact.com/produit/le-nouveau-manager-minute-ken-blanchard-spencer-johnson/",
  "https://librairie-viedimpact.com/produit/mieux-sorganiser-pour-gagner-du-temps-kerry-gleeson/",
  "https://librairie-viedimpact.com/produit/coder-proprement-robert-c-martin/",
  "https://librairie-viedimpact.com/produit/comment-developper-son-leadership-ken-blanchard/",
  "https://librairie-viedimpact.com/produit/misbehaving-les-decouvertes-de-leconomie-comportementale/",
  "https://librairie-viedimpact.com/produit/cest-ca-le-marketing-seth-godin/",
  "https://librairie-viedimpact.com/produit/lean-startup-eric-ries/",
  "https://librairie-viedimpact.com/produit/la-tribu-des-mentors-timothy-ferriss/",
  "https://librairie-viedimpact.com/produit/lart-denseigner/",
  "https://librairie-viedimpact.com/produit/etre-en-accord-avec-soi-meme-william-ury/",
  "https://librairie-viedimpact.com/produit/rework-reussir-autrement-jason-fried-david/",
  "https://librairie-viedimpact.com/produit/arretons-de-bosser-comme-des-fous-jason-freid-david-h-hansson/",
  "https://librairie-viedimpact.com/produit/lart-de-la-niaque-angela-duckworth/",
  "https://librairie-viedimpact.com/produit/reussir-la-mutation-numerique-westerman/",
  "https://librairie-viedimpact.com/produit/conduire-le-changement/",
  "https://librairie-viedimpact.com/produit/trouver-son-pourquoi-simon-sinek/",
  "https://librairie-viedimpact.com/produit/la-chevre-de-ma-mere-ricardo-kaniama/",
  "https://librairie-viedimpact.com/produit/apprendre-a-gerer-son-argent/",
  "https://librairie-viedimpact.com/produit/linnovation-jugaad-adoptons-lentreprise/",
  "https://librairie-viedimpact.com/produit/la-vache-pourpre-seth-godin/",
  "https://librairie-viedimpact.com/produit/100-dollar-pour-lancer-son-business-chris-guillebeau/",
  "https://librairie-viedimpact.com/produit/combattre-la-corruption-robert-klitgaard/",
  "https://librairie-viedimpact.com/produit/lart-du-pitch-oren-klaff/",
  "https://librairie-viedimpact.com/produit/penser-comme-un-millionnaire/",
  "https://librairie-viedimpact.com/produit/la-revolution-des-solutions-william/",
  "https://librairie-viedimpact.com/produit/le-monde-jusqua-hier-jared-diamond/",
  "https://librairie-viedimpact.com/produit/de-la-performance-a-lexcellence-jim-collins/",
  "https://librairie-viedimpact.com/produit/reflechissez-et-devenez-riche-napoleon-hill/",
  "https://librairie-viedimpact.com/produit/le-fonceur-peter-b-kyne/",
  "https://librairie-viedimpact.com/produit/reveillez-le-millionnaire-qui-est-en-vous/",
  "https://librairie-viedimpact.com/produit/les-secrets-d-un-esprit-millionnaire-t-harv-eker/",
  "https://librairie-viedimpact.com/produit/le-pouvoir-des-livres-yao-tanoumah-roger/",
  "https://librairie-viedimpact.com/produit/l-eveil-de-votre-puissance-interieure-anthony-robbins/",
  "https://librairie-viedimpact.com/produit/les-onze-lois-de-la-reussite-anthony-robbins/",
  "https://librairie-viedimpact.com/produit/osez-reussir-david-larose-sylvain-guimond/",
  "https://librairie-viedimpact.com/produit/la-8e-habitude-stephen-covey/",
  "https://librairie-viedimpact.com/produit/devenez-ce-que-vous-devez-etre-john-maxwell/",
  "https://librairie-viedimpact.com/produit/acceleration-divine-jean-clement-diambilay/",
  "https://librairie-viedimpact.com/produit/les-bons-comptes-font-les-bons-amants-heloise-bolle/",
  "https://librairie-viedimpact.com/produit/la-puissance-de-votre-subconscient-dr-joseph-murphy-2/",
  "https://librairie-viedimpact.com/produit/dans-la-tete-des-grands-leaders/",
  "https://librairie-viedimpact.com/produit/comment-jesus-a-coache-douze-personnes-ordinaires/",
  "https://librairie-viedimpact.com/produit/influence-et-manipulation/",
  "https://librairie-viedimpact.com/produit/18872/",
  "https://librairie-viedimpact.com/produit/cesse-de-texcuser-mon-amie-il-ny-a-pas-de-honte-a-rever/",
  "https://librairie-viedimpact.com/produit/strategie-ocean-bleu-comment-creer-de-nouveaux-espace-strategique/",
  "https://librairie-viedimpact.com/produit/fish-edition-stephen-c-lundin/",
  "https://librairie-viedimpact.com/produit/reussite-maximum-7-etapes-pour-creer-une-vie-selon-vos-propres-termes/",
  "https://librairie-viedimpact.com/produit/le-succes-par-pensee-constructive/",
  "https://librairie-viedimpact.com/produit/du-calme-mon-amie-sois-vraie-elimine-ces-fausses-croyances-qui-tempechent-detre-toi-meme/",
  "https://librairie-viedimpact.com/produit/rendez-vous-au-sommet/",
  "https://librairie-viedimpact.com/produit/atteindre-lexcellence-robert-greene/",
  "https://librairie-viedimpact.com/produit/accomplissez-des-miracles/",
  "https://librairie-viedimpact.com/produit/et-si-lamour-cetait-marc-gervais/",
  "https://librairie-viedimpact.com/produit/resolusilience-greg-s-reid/",
  "https://librairie-viedimpact.com/produit/le-bonheur-des-autres-tome-2-le-revenant-richard-gougeon/",
  "https://librairie-viedimpact.com/produit/la-sagesse-du-moine-qui-vendit-sa-ferrari-robin-sharma/",
  "https://librairie-viedimpact.com/produit/il-faut-le-croire-pour-le-voir-dr-wayne-w-dyer/",
  "https://librairie-viedimpact.com/produit/le-pouvoir-du-moment/",
  "https://librairie-viedimpact.com/produit/qui-a-pique-mon-fromage/",
  "https://librairie-viedimpact.com/produit/de-dons-en-miracles-acceptez-ces-dons-de-paix-et-de-guerison-frances-vaughan-roger-walsh/",
  "https://librairie-viedimpact.com/produit/petit-eloge-de-la-responsabilite-sophie-chiche/",
  "https://librairie-viedimpact.com/produit/pere-riche-pere-pauvre-robert-kiyosaki/",
  "https://librairie-viedimpact.com/produit/augmentez-votre-intelligence-financiere-robert-kiyosaki/",
  "https://librairie-viedimpact.com/produit/lentreprise-du-21e-siecle-robert-kiyosaki/",
  "https://librairie-viedimpact.com/produit/lart-du-trading-le-best-seller-du-trading/",
  "https://librairie-viedimpact.com/produit/gerer-vos-emotions-en-bourse/",
  "https://librairie-viedimpact.com/produit/15672/",
  "https://librairie-viedimpact.com/produit/lecole-des-affaires/",
  "https://librairie-viedimpact.com/produit/bitcoin-et-cryptomonnaies-pour-les-nuls/",
  "https://librairie-viedimpact.com/produit/le-modele-dioula-maurice-koue/",
  "https://librairie-viedimpact.com/produit/lobstacle-est-le-chemin-ryan-holiday/",
  "https://librairie-viedimpact.com/produit/largent-les-regles-de-base-tsipotu-koffi/",
  "https://librairie-viedimpact.com/produit/gagner-plus-comment-devenir-riche-et-le-rester-brian-tracy/",
  "https://librairie-viedimpact.com/produit/le-quadran-du-cashflow-robert-kiyosaki/",
  "https://librairie-viedimpact.com/produit/20-lois-irrefutables-de-la-creation-de-richesses-tsipotu-koffi/",
  "https://librairie-viedimpact.com/produit/la-finance-dentreprise/",
  "https://librairie-viedimpact.com/produit/nos-enfants-riches-brillants-donnez-un-bon-depart-financier-a-votre-enfants/",
  "https://librairie-viedimpact.com/produit/inebranlable-votre-guide-vers-la-liberte-financiere-tony-robbins/",
  "https://librairie-viedimpact.com/produit/athlete-de-la-vie-agir-ou-subir-thierry-schneider/",
  "https://librairie-viedimpact.com/produit/dhier-a-demain-shania-twain/",
  "https://librairie-viedimpact.com/produit/confiance-illimitee-franck-nicolas/",
  "https://librairie-viedimpact.com/produit/le-succes-selon-jack/",
  "https://librairie-viedimpact.com/produit/le-moine-qui-vendit-sa-ferrari/",
  "https://librairie-viedimpact.com/produit/la-jeune-millionnaire-marc-fisher/",
  "https://librairie-viedimpact.com/produit/le-miracle-christine-michaud/",
  "https://librairie-viedimpact.com/produit/quand-on-veut-on-peut-norman-vincent-peale/",
  "https://librairie-viedimpact.com/produit/aidez-les-gens-a-devenir-meilleurs-inspirez-les-autres-a-aller-toujours-plus-loin-alan-loy-mcginnis/",
  "https://librairie-viedimpact.com/produit/les-7-habitudes-de-ceux-qui-realisent-tout-ce-quils-entreprennent/",
  "https://librairie-viedimpact.com/produit/le-superleadership/",
  "https://librairie-viedimpact.com/produit/comment-devenir-un-as-du-marketing-jeffrey-fox/",
  "https://librairie-viedimpact.com/produit/comment-etre-un-bon-manager-jeffrey-fox/",
  "https://librairie-viedimpact.com/produit/pitcher-comme-un-pro-8-etapes-pour-etre-inoubliable-christine-morlet/",
  "https://librairie-viedimpact.com/produit/au-chevet-de-la-cote-divoire/",
  "https://librairie-viedimpact.com/produit/les-trois-lois-de-la-performance-dave-logan-steve-zaffron/",
  "https://librairie-viedimpact.com/produit/les-75-lois-de-fox-jeffrey-fox/",
  "https://librairie-viedimpact.com/produit/en-toute-franchise-kim-scott/",
  "https://librairie-viedimpact.com/produit/le-pouvoir-extraordinaire-de-lhumilite-chez-les-leaders-marilyn-gist/",
  "https://librairie-viedimpact.com/produit/vous-lavez-reve-alors-vivez-le/",
  "https://librairie-viedimpact.com/produit/les-17-lois-infaillibles-du-travail/",
  "https://librairie-viedimpact.com/produit/vivre-intentionnellement-john-maxwell/",
  "https://librairie-viedimpact.com/produit/les-60-lois-du-succes-par-temps-de-crise-broche-jeffrey-fox/",
  "https://librairie-viedimpact.com/produit/apprendre-des-geants-de-la-foi-john-maxwell/",
  "https://librairie-viedimpact.com/produit/la-vente-tom-hopkins/",
  "https://librairie-viedimpact.com/produit/3-methodes-marketing-pour-les-rh-marque-employeur-recrutement-experience-collaborateur-dabi-schwebel-gabriel-duval-chloe/",
  "https://librairie-viedimpact.com/produit/le-marketing-de-soi-majoly-dion/",
  "https://librairie-viedimpact.com/produit/la-minute-de-lor-alphonse-kouassi/",
  "https://librairie-viedimpact.com/produit/la-prodigieuse-machine-a-vendre/",
  "https://librairie-viedimpact.com/produit/le-plus-grand-vendeur-du-monde-2/",
  "https://librairie-viedimpact.com/produit/le-loup-de-wall-street-jordan-belfort/",
  "https://librairie-viedimpact.com/produit/traction-comment-toute-start-up-peut-developper-rapidement-sa-clientele-gabriel-weinberg/",
  "https://librairie-viedimpact.com/produit/prospectez-avec-posture-et-confiance/",
  "https://librairie-viedimpact.com/produit/les-profils-emotionnels-apprendre-a-les-connaitre-et-mieux-vivre-avec/",
  "https://librairie-viedimpact.com/produit/voyages-a-linterieur-de-soi/",
  "https://librairie-viedimpact.com/produit/le-succes-selon-jack-guide-daccompagnement-jack-canfield/",
  "https://librairie-viedimpact.com/produit/la-jeune-femme-qui-mangeait-des-biscuits-avec-un-casque-de-moto-sur/",
  "https://librairie-viedimpact.com/produit/systeme-1-systeme-2-les-deux-vitesses-de-la-pensee/",
  "https://librairie-viedimpact.com/produit/lart-daller-a-lessentiel/",
  "https://librairie-viedimpact.com/produit/meme-les-aigles-ont-besoin-dune-poussee-pour-apprendre-a-voler-david-mcnally/",
  "https://librairie-viedimpact.com/produit/lintelligence-emotionnelle/",
  "https://librairie-viedimpact.com/produit/femmes-noires-femmes-de-pouvoir-avis-a-jones-deweever/",
  "https://librairie-viedimpact.com/produit/lart-de-la-confiance-en-soi/",
  "https://librairie-viedimpact.com/produit/comment-gerer-largent-votre-famille-maurice-d-koue/",
  "https://librairie-viedimpact.com/produit/faux-robert-kiyosaki/",
  "https://librairie-viedimpact.com/produit/la-benediction-de-lindependance-financiere-jean-clement-diambilay/",
  "https://librairie-viedimpact.com/produit/lautoroute-du-millionnaire/",
  "https://librairie-viedimpact.com/produit/le-guide-ultime-de-marketing-de-reseau/",
  "https://librairie-viedimpact.com/produit/gagner-en-bourse/",
  "https://librairie-viedimpact.com/produit/les-5-outils-pour-reussir-en-equipe-stefano-mastrogiacomo-et-alexander-osterwalder/",
  "https://librairie-viedimpact.com/produit/marketing-de-reseau-101-joe-rubino-john-terhune/",
  "https://librairie-viedimpact.com/produit/largent-lart-de-le-maitriser/",
  "https://librairie-viedimpact.com/produit/le-systeme-don-et-nancy-failla/",
  "https://librairie-viedimpact.com/produit/go-pro-eric-worre/",
  "https://librairie-viedimpact.com/produit/couragevisionpassion-jacques-lepine/",
  "https://librairie-viedimpact.com/produit/le-facteur-latte/",
  "https://librairie-viedimpact.com/produit/la-gestion-de-projet/",
  "https://librairie-viedimpact.com/produit/que-fais-tu-de-tes-24h/",
  "https://librairie-viedimpact.com/produit/agir-5-ans-pour-virer-son-patron/",
  "https://librairie-viedimpact.com/produit/tout-le-monde-na-pas-eu-la-chance-de-rater-ses-etudes-olivier-roland/",
  "https://librairie-viedimpact.com/produit/guide-pour-investir-robert-t-kiyosaki/",
  "https://librairie-viedimpact.com/produit/avant-de-quitter-votre-emploi-robert-t-kiyosaki/",
  "https://librairie-viedimpact.com/produit/macroeconomie-gregory-n-mankiw/",
  "https://librairie-viedimpact.com/produit/la-gestion-pour-les-nuls/",
  "https://librairie-viedimpact.com/produit/finance-dentreprise-2/",
  "https://librairie-viedimpact.com/produit/strategie-les-33-lois-de-la-guerre/",
  "https://librairie-viedimpact.com/produit/management-11e-edition/",
  "https://librairie-viedimpact.com/produit/marketing-management-16e-edition-kotler/",
  "https://librairie-viedimpact.com/produit/reussir-avec-les-autres/",
  "https://librairie-viedimpact.com/produit/les-vrais-leaders-se-servent-en-dernier-simon-sinek/",
  "https://librairie-viedimpact.com/produit/kit-scolaire-cp1/",
  "https://librairie-viedimpact.com/produit/comment-reussir-une-negociation/",
  "https://librairie-viedimpact.com/produit/kit-de-cm1-cm2/",
  "https://librairie-viedimpact.com/produit/parfois-on-gagne-parfois-on-apprend-john-maxwell/",
  "https://librairie-viedimpact.com/produit/changez-votre-monde-john-c-maxwell-et-rob-hoskins/",
  "https://librairie-viedimpact.com/produit/travail-dequipe-101-john-c-maxwell/",
  "https://librairie-viedimpact.com/produit/un-mentor-en-or-1001-conseils-de-millionnaire-pour-une-vie-accomplie-kevin-harrington-marc-timm/",
  "https://librairie-viedimpact.com/produit/le-plus-grand-vendeur-du-monde/",
  "https://librairie-viedimpact.com/produit/strategie-digitale-et-psychologie-des-internautes/",
  "https://librairie-viedimpact.com/produit/marketing-5-0-la-technologie-au-service-du-consommateur-philip-kotler/",
  "https://librairie-viedimpact.com/produit/marketing-des-medias-sociaux/",
  "https://librairie-viedimpact.com/produit/101-questions-sur-tiktok-jean-noel-chaintreuil/",
  "https://librairie-viedimpact.com/produit/si-tu-nes-pas-le-premier-tu-es-le-dernier-strategies-de-vente-pour-dominer-le-marche-grant-cardone/",
  "https://librairie-viedimpact.com/produit/lentrepreneur-minute/",
  "https://librairie-viedimpact.com/produit/jetudie-pour-creer-mon-entreprise/",
  "https://librairie-viedimpact.com/produit/e-myth-le-mythe-de-lentrepreneur-revisite/",
  "https://librairie-viedimpact.com/produit/le-business-model-de-labonnement/",
  "https://librairie-viedimpact.com/produit/un-marche-de-plusieurs-millions/",
  "https://librairie-viedimpact.com/produit/facebook-pour-les-nuls-grand-format-4e-ed-carolyn-abram/",
  "https://librairie-viedimpact.com/produit/le-guide-detendu-des-emotions-au-travail/",
  "https://librairie-viedimpact.com/produit/un-an-pour-gagner-un-million-comment-trouver-le-produit-gagnant-et-developper-une-entreprise-prospere-ryan-daniel-moran/",
  "https://librairie-viedimpact.com/produit/business-adventures-il-etait-une-fois-au-pays-de-wall-street-12-mesaventures-et-lecons-dhier-john-brooks/",
  "https://librairie-viedimpact.com/produit/go-lancez-vous-seth-godin/",
  "https://librairie-viedimpact.com/produit/attitude-dun-gagnant/",
  "https://librairie-viedimpact.com/produit/tdah-pourquoi-etre-ordinaire-quand-on-peut-etre-special/",
  "https://librairie-viedimpact.com/produit/vivant-99-outils-pour-secouter-se-retrouver-et-aller-de-lavant/",
  "https://librairie-viedimpact.com/produit/45-secondes-qui-changeront-votre-vie/",
  "https://librairie-viedimpact.com/produit/marketing-relationnel-et-medias-sociaux/",
  "https://librairie-viedimpact.com/produit/lart-des-medias-sociaux-statregies-gagnantes-pour-un-usage-professionnel-guy-kawasaki-peg-fitzpatrick/",
  "https://librairie-viedimpact.com/produit/secrets-dexpert-e-commerce-comment-convertir-vos-visiteurs-en-clients-russell-brunson/",
  "https://librairie-viedimpact.com/produit/prenez-votre-vie-en-main/",
  "https://librairie-viedimpact.com/produit/faites-fonctionner-le-premier-cercle/",
  "https://librairie-viedimpact.com/produit/crush-it-exceller-au-dela-de-vos-esperances-gary-vaynerchuk/",
  "https://librairie-viedimpact.com/produit/customer-experience-redesign-lexperience-client-remise-a-plat-gabriel-dabi-schwebel-valerie-vax/",
  "https://librairie-viedimpact.com/produit/le-coequipier-ideal/",
  "https://librairie-viedimpact.com/produit/le-mba-visuel/",
  "https://librairie-viedimpact.com/produit/les-17-secrets-des-maitres-prospecteurs-en-marketing/",
  "https://librairie-viedimpact.com/produit/2c-selling-la-methode-de-vente-de-la-qualification-au-closing-gabriel-dabi-schwebel-nicolas-delignieres/",
  "https://librairie-viedimpact.com/produit/afrique-la-revolution-des-entreprises/",
  "https://librairie-viedimpact.com/produit/je-veux-etre-mon-propre-patron/",
  "https://librairie-viedimpact.com/produit/cinq-coups-davance-devenez-un-maitre-de-la-strategie-dentreprise/",
  "https://librairie-viedimpact.com/produit/linvestisseur-intelligent/",
  "https://librairie-viedimpact.com/produit/quittez-la-course-des-rats-mj-demarco/",
  "https://librairie-viedimpact.com/produit/120-astuces-pour-mieux-gerer-votre-argent/",
  "https://librairie-viedimpact.com/produit/leadershift-les-11-changements-essentiels-auxquels-tout-leader-doit-se-preter/",
  "https://librairie-viedimpact.com/produit/la-50eme-loi/",
  "https://librairie-viedimpact.com/produit/dechiffrer-les-codes-de-lentreprise-pour-bien-sintegrer-et-evoluer-gorick-ng/",
  "https://librairie-viedimpact.com/produit/a-deux-pas-de-lor/",
  "https://librairie-viedimpact.com/produit/regles-ont-change-les/",
  "https://librairie-viedimpact.com/produit/side-business/",
  "https://librairie-viedimpact.com/produit/raph-story-croire-au-dela-de-limpossible/",
  "https://librairie-viedimpact.com/produit/launch-jeff-walker/",
  "https://librairie-viedimpact.com/produit/petite-entreprise-gros-profits-jeffrey-fox/",
  "https://librairie-viedimpact.com/produit/finance-dentreprise-3/",
  "https://librairie-viedimpact.com/produit/macroeconomie-8e-edition/",
  "https://librairie-viedimpact.com/produit/la-boite-a-outils-du-marketing-digital-2e-ed-stephane-trupheme/",
  "https://librairie-viedimpact.com/produit/nudge-edition-mise-a-jour-et-augmentee-edition-ultime-du-best-seller-du-prix-nobel-deconomie-cass-r-sunstein/",
  "https://librairie-viedimpact.com/produit/kit-de-ce1-ce2/",
  "https://librairie-viedimpact.com/produit/avant-de-punir-nos-enfants-des-alternatives-efficaces-pour-mieux-assurer-la-discipline-de-nos-enfants/",
  "https://librairie-viedimpact.com/produit/kit-de-cp2/",
  "https://librairie-viedimpact.com/produit/le-systeme-educatif-que-la-cote-divoire-merite/",
  "https://librairie-viedimpact.com/produit/40-ans-de-prison-ou-5-ans-de-travail-force/",
  "https://librairie-viedimpact.com/produit/force-de-vie-les-dernieres-avancees-technologiques-en-matiere-de-sante-pour-vous-aider-a-maximiser-votre-energie-et-votre-force-a-prevenir-les-maladies-et-a-prolonger-votre-esperance-de-vie-tony-ro/",
  "https://librairie-viedimpact.com/produit/cassez-la-baraque/",
  "https://librairie-viedimpact.com/produit/lintuition-chez-les-femmes-daffaires-les-intuipreneures/",
  "https://librairie-viedimpact.com/produit/renversez-la-vapeur/",
  "https://librairie-viedimpact.com/produit/depasse-toi-prends-ton-avenir/",
  "https://librairie-viedimpact.com/produit/heureux-ian-k-smith/",
  "https://librairie-viedimpact.com/produit/le-mariage-a-tout-prix-roman-epiphanie-nangui-tahi/",
  "https://librairie-viedimpact.com/produit/la-gestion-des-ressources-humaines-comprendre-les-principes-essentiels-gnakpa-vincent/",
  "https://librairie-viedimpact.com/produit/le-golfeur-et-le-millionnaire-marc-fisher/",
  "https://librairie-viedimpact.com/produit/relation-epanouie-et-efficace-avec-nos-enfants-astuces-et-conseils-pratiques-pour-mieux-faire-face-aux-comportements-de-nos-enfants-sophia/",
  "https://librairie-viedimpact.com/produit/devenez-superstar-vente-direct/",
  "https://librairie-viedimpact.com/produit/le-premier-million-marc-fisher/",
  "https://librairie-viedimpact.com/produit/la-puissance-de-nos-differences-sylvain-guimond/",
  "https://librairie-viedimpact.com/produit/le-financement-participatif-enjeux-de-developpement-pour-lafrique-jean-yves-regis-naka/",
  "https://librairie-viedimpact.com/produit/manuel-de-communication-nonviolente-lucy-leu/",
  "https://librairie-viedimpact.com/produit/maux-pour-le-dire-simplement-les/",
  "https://librairie-viedimpact.com/produit/du-reve-a-la-realite-john-maxwell/",
  "https://librairie-viedimpact.com/produit/reveille-toi-tu-es-un-vrai-miracle-de-la-nature/",
  "https://librairie-viedimpact.com/produit/la-science-du-succes-napoleon-hill/",
  "https://librairie-viedimpact.com/produit/la-boite-a-outils-du-e-commerce-2e-ed-55-outils-cles-en-main-et-4-videos-dapprofondissement-christian-delabre/",
  "https://librairie-viedimpact.com/produit/introduction-a-la-microeconomie-8e-edition/",
  "https://librairie-viedimpact.com/produit/petites-histoires-de-gros-dollars-les-origines-de-notre-univers-financier-fabien-major/",
  "https://librairie-viedimpact.com/produit/introduction-a-leconomie-2e-edition/",
  "https://librairie-viedimpact.com/produit/lart-de-la-victoire-autobiographie-du-fondateur-de-nike/",
  "https://librairie-viedimpact.com/produit/jai-ose-massumer-sabine-ziriyo/",
  "https://librairie-viedimpact.com/produit/go-agissez/",
  "https://librairie-viedimpact.com/produit/eveillez-letincelle/",
  "https://librairie-viedimpact.com/produit/golf-dans-le-royaume/",
  "https://librairie-viedimpact.com/produit/m-francis-fossou-entreprenariat-en-education-financiere/",
  "https://librairie-viedimpact.com/produit/vaincre-les-attaques-sataniques-dans-les-reves-fn-francis-ngawala/",
  "https://librairie-viedimpact.com/produit/la-reine-du-stade/",
  "https://librairie-viedimpact.com/produit/lart-de-benir-pasteur-yao-tanoumah-roger-tome-2/",
  "https://librairie-viedimpact.com/produit/elle-et-lui/",
  "https://librairie-viedimpact.com/produit/comment-vaincre-la-malediction-du-chomage/",
  "https://librairie-viedimpact.com/produit/planifier-sa-retraite-ou-sa-releveca-ne-fait-pas-mourir/",
  "https://librairie-viedimpact.com/produit/la-chance-davoir-un-enfant-autiste-aminata-ouattara/",
  "https://librairie-viedimpact.com/produit/le-jour-ou-mon-enfant-ma-enseigne-sophia/",
  "https://librairie-viedimpact.com/produit/amour-amertume-et-autre-reflexion-aghimaney/",
  "https://librairie-viedimpact.com/produit/les-outils-des-geants-timothy-ferriss-2/",
  "https://librairie-viedimpact.com/produit/developpez-votre-leadership/",
  "https://librairie-viedimpact.com/produit/le-jour-montant-demba-diop/",
  "https://librairie-viedimpact.com/produit/coeur-a-coeur-thierry-schneider/",
  "https://librairie-viedimpact.com/produit/accompagnement-dun-etre-cher/",
  "https://librairie-viedimpact.com/produit/la-regle-pas-de-regles-reed-hastings-et-erin-meyer/",
  "https://librairie-viedimpact.com/produit/michel-gohou-destin-dun-miracule-pierre-teubeu/",
  "https://librairie-viedimpact.com/produit/les-voleurs-de-bonheur/",
  "https://librairie-viedimpact.com/produit/agir-reussir/",
  "https://librairie-viedimpact.com/produit/kit-developpement-personnel-2/",
  "https://librairie-viedimpact.com/produit/abraham-lincoln/",
  "https://librairie-viedimpact.com/produit/ce-dont-je-suis-certaine/",
];

module.exports = livres