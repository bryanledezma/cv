import './App.css';
import myphoto from './images/me.jpg';
import { Container } from './Components/Container';
import { Sidebar } from './Components/Sidebar'
import { Content } from './Components/Content';
import { Photo } from './Components/Photo';
import { TextElement } from './Components/TextElement';
import { ContentTitle } from './Components/ContentTitle';
import { List } from './Components/List';
import { Footer } from './Components/Footer';


const aboutme = "Desarrollador web (Trainee-Jr) egresado de la carrera de Ingeniería en Tecnologías de la información en búsqueda de crecimiento profesional. Disfruto estar en constante aprendizaje aprovechando los recursos a mi alcance, así como actualizar los conocimientos ya aprendidos mientras conservo una actitud positiva al hacerlo."; 
const frontend = ["HMTL y CSS, JavaScript y React."];
const backend = ["PHP, Laravel."];
const other = ["Diseño de bases de datos, SQLServer y MySql."];
const technicHabilities = ["Autodidacta.","Trabajo en equipo.","Creatividad.","Lógica de programación.","Redacción y ortografía."]
const langs= ["Español. (Nativo)", "Inglés. (Intermedio)"]
const grade=["Ingeniería en Tecnologías de la información."]
const apt=["Empatía",
  "Pasión",
  "Carisma",
  "Paciencia",
  "Adaptabilidad"]
const estadia = "Jurisdicción Sanitaria N° 1 (Ciudad Victoria, Tamps) \n Colaboración en el desarrollo de sistema web de registro con Laravel 8 para uso interno de la organización. Mayo 2021 - Agosto 2021";
const curses =["Programación profesional desde cero. Udemy (2021)", 
  "Programación Web desde 0 con PHP 8, Mysql, Laravel y Symfony. Udemy (2022)", 
  "Front End a profundidad con React.Js. Platzi (cursando actualmente)"]

function App() {
  return (
    
    <Container>
      
      <Sidebar>
        <Photo src={myphoto} alt="mi fotografia"></Photo>
        <TextElement pos="side" title="BRYAN VIVEROS" text="Ingeniero en Tecnologías de la Información | Desarrollador Web"></TextElement>
        <TextElement pos="side" title="SOBRE MÍ" text={aboutme}></TextElement>
        <TextElement pos="side" title="APTITUDES PERSONALES"></TextElement>
        <List elements={apt} color='white'></List>
      </Sidebar>
      
      
      <Content>
        <ContentTitle>HABILIDADES TÉCNICAS</ContentTitle>
        <TextElement pos="content" title="Tecnologías Front-End:"></TextElement>
        <List elements={frontend}></List>
        <TextElement pos="content" title="Tecnologías Back-End:"></TextElement>
        <List elements={backend}></List>
        <TextElement pos="content" title="Otros:"></TextElement>
        <List elements={other}></List>
        <ContentTitle>HABILIDADES LABORALES</ContentTitle>
        <List elements={technicHabilities} breakcolumn='true'></List>
        <ContentTitle>IDIOMAS</ContentTitle>
        <List elements={langs} breakcolumn='false'></List>
        <ContentTitle>FORMACIÓN ACÁDEMICA</ContentTitle>
        <TextElement title="Universidad Politécnica de Victoria (Ciudad Victoria, Tamaulipas.)" pos="content"></TextElement>
        <List elements={grade} breakcolumn='false'></List>
        <TextElement title="ESTADÍA PROFESIONAL" pos="content" text={estadia}></TextElement>
        <TextElement title="CURSOS" pos="content"></TextElement>
        <List elements={curses}></List>

      </Content>

      
      <Footer>
        <TextElement pos="footer" title="Fecha de nacimiento" text="27 de febrero de 1999"></TextElement>
        <TextElement pos="footer" title="Telefono:" text="+52 8311638486"></TextElement>
        <TextElement pos="footer" title="Correo electrónico:" text="bryan_led@hotmail.com"></TextElement>
      </Footer>
    </Container>
  );
}

export default App;
