function Footer() {
    return (
        <>
            <footer>
                <img src="./src/images/logo.svg" alt="logo" />

                <section>
                    <div>
                        <ul>
                            <li>
                                <img src="./src/images/icon-location.svg" alt="icon-location" />
                            </li>

                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <img src="./src/images/icon-phone.svg" alt="icon-phone" />
                            <p>+1-543-123-4567</p>
                        </div>

                        <div>
                            <img src="./src/images/icon-email.svg" alt="icon-email" />
                            <p>example@fylo.com</p>
                        </div>
                    </div>

                    <table>
                        <tr>
                            <td>About Us</td>
                            <td>Contact Us</td>
                        </tr>
                        <tr>
                            <td>Jobs</td>
                            <td>Terms</td>
                        </tr>
                        <tr>
                            <td>Press</td>
                            <td>Privacy</td>
                        </tr>
                        <tr>
                            <td>Blog</td>
                        </tr>
                    </table>

                    <section >
                        <ul>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </section>
                </section>

                <div>
                    <div>
                        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                            Coded by <a href="https://www.linkedin.com/in/lucaslaino/" target="_blank">Lucas Laino</a>.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer