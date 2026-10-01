import { useEffect, useState } from "react"
// import db from "../../services/DatabaseService"
import type { WorksInformation } from "../../types"
import { staticWorksInformation } from "./staticData"

const Works = () => {
    const [worksInformation, setWorksInformation] = useState<WorksInformation | null>(null)

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        // const worksInformationResponse = await db.worksInformation.list()
        // if (!worksInformationResponse.documents[0]) {
        //     console.error("No works information document found")
        //     return;
        // }
        // setWorksInformation(worksInformationResponse.documents[0])
        setWorksInformation(staticWorksInformation)
    }

    return (
        <p>{worksInformation?.text}</p>
    )
}

export default Works
