
const Footer = () => {
    return (
        <footer className="w-full" id="footer">
            <section className="flex flex-wrap items-center justify-center md:justify-between  md:px-52 h-32  bg-blue-500" >
                <div>
                    <ul className="flex w-80 px-2  text-md md:text-xl justify-between">
                        <li className="footer_items">
                            <a href="https://github.com/Gondrak08" className="footer_link">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vitor-alecrim-pereira-0a588b145/" className="footer_link" >
                                Linkedin
                            </a>    
                        </li>
                        <li>
                            <a href="https://twitter.com/vitoralecrim" className="footer_link" >
                                twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="footer_copyright text-sm md:text-xl" >Site by{' '}
                        <a href="#" className="footer_link">
                            Vitor Alecrim
                        </a>
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;