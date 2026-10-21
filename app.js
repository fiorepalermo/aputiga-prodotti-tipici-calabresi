// Terra di Calabria — front-end demo (HTML/CSS/JS, no backend)
const PRODUCTS = [
  {id:1, name:"'Nduja di Spilinga DOP 500g", cat:"salumi", price:14.90, emoji:"🌶️", desc:"La regina calabrese: cremosa, piccante, da spalmare.", rating:5, reviews:412, pop:99},
  {id:2, name:"Cipolla Rossa di Tropea IGP 1kg", cat:"salumi", price:7.90, emoji:"🧅", desc:"Dolce e croccante, treccia artigianale.", rating:5, reviews:328, pop:95},
  {id:3, name:"Olio EVO Carolea DOP 750ml", cat:"olio", price:18.50, emoji:"🫒", desc:"Spremuto a freddo entro 4h, acidità <0,2°.", rating:5, reviews:510, pop:98},
  {id:4, name:"Bergamotto di Reggio — Marmellata 340g", cat:"dolci", price:9.90, emoji:"🍋", desc:"L'agrume unico al mondo, presìdio Slow Food.", rating:4, reviews:187, pop:88},
  {id:5, name:"Peperoncino Crusco & Diavolicchio 100g", cat:"olio", price:6.50, emoji:"🌶️", desc:"Mix piccante essiccato al sole della Sila.", rating:4, reviews:240, pop:85},
  {id:6, name:"Liquirizia Amarelli Favette 100g", cat:"dolci", price:5.90, emoji:"🍬", desc:"Liquirizia di Rossano dal 1731, DOP.", rating:5, reviews:390, pop:90},
  {id:7, name:"Caciocavallo Silano DOP 1,2kg", cat:"formaggi", price:24.90, emoji:"🧀", desc:"Stagionato 60gg in grotta, latte vaccino.", rating:5, reviews:156, pop:87},
  {id:8, name:"Fileja Artigianale al Bergamotto 500g", cat:"salumi", price:4.90, emoji:"🍝", desc:"Pasta di semola trafilata al bronzo.", rating:4, reviews:203, pop:82},
  {id:9, name:"Cirò Rosso Classico DOC 750ml", cat:"vino", price:12.90, emoji:"🍷", desc:"Gaglioppo in purezza, cantina bio dal 1958.", rating:5, reviews:275, pop:89},
  {id:10, name:"Fichi di Cosenza DOP al Cioccolato", cat:"dolci", price:11.90, emoji:"🍫", desc:"Fichi secchi farciti, ricoperti fondente 70%.", rating:5, reviews:168, pop:84},
  {id:11, name:"Tonno di Pizzo Filetti in Olio EVO", cat:"salumi", price:13.50, emoji:"🐟", desc:"Lavorato a mano entro 24h dalla pesca.", rating:4, reviews:142, pop:80},
  {id:12, name:"Miele di Sulla e Agrumi 400g", cat:"dolci", price:10.90, emoji:"🍯", desc:"Apicoltura nomade sull'Aspromonte.", rating:5, reviews:119, pop:78},
];
const REVIEWS = [
  {t:"La 'nduja è arrivata a Berlino in 3 giorni, ancora fresca. Migliore di quella del ristorante sotto casa.", a:"Marco R. — Berlino 🇩🇪", s:5},
  {t:"Ordino per il mio ristorante a Londra: listino B2B chiaro, fattura UE senza problemi, qualità costante.", a:"Sofia L. — Ristoratrice, Londra 🇬🇧", s:5},
  {t:"Box degustazione regalato a mio padre emigrato in Canada. Ha pianto. Grazie di cuore.", a:"Giulia P. — Toronto 🇨🇦", s:5},
];
const RATES = {EUR:{r:1,s:"€",l:"it-IT"}, USD:{r:1.08,s:"$",l:"en-US"}, GBP:{r:0.85,s:"£",l:"en-GB"}};
const I18N = {
  it:{topbar:"Spedizione internazionale gratuita sopra €89 • Area B2B attiva",nav_shop:"Catalogo",nav_b2b:"B2B / Ingrosso",nav_prod:"Produttori",nav_rev:"Recensioni",nav_ship:"Spedizioni",hero_pill:"Retail • Gourmet • B2B Ingrosso",hero_title:"La Calabria autentica, dal produttore a casa tua.",hero_sub:"'Nduja di Spilinga, Cipolla di Tropea, Bergamotto di Reggio, Olio EVO. Selezionati da 24 piccoli produttori, spediti in 40+ paesi in 48h.",hero_cta1:"Esplora il catalogo",hero_cta2:"Accedi al listino B2B",stat1:"produttori",stat3:"paesi serviti",t1:"Spedizione internazionale tracciata",t2:"Checkout rapido e sicuro",t3:"Listini B2B dedicati -20%",t4:"Filiera corta certificata",cat_title:"Prodotti tipici, filtrabili per gusto.",b2b_active:"Modalità B2B attiva: vedi prezzi ingrosso scontati del 20%",b2b_title:"Listini dedicati per ristoratori, distributori e boutique.",b1:"Sconto 20% su tutto il catalogo + fasce volume fino a -35%",b2:"Ordine minimo €149, pallet e consegne programmate",b3:"Fatturazione UE con reverse charge, documenti export",b4:"Account manager dedicato e campionatura gratuita",b2b_login:"Accedi all'area riservata",b2b_table:"Estratto listino B2B",prod_title:"Le storie dei produttori locali.",rev_title:"2.400+ recensioni verificate.",ship_title:"Spedizioni internazionali integrate.",ship_sub:"Calcola in tempo reale costo e tempi per la tua zona. Imballo termico gratuito per freschi e formaggi.",fast_title:"Checkout rapido ⚡",fast_cta:"Vai al checkout rapido",cart:"Carrello"},
  en:{topbar:"Free international shipping over €89 • B2B area live",nav_shop:"Shop",nav_b2b:"B2B / Wholesale",nav_prod:"Producers",nav_rev:"Reviews",nav_ship:"Shipping",hero_pill:"Retail • Gourmet • B2B Wholesale",hero_title:"Authentic Calabria, from producer to your door.",hero_sub:"'Nduja di Spilinga, Tropea Onion, Reggio Bergamot, EVO Oil. Sourced from 24 small producers, shipped to 40+ countries in 48h.",hero_cta1:"Browse the catalog",hero_cta2:"Open the B2B price list",stat1:"producers",stat3:"countries served",t1:"Tracked international shipping",t2:"Fast & secure checkout",t3:"Dedicated B2B lists -20%",t4:"Certified short supply chain",cat_title:"Typical products, filter by taste.",b2b_active:"B2B mode on: wholesale prices 20% off",b2b_title:"Dedicated lists for restaurants, distributors & boutiques.",b1:"20% off the whole catalog + volume tiers up to -35%",b2:"€149 MOQ, pallets and scheduled deliveries",b3:"EU invoicing with reverse charge, export docs",b4:"Dedicated account manager & free samples",b2b_login:"Open the reserved area",b2b_table:"B2B list excerpt",prod_title:"Stories of local producers.",rev_title:"2,400+ verified reviews.",ship_title:"Integrated international shipping.",ship_sub:"Real-time cost & time estimate for your zone. Free thermal packaging for fresh goods.",fast_title:"Fast checkout ⚡",fast_cta:"Go to fast checkout",cart:"Cart"}
};

