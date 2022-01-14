import Competencia from "./Comp";
import './Home.scss';
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';


    const Home = () => {

        const navigate = useNavigate();
    function goBack() {
        navigate("/");

        export default function ControlledAccordions() {
            const [expanded, setExpanded] = React.useState(false);
          
            const handleChange = (panel) => (event, isExpanded) => {
              setExpanded(isExpanded ? panel : false);
    }

        return (
            <div className="home">
                <div className="t32">
                    <div className="flex center">
                        <button className="absolute" onClick={goBack}>
                           <ArrowBackRoundedIcon/>
                        </button>
                        <h1>Currículo</h1>
                    </div>
                    <p>João Vítor Basso Sberse</p>
                    <p>18 anos</p>
                    <br></br>
                    <hr></hr>
                </div>
                <div className="t32">
                    <h2>Competências</h2>
                    {data.map((item, index) => (
                        <Competencia key={item.id} titulo={item.titulo} texto={item.texto} />
                    ))}
                </div>
            </div>

        )
    }

    const data = [
        {
            id: 1,
            titulo: 'Experiência em Processos Administrativos',
            texto: 'Setor de COMPRAS - Conhecimento médio sobre processos de licitações de órgãos governamentais.'
        },
        {
            id: 2,
            titulo: 'Cursos Menor Aprendiz',
            texto: ''
        },
        {
            id: 3,
            titulo: 'Conhecimento Nível Júnior - HTML',
            texto: ''
        },
        {
            id: 4,
            titulo: 'Conhecimento Nível Júnior - CSS',
            texto: ''
        },
        {
            id: 5,
            titulo: 'Conhecimento Nível Júnior - REACT',
            texto: ''
        },
        {
            id: 6,
            titulo: 'Conhecimento Básico - Flutter',
            texto: ''
        }

    ]

    export default Home;