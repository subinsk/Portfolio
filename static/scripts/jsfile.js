//TODO: Folgendes in das HTML Dokument einpflegen: <script src="subin-portfolio.js"></script> und den tag mit in die custom tags aufnehmen

    const template = document.createElement('template'); 
    template.innerHTML = `
    <link rel="stylesheet" href="subinportfolio-style.css">
    
    <div id="Rectangle2"></div>
<div id="nail-gilfanov-TuyneoFacJg-unsplash">
<div id="Rectangle4">
<label id="Contact"'>Contact</label>
</div>
<div>
<div>
<label id="HeyThere!I'mSubinSK."'>Hey There! I'm Subin S K.</label>
</div>
<div>
<label id="Softwaredeveloper.
Passionateaboutwebandmobileapplication.



"'>Software developer.Passionate about web and mobile application.<br><br><br> <br><br></label>
</div>
<div id="dsBuffer"></div>
</div>
</div>
<div id="safar-safarov-MSN8TFhJ0is-unsplash">
<label id="Skills"'>Skills</label>
<hr id="Line1">
<div id="Rectangle6">
<div id="LogoPortfolio"></div>
</div>
</div>
    `;

    class Subinportfolio extends HTMLElement {
        constructor() {
            super();
    
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    function(){
    window.alert("dummy-function. Please give me a good name and do something great here!");
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#id-name').addEventListener('click',() => this.function());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#id-name').removeEventListener();
    }
}

customElements.define('subin-portfolio', Subinportfolio);