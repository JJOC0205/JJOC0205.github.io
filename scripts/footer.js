class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer">
                    <a href="https://www.linkedin.com/in/jonathonoconnell/"class="links">
                        <i class="fa fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/JJOC0205" class="links">
                        <i class="fa fa-github fa-2x"></i>
                    </a>
            </div>
        </footer>
    `;
    }
}
customElements.define('footer-component', Footer);