import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`techNotes: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>WELCOME!{username}!</h1>

            <p><Link to="/dash/notes">VIEW NOTES</Link></p>

            <p><Link to="/dash/notes/new">ADD NEW NOTE</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">VIEW USER SETTINGS</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">ADD NEW USER</Link></p>}

        </section>
    )

    return content
}
export default Welcome