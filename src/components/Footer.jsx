export const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer>
            <h2>Mis redes:</h2>
            <ul id='contacto' className='rrss'>
                <li className='logo'>
                    <a className='rrss-link' href='https://github.com/DRJacome'>
                        GitHub
                        <img
                            className='github'
                            src='./assets/rrss/github-logo.png'
                        />
                    </a>
                </li>
                <li className='logo'>
                    <a
                        className='rrss-link'
                        href='https://www.linkedin.com/in/david-rodriguez-jacome/'>
                        LinkedIn
                        <img src='./assets/rrss/linkedin-logo.png' />
                    </a>
                </li>
            </ul>
            <div className='scroll-inicio' onClick={handleScrollTop}>
                ⤴
            </div>
        </footer>
    );
};
