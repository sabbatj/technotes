import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">FixIt Solutions!</span></h1>
            </header>
            <main className="public__main">
                <p>FixIt Solutions, a proficient IT company specializing in both software and hardware repairs, is strategically located in the heart of Cape Town. Our adept team is well-equipped to cater to all your technical repair needs.</p>
                <address className="public__addr">
                    FixIt Solutions!<br />
                    123 Cape Street<br />
                    Cape Town, WC 8000<br />
                    <a href="tel:+27211234567">(27) 21-123-4567</a>
                </address>
                <br />
                <p>Owner:UNKNOWN</p>
            </main>
            <footer>
                <Link to="/login">EMPLOYEE LOGIN</Link>
            </footer>
        </section>

    )
    return content
}
export default Public