import {
  Article,
  Card,
  Hero,
  Layout,
  Section,
  BlocChiffres
} from "../src/composants";

export const CardWIF = () => (
  <Card
    href="/startups/work-in-france"
    img="/static/images/startups/work-in-france.jpg"
    title="Work In France"
    meta="Avril 2018"
    description="La plateforme de demande d'autorisation provisoire de travail pour les étudiants étrangers."
  />
);

export const CardMJPM = () => (
  <Card
    href="/startups/e-mjpm"
    img="/static/images/startups/e-mjpm.jpg"
    title="e-MJPM"
    meta="Mai 2018"
    description="Trouver rapidement le bon professionnel pour les majeurs à protéger."
  />
);

export const CardCDTN = () => (
  <Card
    href="/startups/code-du-travail-numerique"
    img="/static/images/startups/code-du-travail-numerique.jpg"
    title="Code du travail Numérique"
    meta="Juin 2018"
    description="Faciliter l'accès au droit du travail pour les employeur·e·s et les employé·e·s."
  />
);

export const Cards = {
  wif: CardWIF,
  emjpm: CardMJPM,
  cdtn: CardCDTN
};

const Homepage = () => (
  <Layout>
    <Hero
      title="ASTech.social.gouv.fr"
      tagline="Bienvenue à l'incubateur des ministères sociaux"
    />

    <BlocChiffres />
    <Article>
      <h1>Nos agents au service du public</h1>

      <p>
        Qui offenderit rapto, <a href="#">terribilem incessu</a>. The voodoo
        sacerdos suscitat mortuos comedere carnem.{" "}
      </p>

      <h2>Zombie ipsum</h2>

      <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
        vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
        Hi mindless mortuis soulless creaturas, imo evil stalking monstra
        adventus resi dentevil vultus comedat cerebella viventium. Qui animated
        corpse, cricket bat max brucks terribilem incessu zomby. The voodoo
        sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi
        tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains
        an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv
        ingdead.
      </p>

      <h2>Nescio an Undead zombies</h2>

      <p>
        Cum horribilem walking dead resurgere de crazed sepulcris creaturis,
        zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe
        dead scythe animated corpses ipsa screams. Pestilentia est plague haec
        decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a
        dolor plan et terror soulless vulnerum contagium accedunt, mortui iam
        vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia
        sint terribiles undeath legionis. Alii missing oculis aliorum sicut
        serpere crabs nostram.
      </p>

      <p>
        <strong>
          Putridi braindead odores kill and infect, aere implent left four dead.
        </strong>
      </p>
    </Article>

    <a id="produits" name="produits" />
    <Section
      className="section-color cards"
      title="Nos produits"
      subTitle="Découvrez les produits conçus par nos agents"
    >
      <div className="row" style={{ color: "black" }}>
        <CardWIF />
        <CardMJPM />
        <CardCDTN />
      </div>
    </Section>
  </Layout>
);

export default Homepage;