let state = {lang:"it", cur:"EUR", cart:JSON.parse(localStorage.getItem("tc_cart")||"[]"), b2b:localStorage.getItem("tc_b2b")==="1"};
const $ = s => document.querySelector(s);

function fmt(eur){
  const c = RATES[state.cur];
  const v = eur * c.r;
  return new Intl.NumberFormat(c.l,{style:"currency",currency:state.cur}).format(v);
}
function b2bPrice(p){ return +(p*0.8).toFixed(2); }
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2200); }
function save(){ localStorage.setItem("tc_cart", JSON.stringify(state.cart)); localStorage.setItem("tc_b2b", state.b2b?"1":"0"); }

function renderProducts(){
  const q = $("#searchInput").value.toLowerCase();
  const cat = $("#catFilter").value;
  const sort = $("#sortFilter").value;
  let list = PRODUCTS.filter(p => (cat==="all"||p.cat===cat) && p.name.toLowerCase().includes(q));
  if(sort==="asc") list.sort((a,b)=>a.price-b.price);
  else if(sort==="desc") list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>b.pop-a.pop);
  $("#productGrid").innerHTML = list.map(p=>{
    const price = state.b2b ? b2bPrice(p.price) : p.price;
    const oldP = state.b2b ? `<span class="old-price">${fmt(p.price)}</span><span class="b2b-price">B2B ${fmt(price)}</span>` : "";
    return `<article class="product">
      <div class="product-img">${p.emoji}</div>
      <div class="product-body">
        <span class="product-cat">${p.cat}</span>
        <h3>${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="stars">${"★".repeat(p.rating)}${"☆".repeat(5-p.rating)} <span class="muted">(${p.reviews})</span></div>
        <div class="price-row"><span class="price">${fmt(price)}</span>${oldP}</div>
        <button class="btn btn-primary add-btn" onclick="addToCart(${p.id})">+ ${state.lang==="it"?"Aggiungi":"Add"}</button>
      </div></article>`;
  }).join("") || `<p class="muted">Nessun prodotto trovato.</p>`;
  $("#b2bBanner").classList.toggle("hidden", !state.b2b);
}

