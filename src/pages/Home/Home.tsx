import { Fragment, useEffect, useState } from "react"
// import db from "../../services/DatabaseService"
// import { Query } from "appwrite"
import type { Exhibition } from "../../types"
import "./Home.css"
// import { insertLineBreaksAfterSentence, insertLineBreaksAfterWords } from "../../utils/InsertLinebreak"
import { staticExhibitions, staticUpcomingExhibitions } from "./staticData"

const ExhibitionColumns = () => (
    <colgroup>
        <col className="col-year" />
        <col className="col-name" />
        <col className="col-venue" />
        <col className="col-type" />
    </colgroup>
)

const Home = () => {
    const [exhibitions, setExhibitions] = useState<Exhibition[]>([])
    const [upcomingExhibitions, setUpcomingExhibitions] = useState<Exhibition[]>([])

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
        // Newest first, same as Query.orderDesc('year') above
        setExhibitions([...staticExhibitions].sort((a, b) => b.year - a.year))
        setUpcomingExhibitions([...staticUpcomingExhibitions].sort((a, b) => b.year - a.year))
    }

    return (
        <> 
                <table className="table">
                <caption><p>Upcoming Exhibitions</p></caption>
                <ExhibitionColumns />
                <thead className="visually-hidden">
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Exhibition</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                {upcomingExhibitions.map((exhibition) =>  (
                    <Fragment key={exhibition.$id}>
                    <tr>
                        <td>{exhibition.year}</td>
                        <td className="italic">{exhibition.name}</td>
                        <td>{exhibition.venue}, {exhibition.city}</td>
                        <td>{exhibition.type}</td>
                    </tr>
                    {exhibition.note && (
                        <tr className="note-row italic">
                            <td colSpan={4}>{exhibition.note}</td>
                        </tr>
                    )}
                    </Fragment>
                ))}
                </tbody>
            </table>
            <hr />
            <table className="table">
                <caption><p>Previous Exhibitions</p></caption>
                <ExhibitionColumns />
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