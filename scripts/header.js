class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="navbar">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                    <a href="https://jfmarks.github.io/" class="links">Previous Student</a>
                    <a href="index.html" class="links">Home</a>
                    <a href="/aboutMe.html" class="links">About me page</a>
                    <a href="/contact.html" class="links">Contact page</a>
                    <a href="https://youtu.be/dQw4w9WgXcQ?si=QesejtEONhD1V90F" class="links">Suprise Me!</a>
                    <a href="https://mattm401.github.io/" class="links">Course Site</a>
                    <a href="https://jthensley03.github.io/" class="links">Next Student</a>
                </div>
            </div>
        </header>
    `;
    }
}
customElements.define('header-component', Header);