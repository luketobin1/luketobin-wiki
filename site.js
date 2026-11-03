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
