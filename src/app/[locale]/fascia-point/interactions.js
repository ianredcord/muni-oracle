export function initializeFasciaPoint(root){
    if(!root || root.dataset.initialized)return function(){};
    root.dataset.initialized='true';
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals=root.querySelectorAll('.fp-reveal');
    let observer;
    if('IntersectionObserver' in window&&!reduced){
      root.classList.add('fp-enhanced');
      observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('fp-visible');observer.unobserve(entry.target)}}),{threshold:.08});
      reveals.forEach(element=>observer.observe(element));
    }
    const progress=root.querySelector('.fp-progress');
    let frame=0;
    const update=()=>{frame=0;const total=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+Math.max(0,Math.min(1,total?window.scrollY/total:0))+')'};
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(update)};
    window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);update();
    const steps=[
      ['OBSERVE','先記住此刻的感覺。','從皮膚與筋膜的感覺學習出發，選一個熟悉、舒適的動作，留意接觸感、動作與呼吸，記錄體驗前的狀態。'],
      ['EXPERIENCE','在指導下體驗貼片。','依正式產品指南與課程指導體驗貼片。以皮膚與筋膜為觀察脈絡，配合自然呼吸與舒適動作，留意自己的感受。'],
      ['REFLECT','回到同一個動作。','再做一次剛才的動作，留意輕重、流暢度與呼吸的感覺。有沒有不同，都值得記錄。']
    ];
    const tabs=Array.from(root.querySelectorAll('[role=tab]'));
    const panel=root.querySelector('#fp-step-panel');
    const select=(index,focus)=>{
      tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});
      panel.setAttribute('aria-labelledby',tabs[index].id);panel.dataset.current=String(index);
      panel.querySelector('.fp-art-word').textContent=steps[index][0];
      panel.querySelector('.fp-step-count').textContent='0'+(index+1)+' / 03';
      panel.querySelector('h3').textContent=steps[index][1];panel.querySelector('.fp-step-text p').textContent=steps[index][2];
      const text=panel.querySelector('.fp-step-text');text.classList.remove('fp-changing');void text.offsetWidth;text.classList.add('fp-changing');
      if(focus)tabs[index].focus();
    };
    const conceptButtons=Array.from(root.querySelectorAll('[data-concept]'));
    const conceptPanels=Array.from(root.querySelectorAll('.fp-concept-panel'));
    const regions=[
      ['01 / NECK & SHOULDERS','從肩頸，觀察位置與連動。','進入觀察室後，旋轉人體至側面或背面，對照頸部、肩胛與上背的位置。','觀察筆記：舒適地轉頭時，兩側的感覺有什麼不同？','肩頸'],
      ['02 / TRUNK','從軀幹，觀察呼吸與轉動。','進入觀察室後，對照胸廓、脊柱與骨盆，從正面與背面理解軀幹的結構關係。','觀察筆記：自然呼吸時，胸廓與腹部的起伏在哪裡最清楚？','軀幹'],
      ['03 / LOWER LIMBS','從下肢，觀察支撐與移動。','進入觀察室後，沿髖、膝至踝部觀察，對照下肢結構與經絡循行的不同視角。','觀察筆記：舒適站立時，兩腳的承重感有什麼不同？','下肢']
    ];
    const explore=e=>{
      const concept=e.target.closest('[data-concept]');
      if(concept){const n=Number(concept.dataset.concept);conceptButtons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===n)));conceptPanels.forEach((p,i)=>p.hidden=i!==n);}
      const region=e.target.closest('[data-region]');
      if(region){const n=Number(region.dataset.region),data=regions[n],box=root.querySelector('#fp-region-content');root.querySelectorAll('[data-region]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===n)));box.querySelector('.fp-region-label').textContent=data[0];box.querySelector('h4').textContent=data[1];box.querySelector('.fp-region-description').textContent=data[2];box.querySelector('.fp-region-prompt').textContent=data[3];box.querySelector('a').textContent='進入 3D，探索'+data[4]+' ↗';}
    };
    root.addEventListener('click',explore);
    const gallery=root.querySelector('.fp-gallery-main');
    const dialog=root.querySelector('.fp-product-dialog');
    const galleryClick=e=>{
      const choice=e.target.closest('.fp-gallery-choices button');
      if(choice){const img=choice.querySelector('img');gallery.src=img.src;gallery.alt=img.alt;root.querySelectorAll('.fp-gallery-choices button').forEach(b=>b.setAttribute('aria-pressed',String(b===choice)))}
      if(e.target.closest('.fp-gallery-open')){const img=dialog.querySelector('img');img.src=gallery.src;img.alt=gallery.alt;dialog.showModal()}
      if(e.target.closest('.fp-dialog-close')||e.target===dialog)dialog.close();
    };
    root.addEventListener('click',galleryClick);
    const menu=root.querySelector('.fp-menu-toggle');
    const nav=root.querySelector('.fp-nav');
    const toggleMenu=open=>{menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('fp-open',open)};
    const jump=(hash,smooth)=>{
      const target=document.getElementById(hash.slice(1));
      if(!target||!root.contains(target))return;
      if(target.matches('details'))target.open=true;
      let parent=target.parentElement;
      while(parent&&parent!==root){if(parent.matches('details'))parent.open=true;parent=parent.parentElement}
      target.scrollIntoView({behavior:smooth&&!reduced?'smooth':'instant'});
    };
    const click=e=>{
      if(e.target.closest('.fp-menu-toggle'))toggleMenu(menu.getAttribute('aria-expanded')!=='true');
      const tab=e.target.closest('[role=tab]');if(tab&&root.contains(tab))select(tabs.indexOf(tab),false);
      const link=e.target.closest('a[href^="#fp-"]');
      if(link&&root.contains(link)){
        const hash=link.getAttribute('href');
        const target=document.getElementById(hash.slice(1));
        if(target&&root.contains(target)){
          e.preventDefault();toggleMenu(false);jump(hash,true);history.replaceState(null,'',hash);
          // Keep keyboard navigation at the selected chapter after the mobile menu closes.
          if(link.classList.contains('fp-skip')||nav.contains(link)){
            target.tabIndex=-1;target.focus({preventScroll:true});
          }
        }
      }
    };
    const key=e=>{const current=tabs.indexOf(e.target);if(current<0)return;let next=current;if(['ArrowDown','ArrowRight'].includes(e.key))next=(current+1)%tabs.length;else if(['ArrowUp','ArrowLeft'].includes(e.key))next=(current+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();select(next,true)};
    const orientation=()=>{root.querySelector('[role=tablist]').setAttribute('aria-orientation',window.innerWidth<=760?'horizontal':'vertical');if(window.innerWidth>900)toggleMenu(false)};orientation();window.addEventListener('resize',orientation);
    const escape=e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){toggleMenu(false);menu.focus()}};
    const outside=e=>{if(!e.target.closest('.fp-header'))toggleMenu(false)};
    const hashchange=()=>jump(window.location.hash,false);
    const hashFrame=requestAnimationFrame(hashchange);
    document.addEventListener('keydown',escape);document.addEventListener('click',outside);window.addEventListener('hashchange',hashchange);
    root.addEventListener('click',click);root.addEventListener('keydown',key);
    return ()=>{root.removeEventListener('click',explore);root.removeEventListener('click',galleryClick);if(dialog.open)dialog.close();observer?.disconnect();window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);window.removeEventListener('resize',orientation);root.removeEventListener('click',click);root.removeEventListener('keydown',key);document.removeEventListener('keydown',escape);document.removeEventListener('click',outside);window.removeEventListener('hashchange',hashchange);cancelAnimationFrame(hashFrame);cancelAnimationFrame(frame);root.classList.remove('fp-enhanced');delete root.dataset.initialized};
  }
