import{FiBook} from "react-icons/fi" 
const Story = () => {
    const story=[
        {
            name: "Ecole Nationale d'Informatique",
            level: "Licence Professionel",
            desc: "",
            statut: "en cours",
            icon: <FiBook/>
        },
        {
            name: "Lycéé RAHERIVELO RAMAMONJY",
            level: "Baccalaureat",
            desc: "",
            statut: "Obtenu",
            icon: <FiBook/>
        },
        {
            name: "COLLEGE DE REFERENCE IDANDA",
            level: "Brevet d'Etude de Premier Cycle",
            desc: "",
            statut: "Obtenu",
            icon: <FiBook/>
        }
    ]
    return (
        <div>
            {
                story.map((story, index)=>(
                    <div key={index}>
                        <div>

                        </div>
                        <div>
                            <h3>{story.name}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Story;