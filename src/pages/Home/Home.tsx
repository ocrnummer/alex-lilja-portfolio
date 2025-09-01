import { useEffect, useState } from "react"
import db from "../../services/DatabaseService"
import { Query } from "appwrite"
import type { IExhibition, IInformation } from "../../types"
import { BIO, EMAIL, TITLE } from "../../utils/SharedConsts"
import "./Home.css"
import { insertLineBreaksAfterSentence, insertLineBreaksAfterWords } from "../../utils/InsertLinebreak"

const Home = () => {
    const [information, setInformation] = useState<IInformation>({
        title: TITLE,
        bio: BIO,
        email: EMAIL,
    } as IInformation)
    const [exhibitions, setExhibitions] = useState<IExhibition[]>([])

    const EXHIBITIONS_TITLE = "Exhibitions"

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
        const formattedInfo = {
            ...informationResponse.documents[0],
            bio: insertLineBreaksAfterSentence(informationResponse.documents[0].bio),
            title: insertLineBreaksAfterWords(informationResponse.documents[0].title)
        }
        setInformation(formattedInfo)
        setExhibitions(exhibitionsResponse.documents)
    }

    return (
        <> 
            <div className="headerContainer">
                <h1 className="title">{information.title}</h1>
                <p className="bio">{information.bio}</p>
                <a className="email-link" href={`mailto:${information.email}`}>{information.email}</a>
            </div>
            <div className="custom-divider"></div>
            <div className="exhibitionsTableContainer">
                <h2>{EXHIBITIONS_TITLE}</h2>
                <div>
                    <table className="table">
                        <tbody>
                        {exhibitions.map((exhibition, index) =>  (
                            <tr key={index}>
                                <td>{exhibition.year}</td>
                                <td className="italic">{exhibition.name}</td>
                                <td>{exhibition.venue}, {exhibition.city}</td>
                                <td>{exhibition.type}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home