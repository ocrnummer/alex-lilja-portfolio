import { useState, type CSSProperties, type MouseEvent } from "react"
import { Link, NavLink } from "react-router-dom"
import { NAME, NAV_BASE_URL, NAV_WORKS_URL } from "../../utils/SharedConsts"
import sticker from "../../assets/sticker-header.png"
import "./Header.css"

type Squawk = {
    id: number,
    path: CSSProperties,
}

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min)

// A slightly different upward path each time: where it bends halfway, where it ends and its tilt
const randomSquawkPath = () => ({
    "--squawk-mid-x": `${randomBetween(-4, 10).toFixed(1)}px`,
    "--squawk-mid-y": `${randomBetween(-6, -12).toFixed(1)}px`,
    "--squawk-end-x": `${randomBetween(2, 18).toFixed(1)}px`,
    "--squawk-end-y": `${randomBetween(-14, -24).toFixed(1)}px`,
    "--squawk-tilt": `${randomBetween(-8, 8).toFixed(1)}deg`,
}) as CSSProperties

const Header = () => {
    // One entry per click, so quick clicks each get their own squawk
    const [squawks, setSquawks] = useState<Squawk[]>([])

    const handleNameClick = (event: MouseEvent<HTMLAnchorElement>) => {
        // Only squawk when the gull itself is clicked, not the name
        if ((event.target as HTMLElement).classList.contains("header-logo")) {
            setSquawks((current) => [...current, { id: Date.now(), path: randomSquawkPath() }])
        }
    }

    const removeSquawk = (id: number) => {
        setSquawks((current) => current.filter((squawk) => squawk.id !== id))
    }

    return (
        <>
        <header className="header">
            <nav className="header-nav" aria-label="Main">
                <Link className="header-name" to={NAV_BASE_URL} onClick={handleNameClick}>
                    {/* Invisible placeholder that keeps the logo's space and click area */}
                    <img className="header-logo header-logo-placeholder" src={sticker} alt="" />
                    {NAME}
                </Link>
                <NavLink className="header-tab" to={NAV_WORKS_URL}>works</NavLink>
            </nav>
        </header>
        {/* Visible logo, drawn outside the header so it skips the color flip */}
        <img className="header-logo header-logo-overlay" src={sticker} alt="" />
        {squawks.map(({ id, path }) => (
            <span key={id} className="squawk" style={path} aria-hidden="true" onAnimationEnd={() => removeSquawk(id)}>
                Squawk
            </span>
        ))}
        </>
    )
}

export default Header
