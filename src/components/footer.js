
const Footer = () => {
    return (
        <div className="w-full" id="footer">
            <div className="flex justify-between items-center px-52 h-32  bg-blue-500 " >
                <div>
                    <ul className="flex w-56 px-2 text-xl justify-between">
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
                    </ul>
                </div>
                <div>
                    <p className="footer_copyright" >Site by{' '}
                        <a href="#" className="footer_link">
                            Vitor Alecrim
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;