import { staticInformation } from "../../pages/Home/staticData"
import "./Footer.css"

const Footer = () => {
    const { email, instagram } = staticInformation

    return (
        <footer className="footer">
            <a href={`https://www.instagram.com/${instagram}/`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram-link">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" />
                    <circle cx="12" cy="12" r="4.25" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
            </a>
            <a href={`mailto:${email}`}>{email}</a>
        </footer>
    )
}

export default Footer
