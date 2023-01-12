
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Deine App für die GASTEINER PISTEN. Start & Download Jetzt Kostenlos"
        description="Pistenkonditionen, Wettervorhersagen, Pistenpläne und vieles mehr. Die App, für, die die Gasteiner Pisten besuchen möchten."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Verbessere deine Fähigkeiten mit der Gasteiner App"
        description="Entdecke dein volles Potenzial auf den Pisten mit der Gasteiner App! Mit Zugang zu umfassenden Trainings- und Lerninhalten, persönlichen Trainingsplänen und der Möglichkeit, dich mit anderen Skifahrern und Snowboardern zu vernetzen, wirst du deine Fähigkeiten schneller verbessern als je zuvor."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Immer mit Dir Unterwegs!"
        description="Die Gasteiner App ist dein ultimativer Begleiter für einen unvergesslichen Ski- oder Snowboardurlaub in Gastein. Mit nur einem Klick hast du alle wichtigen Informationen zu deiner Hand, wie zum Beispiel aktuelle Pistenbedingungen, Wettervorhersagen und Pistenpläne. Du kannst sogar Live-Webcams ansehen, um dir einen Eindruck von den Bedingungen vor Ort zu machen."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Lass die SAU RAUS!"
        description="JETZT GEHTS LOOOOS!!!!."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">l.r0y</span>
        </p>
      </div>
    </>
  );
}

export default App;