function renderB2BTable(){
  $("#b2bTable tbody").innerHTML = PRODUCTS.slice(0,6).map(p=>
    `<tr><td>${p.emoji} ${p.name}</td><td>${fmt(p.price)}</td><td>${state.b2b?fmt(b2bPrice(p.price)):"🔒"}</td><td>${p.price>15?6:12} pz</td></tr>`).join("");
  $("#b2bLockMsg").style.display = state.b2b ? "none" : "block";
  $("#b2bBtn").textContent = state.b2b ? "✅ B2B attivo" : "B2B Login";
}

function renderReviews(){
  $("#reviewsGrid").innerHTML = REVIEWS.map(r=>`<div class="review"><div>${"★".repeat(r.s)}</div><p>"${r.t}"</p><strong>${r.a}</strong></div>`).join("");
}

function renderCart(){
  const box = $("#cartItems");
  $("#cartCount").textContent = state.cart.reduce((s,i)=>s+i.qty,0);
  if(!state.cart.length){ box.innerHTML = `<p class="muted">Il carrello è vuoto. Scopri le eccellenze calabresi 👆</p>`; $("#cartTotal").textContent = fmt(0); return; }
  box.innerHTML = state.cart.map(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id);
    const unit = state.b2b ? b2bPrice(p.price) : p.price;
    return `<div class="cart-item"><span class="em">${p.emoji}</span>
      <div><strong>${p.name}</strong><br><small>${fmt(unit)} cad.</small></div>
      <div class="qty"><button onclick="chQty(${p.id},-1)">−</button><b>${i.qty}</b><button onclick="chQty(${p.id},1)">+</button></div></div>`;
  }).join("");
  const tot = state.cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(state.b2b?b2bPrice(p.price):p.price)*i.qty;},0);
  $("#cartTotal").textContent = fmt(tot);
}

window.addToCart = id => {
  const f = state.cart.find(i=>i.id===id);
  f ? f.qty++ : state.cart.push({id, qty:1});
  save(); renderCart(); toast(state.lang==="it"?"Aggiunto al carrello ✅":"Added to cart ✅");
  openCart(true);
};
window.chQty = (id,d) => {
  const f = state.cart.find(i=>i.id===id); if(!f) return;
  f.qty += d; if(f.qty<=0) state.cart = state.cart.filter(i=>i.id!==id);
  save(); renderCart(); renderCoStep1();
};

function openCart(open){
  $("#cartDrawer").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open || $("#checkoutModal").classList.contains("open") || $("#b2bModal").classList.contains("open"));
}
function openModal(id, open){
  $(id).classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open || $("#cartDrawer").classList.contains("open"));
}

// Checkout
function cartTotalEur(){
  return state.cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(state.b2b?b2bPrice(p.price):p.price)*i.qty;},0);
}
function renderCoStep1(){
  const ship = parseFloat($("#fShip").value || 8.9);
  const sub = cartTotalEur();
  const free = sub >= 89 && ship <= 14.9;
  $("#coStep1").innerHTML = state.cart.length
    ? state.cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);const u=state.b2b?b2bPrice(p.price):p.price;
      return `<div class="row"><span>${p.emoji} ${p.name} ×${i.qty}</span><strong>${fmt(u*i.qty)}</strong></div>`;}).join("")
      + `<div class="row muted"><span>Spedizione ${free?"(GRATIS 🎉)":""}</span><span>${free?fmt(0):fmt(ship)}</span></div>`
    : `<p class="muted">Carrello vuoto.</p>`;
  $("#coTotal").textContent = fmt(sub + (free?0:ship));
}

