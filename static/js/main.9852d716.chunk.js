(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(58)},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(19),o=t.n(i),s=(t(28),t(22)),c=t(3),l=t(4),u=t(6),d=t(5),m=t(7),p=(t(29),"Afghanistan\nAlbania\nAlgeria\nAndorra\nAngola\nAntigua & Deps\nArgentina\nArmenia\nAustralia\nAustria\nAzerbaijan\nBahamas\nBahrain\nBangladesh\nBarbados\nBelarus\nBelgium\nBelize\nBenin\nBhutan\nBolivia\nBosnia Herzegovina\nBotswana\nBrazil\nBrunei\nBulgaria\nBurkina\nBurundi\nCambodia\nCameroon\nCanada\nCape Verde\nCentral African Rep\nChad\nChile\nChina\nColombia\nComoros\nCongo\nCongo {Democratic Rep}\nCosta Rica\nCroatia\nCuba\nCyprus\nCzech Republic\nDenmark\nDjibouti\nDominica\nDominican Republic\nEast Timor\nEcuador\nEgypt\nEl Salvador\nEquatorial Guinea\nEritrea\nEstonia\nEthiopia\nFiji\nFinland\nFrance\nGabon\nGambia\nGeorgia\nGermany\nGhana\nGreece\nGrenada\nGuatemala\nGuinea\nGuinea-Bissau\nGuyana\nHaiti\nHonduras\nHungary\nIceland\nIndia\nIndonesia\nIran\nIraq\nIreland {Republic}\nIsrael\nItaly\nIvory Coast\nJamaica\nJapan\nJordan\nKazakhstan\nKenya\nKiribati\nKorea North\nKorea South\nKosovo\nKuwait\nKyrgyzstan\nLaos\nLatvia\nLebanon\nLesotho\nLiberia\nLibya\nLiechtenstein\nLithuania\nLuxembourg\nMacedonia\nMadagascar\nMalawi\nMalaysia\nMaldives\nMali\nMalta\nMarshall Islands\nMauritania\nMauritius\nMexico\nMicronesia\nMoldova\nMonaco\nMongolia\nMontenegro\nMorocco\nMozambique\nMyanmar, {Burma}\nNamibia\nNauru\nNepal\nNetherlands\nNew Zealand\nNicaragua\nNiger\nNigeria\nNorway\nOman\nPakistan\nPalau\nPanama\nPapua New Guinea\nParaguay\nPeru\nPhilippines\nPoland\nPortugal\nQatar\nRomania\nRussian Federation\nRwanda\nSt Kitts & Nevis\nSt Lucia\nSaint Vincent & the Grenadines\nSamoa\nSan Marino\nSao Tome & Principe\nSaudi Arabia\nSenegal\nSerbia\nSeychelles\nSierra Leone\nSingapore\nSlovakia\nSlovenia\nSolomon Islands\nSomalia\nSouth Africa\nSouth Sudan\nSpain\nSri Lanka\nSudan\nSuriname\nSwaziland\nSweden\nSwitzerland\nSyria\nTaiwan\nTajikistan\nTanzania\nThailand\nTogo\nTonga\nTrinidad & Tobago\nTunisia\nTurkey\nTurkmenistan\nTuvalu\nUganda\nUkraine\nUnited Arab Emirates\nUnited Kingdom\nUnited States\nUruguay\nUzbekistan\nVanuatu\nVatican City\nVenezuela\nVietnam\nYemen\nZambia\nZimbabwe".split("\n")),g=(t(30),function(e){return r.a.createElement("div",{className:"errorMessage"},r.a.createElement("p",null,e.error))}),h=(t(31),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(d.a)(n).call(this,e))).onTextChange=function(e){var n=t.props.countries,a=e.target.value.replace(/[&\/\\#,+()$~%.'":*?<>{}\[\]]/g,"");localStorage.setItem("inputValue",a);var r=[];if(a.length>0){var i=new RegExp("^".concat(a),"i");r=n.sort().filter(function(e){return i.test(e)})}else t.setState({selected:-1});t.setState(function(){return{suggestions:r.slice(0,3),text:a}})},t.suggestionSelected=function(){t.props.getCities(t.state.text),t.setState(function(){return{suggestions:[],selected:-1}}),localStorage.setItem("inputValue",t.state.text)},t.handleArrows=function(e){13===e.keyCode&&t.suggestionSelected(),38!==e.keyCode?40===e.keyCode&&t.setState(function(e){return{selected:e.selected+1===e.suggestions.length?e.selected:e.selected+1,text:t.state.suggestions[e.selected+1===e.suggestions.length?e.selected:e.selected+1]}}):t.setState(function(e){return{selected:e.selected>0?e.selected-1:e.selected,text:t.state.suggestions[e.selected>0?e.selected-1:e.selected]}})},t.handleMouse=function(e,n){t.setState({selected:e,text:n})},t.state={suggestions:[],text:"",selected:-1},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("inputValue");this.setState(function(){return{text:e}})}},{key:"renderSuggestions",value:function(){var e=this,n=this.state.suggestions;return 0===n.length?null:r.a.createElement("ul",null,n.map(function(n,t){return r.a.createElement("li",{onMouseEnter:function(){return e.handleMouse(t,n)},className:e.state.selected===t?"selected":"",key:n,onClick:e.suggestionSelected},n)}))}},{key:"render",value:function(){var e=this.state.text,n=this.props.serverError;return r.a.createElement("div",{className:"component-wrapper"},r.a.createElement("div",{className:"page-info"},r.a.createElement("h1",null,"Pollution search"),r.a.createElement("span",null,r.a.createElement("p",null,"Type in country name and click 'Get cities' to check 10 most polluted cities in it"))),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"inputs-wrapper"},r.a.createElement("input",{autoComplete:"off",type:"text",name:"country",placeholder:"Country",value:e||"",onChange:this.onTextChange,onKeyDown:this.handleArrows}),this.renderSuggestions()),n&&r.a.createElement(g,{error:n}),r.a.createElement("button",{value:"Get cities",onClick:this.suggestionSelected},"Get Cities")))}}]),n}(a.Component)),v=(t(32),function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("b",null,"Demo version notification")),r.a.createElement("div",{className:"modal-content"},e.modalText),r.a.createElement("button",{onClick:e.click,className:"modal-button"},"Confirm"))}),f=(t(33),t(9)),y=t(20),E=t(21),b=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={visible:!1},t.descriptionTogglerHandler=function(){t.setState({visible:!t.state.visible})},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){f.b.add(E.a);var e=this.props,n=e.city,t=e.description,a="output-record description";return this.state.visible&&(a="output-record description open"),r.a.createElement("div",{className:"output-record"},r.a.createElement("div",{className:"output-record__row-wrapper"},r.a.createElement("div",{className:"output-record__city"},r.a.createElement("b",null,"City:")," ",n),r.a.createElement("div",{className:"output-record__button"},r.a.createElement("button",{onClick:this.descriptionTogglerHandler},r.a.createElement(y.a,{icon:"plus-square"})))),r.a.createElement("div",{className:a},t))}}]),n}(a.Component),S=(t(38),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),C=(t(39),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,r.a.createElement("b",null,"10 most polluted cities")))}),k=t(10),w=t.n(k),N=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getCountry",value:function(){return w.a.get("https://api.openaq.org/v1/countries")}},{key:"getCities",value:function(e){return w.a.get("https://api.openaq.org/v1/cities?country=".concat(e,"&order_by=count&sort=desc&limit=10"))}},{key:"getDescriptions",value:function(e){return w.a.get("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&category=city&redirects&origin=*&titles=".concat(e))}}]),e}()),M=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={country:"",error:!1,cities:[],modalError:"",serverError:"",countries:[]},t.getCities=function(e){t.setState({cities:[],serverError:"",modalError:""});var n=e.charAt(0).toUpperCase()+e.slice(1),a=t.state.countries.find(function(e){return e.name===n});a&&e?new RegExp(/spain|germany|poland|france/,"i").test(n)?t.state.modalError||N.getCities(a.code).then(function(e){var n=e.data.results,a=n.map(function(e){return N.getDescriptions(e.city).then(function(e){return e.data.query.pages[Object.keys(e.data.query.pages)[0]].extract})});Promise.all(a).then(function(e){t.setState({cities:n.map(function(n,t){return Object(s.a)({},n,{description:e[t]?e[t]:"No description on Wiki"})})})})}):t.setState({modalError:"This is demo version of our app. It only works for: Spain, Poland, Germany and France. Feel free to check most polluted cities in those countries"}):t.setState({serverError:"Wrong country provided..."})},t.modalCloseHandler=function(){t.setState({modalError:""})},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;N.getCountry().then(function(n){e.setState({countries:n.data.results})}).catch(function(n){e.setState({serverError:n.toString()})})}},{key:"render",value:function(){var e=this.state,n=e.serverError,t=e.modalError,a=e.cities;return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),t&&r.a.createElement(v,{modalText:t,click:this.modalCloseHandler}),t&&r.a.createElement(S,{click:this.modalCloseHandler}),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(h,{serverError:n,getCities:this.getCities,getInformation:this.getInformation,countries:p})),a.length>0&&r.a.createElement("div",{className:"output-wrapper"},r.a.createElement("h2",null,"Results"),a.map(function(e){var n=e.city,t=e.description;return r.a.createElement(b,{key:n,city:n,description:t})})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.9852d716.chunk.js.map