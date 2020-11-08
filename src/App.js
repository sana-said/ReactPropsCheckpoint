import './App.css';
import ProfileComponent from './profile/ProfileComponent'
import photo from './PhotoProfil.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  let InfoPerson = {
    fullName: "SAID SANA",
    bio: " Je me nomme Said Sana, Tunisienne âgé de 34 ans. Après un parcours secondaire brillant couronné par l'admission au baccalauréat en 2005, j'ai pu continuer mes études supérieurs au sein de l'Institut Supérieur des Etudes Technologique et j'ai eu mon diplome de Technicien Supérieur en Réseaux Informatique en 2009 avec mention Trés Bien. Et étant donné que le métier de Développeur Web est ma passion première, j'ai continué le chemain d'informatique en me formant sur le developpement web et j'ai eu un FULLSTACK-javascript formation et j'aimerais être responsable de la vie d'un site web au sein d'une entreprise informatique  sérieuse en vue d'accroître mes compétences pour mes objectifs futurs.",
    profession: "Développeur Web Genior",
  }

  let handleName = () => alert(InfoPerson.fullName ? InfoPerson.fullName : "Hello User")

  return (
    <div  style={{textAlign: "center"}}>
      <div className="App-header" style={{backgroundColor: "#282c34"}}>

        <ProfileComponent
          info={InfoPerson}
          alerte={handleName}
          photo={<img src={photo} alt=" mon profile" />}
        />
      </div>
    </div>
  );
}

export default App;
