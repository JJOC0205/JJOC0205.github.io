class Header extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <style>
            nav{
                background-color: rgb(250, 249, 250);
                text-align: end;
                overflow: auto;
                height: 60px;
            }
            .links{
                color: #5649e9;
                font-size: 30px;
                text-decoration: none;
                padding-top: 25px;
                margin-left: 25px;
                margin-right: 15px;
            }
            .links:hover{
                color: #e95454;
            }
        </style>
        <header>
            <nav>
                <div class="row">
                    <a href="https://jfmarks.github.io/" class="links">Previous Student</a>
                    <a href="index.html" class="links">Home</a>
                    <a href="/aboutMe.html" class="links">About me page</a>
                    <a href="https://mattm401.github.io/" class="links">Course Site</a>
                    <a href="https://jthensley03.github.io/" class="links">Next Student</a>
                </div>
            </nav>
        </header>
    `;
    }
}
customElements.define('header-component', Header);