// Events
$("#cartOpen").onclick = ()=>openCart(true);
$("#cartClose").onclick = ()=>openCart(false);
$("#overlay").onclick = ()=>{openCart(false);openModal("#b2bModal",false);openModal("#checkoutModal",false);};
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>{openModal("#b2bModal",false);openModal("#checkoutModal",false);openCart(false);});
const openB2B = ()=>{ $("#b2bLogout").classList.toggle("hidden", !state.b2b); openModal("#b2bModal", true); };
$("#b2bBtn").onclick = openB2B; $("#b2bBtn2").onclick = openB2B;
$("#burger").onclick = ()=>$("#mainNav").classList.toggle("open");

$("#b2bLogin").onclick = ()=>{
  if($("#b2bEmail").value==="b2b@calabriafood.it" && $("#b2bPass").value==="ingrosso2026"){
    state.b2b=true; save(); renderProducts(); renderB2BTable(); renderCart();
    $("#b2bLogout").classList.remove("hidden"); openModal("#b2bModal",false); toast("Benvenuto! Listino B2B sbloccato ✅");
  } else $("#b2bError").classList.remove("hidden");
};
$("#b2bLogout").onclick = ()=>{ state.b2b=false; save(); renderProducts(); renderB2BTable(); renderCart(); openModal("#b2bModal",false); };

$("#downloadListino").onclick = ()=>{
  if(!state.b2b) return toast("Accedi come B2B per scaricare il listino 🔒");
  const csv = "prodotto;retail_eur;b2b_eur;moq\n"+PRODUCTS.map(p=>`${p.name};${p.price};${b2bPrice(p.price)};${p.price>15?6:12}`).join("\n");
  const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"})); a.download="listino-b2b-terra-di-calabria.csv"; a.click();
};

$("#checkoutBtn").onclick = $("#fastCheckout").onclick = ()=>{
  if(!state.cart.length) return toast("Il carrello è vuoto 🛒");
  openCart(false); openModal("#checkoutModal",true);
  $("#coStep1").classList.remove("hidden"); $("#coStep2").classList.add("hidden"); $("#coStep3").classList.add("hidden"); $("#coFoot1").style.display="block";
  $("#st1").classList.add("active"); $("#st2").classList.remove("active"); $("#st3").classList.remove("active");
  renderCoStep1();
};
$("#toStep2").onclick = ()=>{ $("#coStep1").classList.add("hidden"); $("#coFoot1").style.display="none"; $("#coStep2").classList.remove("hidden"); $("#st2").classList.add("active"); };
$("#toStep3").onclick = ()=>{
  if(!$("#fName").value || !$("#fEmail").value.includes("@") || !$("#fAddr").value) return toast("Compila nome, email e indirizzo ⚠️");
  const ship=parseFloat($("#fShip").value); const sub=cartTotalEur(); const free=sub>=89&&ship<=14.9;
  $("#orderNum").textContent = "TC-2026-"+Math.floor(1000+Math.random()*9000);
  $("#orderTotal").textContent = fmt(sub+(free?0:ship));
  $("#coStep2").classList.add("hidden"); $("#coStep3").classList.remove("hidden"); $("#st3").classList.add("active");
  state.cart=[]; save(); renderCart();
};
$("#fShip").onchange = renderCoStep1;

// Filters / selectors / shipping calc
["searchInput","catFilter","sortFilter"].forEach(id=>$("#"+id).addEventListener("input", renderProducts));
$("#langSelect").onchange = e=>{
  state.lang=e.target.value; document.documentElement.lang=state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ const k=el.dataset.i18n; if(I18N[state.lang][k]) el.textContent=I18N[state.lang][k]; });
  renderProducts(); renderCart();
};
$("#currencySelect").onchange = e=>{ state.cur=e.target.value; renderProducts(); renderB2BTable(); renderCart(); renderCoStep1(); calcShip(); };
function calcShip(){
  const base=parseFloat($("#shipZone").value), w=parseFloat($("#shipWeight").value||1);
  $("#shipResult").textContent = fmt(base + Math.max(0,w-2)*2.5);
}
$("#shipZone").onchange=calcShip; $("#shipWeight").oninput=calcShip;
$("#nlBtn").onclick=()=>{ if(!$("#nlInput").value.includes("@")) return toast("Inserisci un'email valida ⚠️"); toast("Iscrizione ok! Codice: CALABRIA10 🎉"); $("#nlInput").value=""; };

// Init
renderProducts(); renderB2BTable(); renderReviews(); renderCart(); calcShip(); renderCoStep1();
