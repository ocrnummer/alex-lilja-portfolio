import { useEffect, useState } from "react"
// import db from "../../services/DatabaseService"
// import { Query } from "appwrite"
import type { Exhibition, Information } from "../../types"
import "./Home.css"
// import { insertLineBreaksAfterSentence, insertLineBreaksAfterWords } from "../../utils/InsertLinebreak"
import { staticInformation, staticExhibitions } from "./staticData"

const Home = () => {
    const [information, setInformation] = useState<Information | null>(null)
    const [exhibitions, setExhibitions] = useState<Exhibition[]>([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => { 
        // const informationResponse = await db.information.list()
        // const exhibitionsResponse = await db.exhibitions.list(
        //     [Query.orderDesc('year')]
        // )
        // if (!informationResponse.documents[0]) {
        //     console.error("No information document found")
        //     return;
        // }
        // if (!exhibitionsResponse.documents) {
        //     console.error("No exhibitions document found")
        //     return;
        // }
        // const formattedInfo = {
        //     ...informationResponse.documents[0],
        //     bio: insertLineBreaksAfterSentence(informationResponse.documents[0].bio),
        //     title: insertLineBreaksAfterWords(informationResponse.documents[0].title)
        setInformation(staticInformation)
        // Newest first, same as Query.orderDesc('year') above
        setExhibitions([...staticExhibitions].sort((a, b) => b.year - a.year))
    }

    return (
        <> 
            {information && (
                <>
                    <p className="bio">{information.bio}</p>
                    <a className="email-link" href={`mailto:${information.email}`}>{information.email}</a>
                </>
            )}
            <table className="table">
                <caption className="visually-hidden">Exhibitions</caption>
                <thead className="visually-hidden">
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Exhibition</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                {exhibitions.map((exhibition) =>  (
                    <tr key={exhibition.$id}>
                        <td>{exhibition.year}</td>
                        <td className="italic">{exhibition.name}</td>
                        <td>{exhibition.venue}, {exhibition.city}</td>
                        <td>{exhibition.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Home