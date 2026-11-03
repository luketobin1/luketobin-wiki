(function(){
  var b=document.querySelector('[data-cite]');
  if(b){b.addEventListener('click',function(){
    var d=document.getElementById('cite-dialog'),t=document.getElementById('cite-text');
    var title=document.querySelector('h1').textContent.trim();
    var now=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
    t.textContent='\u201C'+title+'\u201D. LukeTobin.wiki. Retrieved '+now+'. '+location.origin+location.pathname;
    if(d&&d.showModal){d.showModal();}
  });}
  var p=document.querySelector('[data-print]');
  if(p){p.addEventListener('click',function(){window.print();});}
  document.addEventListener('click',function(e){
    var t=document.querySelector('details.tools[open]');
    if(t&&!t.contains(e.target)){t.removeAttribute('open');}
  });
})();

(function(){
  var IDX=[{"t": "Luke Tobin", "p": "Article", "u": "/", "k": "Luke Tobin (born 29 June 1985) is a British entrepreneur, investor and author. He founded the digital marketing agency Digital Ethos in 2016 and led it until its acquisition by the Brazilian marketing and technology company Cadastra in 2022, in a deal reported to be worth approximately £8 million.[1"}, {"t": "Career", "p": "Luke Tobin", "u": "/#career", "k": "[ edit ]"}, {"t": "Digital Ethos", "p": "Luke Tobin", "u": "/#digital-ethos", "k": "[ edit ] Main article: Digital Ethos Tobin founded Digital Ethos in 2016, reportedly with an initial investment of £100. The agency was based in Oadby, Leicestershire, and offered digital marketing services including search engine optimisation, public relations, social media and web development. By "}, {"t": "Acquisition by Cadastra", "p": "Luke Tobin", "u": "/#acquisition", "k": "[ edit ] In November 2022 Cadastra, headquartered in Porto Alegre, Brazil, announced the acquisition of Digital Ethos as its second purchase of the year, following the Brazilian e-commerce company M3. Cadastra said the deal would strengthen its European base and its foreign-currency revenues. Brazil"}, {"t": "Tobin Capital", "p": "Luke Tobin", "u": "/#tobin-capital", "k": "[ edit ] Main article: Tobin Capital Tobin founded Tobin Capital as a vehicle for minority investments in private companies, and continued to develop it alongside Digital Ethos after the sale. His publisher describes its focus as future-facing ventures in areas including female-led brands, space, su"}, {"t": "Unusual Group", "p": "Luke Tobin", "u": "/#unusual-group", "k": "[ edit ] Main article: Unusual Group Tobin launched Unusual Group in 2025. The company takes minority stakes in independent marketing and creative agencies and gives them access to shared services, operational infrastructure and AI-readiness programmes, with the stated aim of helping founders grow a"}, {"t": "Succeed", "p": "Luke Tobin", "u": "/#succeed", "k": "[ edit ] Tobin is chief executive of Succeed , a founder-led M&A firm that advises on buying, selling and merging businesses and on raising capital, with a focus on creative, marketing, MarTech and creator-economy companies. Succeed is a trading name of Unusual Group Limited."}, {"t": "A-Frame Venture Studio", "p": "Luke Tobin", "u": "/#a-frame", "k": "[ edit ] Tobin is a principal of A-Frame Venture Studio , which builds and scales consumer brands focused on health, wellbeing and human connection."}, {"t": "Writing", "p": "Luke Tobin", "u": "/#writing", "k": "[ edit ] Tobin's first book, The Power of Self-Doubt , is due to be published in hardback by Harriman House on 18 May 2027. The book argues that self-doubt can be harnessed as a driver of growth rather than suppressed. It draws on psychology and performance science alongside Tobin's own experience, "}, {"t": "Recognition", "p": "Luke Tobin", "u": "/#recognition", "k": "[ edit ] Year Recognition 2019 Digital Ethos named the UK's fastest-growing agency 2020 Winner, Great British Entrepreneur Awards 2023 Shortlisted, Service Industries Entrepreneur of the Year, Great British Entrepreneur Awards"}, {"t": "Digital Ethos", "p": "Article", "u": "/digital-ethos", "k": "Digital Ethos was a British digital marketing agency based in Oadby, Leicestershire. It was founded in 2016 by Luke Tobin and acquired in November 2022 by Cadastra, a marketing and technology company headquartered in Porto Alegre, Brazil, in a deal reported at approximately £8 million.[1][2][3] It w"}, {"t": "History", "p": "Digital Ethos", "u": "/digital-ethos#history", "k": "[ edit ] Tobin founded the agency in 2016, reportedly with £100 of initial capital. Cadastra later described its revenue as having grown exponentially over the five years before the acquisition. By 2022 the agency employed around 50 people and had worked with clients in 15 countries. The agency obta"}, {"t": "Acquisitions", "p": "Digital Ethos", "u": "/digital-ethos#acquisitions", "k": "[ edit ] Digital Ethos made two acquisitions of its own before its sale. It bought View Digital, a start-up in York, whose founder Calum Howarth joined to run a York office reporting to Tobin and brought several clients with him. It then acquired the Knutsford marketing agency Boxed Red, which it an"}, {"t": "Acquisition by Cadastra", "p": "Digital Ethos", "u": "/digital-ethos#cadastra", "k": "[ edit ] Cadastra announced the purchase in November 2022 as its second acquisition of the year, after the Brazilian e-commerce company M3. It said the deal added foreign-currency revenue and a stronger European base, and that with both acquisitions it would have almost 700 employees across seven of"}, {"t": "Services and clients", "p": "Digital Ethos", "u": "/digital-ethos#services", "k": "[ edit ] The agency offered full-service digital marketing, including search engine optimisation, public relations, social media and web development. Clients named in coverage of the Cadastra deal included the NHS, Flutterwave, JD Group and Scriven."}, {"t": "Recognition", "p": "Digital Ethos", "u": "/digital-ethos#recognition", "k": "[ edit ] Year Recognition 2019 Named the UK's fastest-growing agency 2022 B Corporation certification 2023 Founder shortlisted, Service Industries Entrepreneur of the Year, Great British Entrepreneur Awards"}, {"t": "Unusual Group", "p": "Article", "u": "/unusual-group", "k": "Unusual Group is a British company that takes minority stakes in independent marketing and creative agencies. It was founded by Luke Tobin, previously founder of Digital Ethos, and launched in 2025.[1][2] Its stated purpose is to help agency founders scale and achieve stronger exit valuations while "}, {"t": "History", "p": "Unusual Group", "u": "/unusual-group#history", "k": "[ edit ] Tobin has said the idea for Unusual Group emerged while he was building Digital Ethos, which was acquired by Cadastra in 2022. The company was launched in 2025 with an announcement positioning it as an alternative to conventional agency M&A, in which founders are often required to sell majo"}, {"t": "Business model", "p": "Unusual Group", "u": "/unusual-group#model", "k": "[ edit ] Unusual Group acquires minority stakes in agencies and connects them to shared services, operational infrastructure, AI-readiness programmes and board-level expertise. Tobin has described its work with founders as building resilience, sharpening each agency's niche and embedding technology "}, {"t": "Partner agencies", "p": "Unusual Group", "u": "/unusual-group#partners", "k": "[ edit ] Agencies announced as partners include the following. Agency Altitude Marketing DesignGuru FridaySolved Woya Digital Yugen Agency"}, {"t": "Tobin Capital", "p": "Article", "u": "/tobin-capital", "k": "Tobin Capital is the private investment vehicle of the British entrepreneur Luke Tobin. It takes minority stakes in private companies and works with their management teams on sales and operations.[1][2] CB Insights records it as founded in 2020 and based in Leicester.[2]"}, {"t": "History", "p": "Tobin Capital", "u": "/tobin-capital#history", "k": "[ edit ] Tobin developed Tobin Capital alongside Digital Ethos , and said at the time of the agency's 2022 sale to Cadastra that he would continue building it in parallel. His publisher describes its focus as future-facing ventures in areas including female-led brands, space, sustainability, deep te"}, {"t": "Investments", "p": "Tobin Capital", "u": "/tobin-capital#investments", "k": "[ edit ] CB Insights lists eight investments made between October 2021 and May 2023, across seed, Series A and private equity rounds. Among those it names is a private equity deal in Sook in May 2023."}];
  var form=document.querySelector('form.search'); if(!form) return;
  var input=form.querySelector('input[type=search]');
  form.removeAttribute('action');
  var box=document.createElement('ul'); box.className='suggest'; box.setAttribute('role','listbox'); box.hidden=true;
  form.appendChild(box);
  var results=[],active=-1;
  function score(e,q){
    var t=e.t.toLowerCase(),p=e.p.toLowerCase(),k=e.k.toLowerCase(),s=0,words=q.split(/\s+/).filter(Boolean);
    for(var i=0;i<words.length;i++){var w=words[i];
      if(t.indexOf(w)===0)s+=6;else if(t.indexOf(w)>-1)s+=4;else if(p.indexOf(w)>-1)s+=2;else if(k.indexOf(w)>-1)s+=1;else return 0;}
    var here=(e.u.split('#')[0].replace(/\/$/,'')||'/')===(location.pathname.replace(/\/index\.html$/,'/').replace(/\.html$/,'').replace(/\/$/,'')||'/');
    return s+(e.p==='Article'?1:0)+(here?2:0);
  }
  function render(){
    box.innerHTML='';
    if(!results.length){box.hidden=true;return;}
    results.forEach(function(e,i){
      var li=document.createElement('li'); li.setAttribute('role','option'); if(i===active)li.className='on';
      var a=document.createElement('a'); a.href=e.u;
      a.innerHTML='<b></b><small></small>'; a.firstChild.textContent=e.t; a.lastChild.textContent=e.p==='Article'?'Article':e.p;
      li.appendChild(a); box.appendChild(li);
    });
    box.hidden=false;
  }
  input.addEventListener('input',function(){
    var q=input.value.trim().toLowerCase(); active=-1;
    results=q?IDX.map(function(e){return [score(e,q),e];}).filter(function(x){return x[0]>0;}).sort(function(a,b){return b[0]-a[0];}).slice(0,8).map(function(x){return x[1];}):[];
    render();
  });
  input.addEventListener('keydown',function(ev){
    if(ev.key==='ArrowDown'){active=Math.min(active+1,results.length-1);render();ev.preventDefault();}
    else if(ev.key==='ArrowUp'){active=Math.max(active-1,0);render();ev.preventDefault();}
    else if(ev.key==='Escape'){box.hidden=true;}
  });
  function norm(p){return p.replace(/\/index\.html$/,'/').replace(/\/$/,'')||'/';}
  function go(e){
    var parts=e.u.split('#'),path=parts[0],hash=parts[1];
    box.hidden=true;input.value='';results=[];active=-1;input.blur();
    if(norm(path)===norm(location.pathname)){
      var el=hash?document.getElementById(hash):document.querySelector('h1');
      if(el){
        el.scrollIntoView({behavior:'smooth',block:'start'});
        if(hash){history.replaceState(null,'','#'+hash);}
        el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');
      }
    }else{location.href=e.u;}
  }
  box.addEventListener('click',function(ev){
    var a=ev.target.closest('a');if(!a)return;
    var i=[].indexOf.call(box.querySelectorAll('a'),a);
    if(results[i]){ev.preventDefault();go(results[i]);}
  });
  form.addEventListener('submit',function(ev){
    ev.preventDefault();
    var q=input.value.trim();
    if(q&&!results.length){input.dispatchEvent(new Event('input'));}
    var e=results[active>=0?active:0];
    if(e){go(e);}else if(q){box.innerHTML='<li class="none">No matching pages or sections</li>';box.hidden=false;}
  });
  input.addEventListener('focus',function(){if(input.value.trim())input.dispatchEvent(new Event('input'));});
  var h=location.hash&&document.getElementById(location.hash.slice(1));
  if(h){h.classList.add('flash');}
  document.addEventListener('click',function(ev){if(!form.contains(ev.target))box.hidden=true;});
})();
