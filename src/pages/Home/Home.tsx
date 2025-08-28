import { useEffect, useState } from "react"
import db from "../../services/DatabaseService"
import { Query } from "appwrite"
import type { IExhibition, IInformation } from "../../types"
import { BIO, EMAIL, TITLE } from "../../utils/SharedConsts"
import "./Home.css"

const Home = () => {
    const [information, setInformation] = useState<IInformation>({
        title: TITLE,
        bio: BIO,
        email: EMAIL,
    } as IInformation)
    const [exhibitions, setExhibitions] = useState<IExhibition[]>([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => { 
        const informationResponse = await db.information.list()
        const exhibitionsResponse = await db.exhibitions.list(
            [Query.orderDesc('year')]
        )
        if (!informationResponse.documents[0]) {
            console.error("No information document found")
            return;
        }
        if (!exhibitionsResponse.documents) {
            console.error("No exhibitions document found")
            return;
        }
        setInformation(informationResponse.documents[0])
        setExhibitions(exhibitionsResponse.documents)
    }

    const tdStyle = {
        fontStyle: "italic",
    };

    const trStyle = {
        padding: '8px'
    };

    return (
        <>
            <h1 className="title">{information.title}</h1>
            <p className="bio">{information.bio}</p>
            <a className="email-link" href={`mailto:${information.email}`}>{information.email}</a>
            <div className="custom-divider"></div>
            <h2>Exhibitions</h2>
            <div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                    {exhibitions.map((exhibition, index) => (
                        <tr style={trStyle} key={index}>
                            <td>{exhibition.year}</td>
                            <td style={tdStyle}>{exhibition.title}</td>
                            <td>{exhibition.venue}</td>
                            <td>{exhibition.city}</td>
                            <td>{exhibition.type}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {/* <div>
                {exhibitions.map(
                    (exhibition: IExhibition) => (
                        <div key={exhibition.$id} className="exhibitionRow">
                            <span className="exhibitionColumn">{exhibition.year}</span>  
                            <span className="exhibitionColumn italic">{exhibition.name}</span>
                            <span className="exhibitionColumn">{exhibition.venue}, {exhibition.city}</span>
                            <span className="exhibitionColumn">{exhibition.type}</span>
                        </div>
                    )
                )}
            </div> */}
        </>
    )
}

export default Home