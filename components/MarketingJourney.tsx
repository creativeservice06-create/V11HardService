'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeCheck, Check, CheckCircle2, Droplets, MousePointerClick, Phone, Search, Star, UserRound, Wrench } from 'lucide-react';

const steps = [
  {
    kicker: 'INTENȚIE',
    title: 'Clientul caută exact serviciul de care are nevoie.',
    text: 'Totul pornește de la o nevoie reală. În exemplul nostru, clientul caută „instalator bucurești” și vede imediat rezultate relevante, inclusiv afacerea promovată.',
  },
  {
    kicker: 'VIZIBILITATE',
    title: 'Afacerea ta apare în Google în momentul potrivit.',
    text: 'Campania este construită astfel încât anunțul și prezența companiei să fie vizibile când intenția de contact este ridicată, cu mesaj, recenzii și acțiuni clare.',
  },
  {
    kicker: 'DESTINAȚIE',
    title: 'Clientul intră pe un site care confirmă că a ajuns unde trebuie.',
    text: 'Pagina continuă exact promisiunea din reclamă: instalații sanitare, desfundări, urgențe și intervenții în București, cu telefon și formular la vedere.',
  },
  {
    kicker: 'CONVERSIE',
    title: 'Vizita se transformă într-un lead măsurabil.',
    text: 'Apelul sau formularul este înregistrat ca o conversie. Vedem sursa solicitării și putem optimiza campaniile pentru acțiunile care aduc business real.',
  },
  {
    kicker: 'LEGĂTURĂ',
    title: 'Afacerea ta ajunge la clientul potrivit.',
    text: 'Obiectivul nu este doar traficul. Persoana care caută serviciul intră în contact direct cu firma care îl oferă, iar traseul poate fi măsurat de la căutare până la solicitare.',
  },
];

const labels = ['Caută', 'Te găsește', 'Intră pe site', 'Devine lead', 'Devine client'];

export default function MarketingJourney() {
  const wrap = useRef<HTMLElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToStep = (index: number) => {
    const section = wrap.current;
    if (!section) return;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const travel = Math.max(section.offsetHeight - viewportHeight, 1);
    const progress = Math.min(.985, Math.max(.015, (index + .5) / steps.length));
    setActive(index);
    window.scrollTo({ top: sectionTop + travel * progress, behavior: 'smooth' });
  };

  useEffect(() => {
    const section = wrap.current;
    const host = mount.current;
    if (!section || !host) return;

    const clampProgress = (value: number) => Math.min(.999, Math.max(0, value));
    const updateActiveFromProgress = (value: number) => {
      const next = Math.min(steps.length - 1, Math.floor(clampProgress(value) * steps.length));
      setActive(current => current === next ? current : next);
    };

    const mobileQuery = window.matchMedia('(max-width: 700px)');
    const mobile = mobileQuery.matches;

    /*
     * MOBILE FIX:
     * Pe telefon nu mai inițializăm WebGL/Three.js pentru această secțiune.
     * Unele browsere mobile pot refuza sau pierde contextul WebGL în pagini lungi,
     * iar efectul era că scenele DOM nu mai primeau progresul corect.
     * Animația mobilă folosește doar scenele HTML/CSS și scroll-ul nativ.
     */
    if (mobile) {
      let raf = 0;
      let sectionTop = 0;
      let travel = 1;

      const measure = () => {
        const rect = section.getBoundingClientRect();
        sectionTop = window.scrollY + rect.top;
        const viewportHeight = window.visualViewport?.height || window.innerHeight;
        travel = Math.max(section.offsetHeight - viewportHeight, 1);
      };

      const sync = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const progress = (window.scrollY - sectionTop) / travel;
          updateActiveFromProgress(progress);
        });
      };

      const refresh = () => {
        measure();
        sync();
      };

      measure();
      sync();
      window.addEventListener('scroll', sync, { passive: true });
      window.addEventListener('resize', refresh, { passive: true });
      window.addEventListener('orientationchange', refresh, { passive: true });
      window.visualViewport?.addEventListener('resize', refresh, { passive: true });

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('scroll', sync);
        window.removeEventListener('resize', refresh);
        window.removeEventListener('orientationchange', refresh);
        window.visualViewport?.removeEventListener('resize', refresh);
      };
    }

    /* Desktop: păstrăm animația V9/V4 cu traseul Three.js. */
    gsap.registerPlugin(ScrollTrigger);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const points = [
      new THREE.Vector3(-3.35, 1.55, 0),
      new THREE.Vector3(-1.7, .72, .12),
      new THREE.Vector3(0, .02, .2),
      new THREE.Vector3(1.7, -.72, .12),
      new THREE.Vector3(3.35, -1.5, 0),
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 140, .016, 8, false),
      new THREE.MeshBasicMaterial({ color: 0x218cff, transparent: true, opacity: .42 })
    );
    scene.add(tube);

    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(.085, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0x8ee2ff })
    );
    scene.add(pulse);
    const glow = new THREE.PointLight(0x258cff, 5, 3.2);
    scene.add(glow);

    const nodes = points.map((point, index) => {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(index === points.length - 1 ? .12 : .075, 18, 18),
        new THREE.MeshBasicMaterial({ color: index === points.length - 1 ? 0x59eca7 : 0x2d94ff })
      );
      node.position.copy(point);
      scene.add(node);
      return node;
    });

    let progress = 0;
    let raf = 0;
    const clock = new THREE.Clock();
    const resize = () => {
      const width = host.clientWidth || 700;
      const height = host.clientHeight || 500;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const render = () => {
      const time = clock.getElapsedTime();
      const p = Math.min(.999, Math.max(.001, progress));
      const position = curve.getPointAt(p);
      pulse.position.copy(position);
      glow.position.copy(position);
      pulse.scale.setScalar(1 + Math.sin(time * 5) * .16);
      nodes.forEach((node, index) => {
        const reached = progress >= index / (points.length - 1) - .035;
        node.scale.setScalar(reached ? 1.25 + Math.sin(time * 2 + index) * .07 : .76);
      });
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: self => {
        progress = clampProgress(self.progress);
        updateActiveFromProgress(progress);
      },
    });
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      trigger.kill();
      resizeObserver.disconnect();
      cancelAnimationFrame(raf);
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          Array.isArray(material) ? material.forEach(item => item.dispose()) : material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section ref={wrap} className="journey journey-v4 journey-v9" id="cum-functioneaza">
      <div className="journey-sticky">
        <div className="journey-copy">
          <div className="eyebrow">DE LA NEVOIE LA CLIENT</div>
          <div className="journey-kicker">{steps[active].kicker}</div>
          <h2>{steps[active].title}</h2>
          <p>{steps[active].text}</p>
          <div className="journey-steps journey-steps-v4 journey-steps-v9 journey-steps-v11" role="tablist" aria-label="Etapele traseului clientului">
            {labels.map((label, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={index === active}
                key={label}
                onClick={() => scrollToStep(index)}
                className={index === active ? 'active' : index < active ? 'done' : ''}
              >{label}</button>
            ))}
          </div>
        </div>

        <div className="journey-visual journey-visual-v4 journey-visual-v9">
          <div ref={mount} className="three-stage" aria-hidden="true" />

          <Scene active={active} index={0} cls="scene-intent-v4 scene-intent-v9">
            <div className="real-phone-search real-phone-search-v9">
              <div className="mobile-top">9:41 <span>● ● ▰</span></div>
              <GoogleLogo />
              <div className="real-search"><Search size={16}/> instalator bucurești <b>×</b></div>
              <div className="google-tabs"><b>Toate</b><span>Hărți</span><span>Imagini</span><span>Videoclipuri</span></div>
              <div className="mobile-search-result-v9">
                <small>Sponsorizat · instalatori-nonstop.ro</small>
                <strong>Instalator București · Non-Stop</strong>
                <p>Instalații sanitare, desfundări și urgențe 24/7 în București.</p>
                <div className="mobile-rating-v9"><b>4.9</b><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div>
                <div className="mobile-result-actions-v9"><span><Phone size={10}/> Sună</span><span>Vezi site-ul</span></div>
              </div>
              <div className="search-match-v9"><CheckCircle2 size={13}/> Afacerea promovată apare în rezultatele relevante</div>
            </div>
          </Scene>

          <Scene active={active} index={1} cls="scene-google-v4 scene-google-v9">
            <div className="browser-window google-browser-v4 google-browser-v9">
              <ChromeTop url="google.com/search?q=instalator+bucuresti"/>
              <GoogleLogo />
              <div className="google-searchbar-v4">instalator bucurești <Search size={15}/></div>
              <div className="google-tabs desktop"><b>Toate</b><span>Hărți</span><span>Imagini</span><span>Videoclipuri</span><span>Știri</span></div>
              <div className="sponsored-result sponsored-result-v9">
                <small>Sponsorizat · instalatori-nonstop.ro</small>
                <strong>Instalator București · Intervenții rapide 24/7</strong>
                <p>Reparații instalații sanitare, desfundări, pierderi de apă și intervenții rapide în București și Ilfov.</p>
                <div className="result-actions"><span>☎ Sună</span><span>▣ Solicită ofertă</span><span>↗ Vezi site-ul</span></div>
              </div>
              <div className="organic-result-v9">
                <small>instalatori-nonstop.ro › servicii</small>
                <strong>Servicii instalații sanitare în București</strong>
                <p>Intervenții pentru locuințe, birouri și spații comerciale.</p>
              </div>
              <div className="map-pack map-pack-v9">
                <div><small>Instalator Non-Stop București</small><b>4.9 <Star size={11} fill="currentColor"/> <Star size={11} fill="currentColor"/> <Star size={11} fill="currentColor"/> <Star size={11} fill="currentColor"/> <Star size={11} fill="currentColor"/></b><span>Deschis 24/7 · București</span></div>
                <div className="mini-map">București</div>
              </div>
            </div>
          </Scene>

          <Scene active={active} index={2} cls="scene-site-v4 scene-site-v9">
            <div className="browser-window plumber-site plumber-site-v9">
              <ChromeTop url="instalatori-nonstop.ro"/>
              <div className="plumber-nav">
                <b><span>◆</span> INSTALATORI<br/>NON-STOP</b>
                <span>Servicii</span><span>Prețuri</span><span>Zone</span><span>Contact</span>
                <button><Phone size={12}/> 0740 231 358</button>
              </div>
              <div className="plumber-hero plumber-hero-v9">
                <div>
                  <small>INSTALAȚII SANITARE · BUCUREȘTI & ILFOV</small>
                  <h3>Instalator București.<br/>Intervenții rapide 24/7.</h3>
                  <p>Reparații sanitare, desfundări, scurgeri, baterii, robineți și intervenții de urgență. Exact serviciul căutat în Google.</p>
                  <div className="plumber-services-v9">
                    <span><Droplets size={11}/> Pierderi de apă</span>
                    <span><Wrench size={11}/> Reparații sanitare</span>
                    <span><Check size={11}/> Desfundări</span>
                  </div>
                  <div className="site-ctas"><button><Phone size={13}/> Sună acum</button><span>Solicită ofertă</span></div>
                  <div className="trust-row"><b>✓ Program 24/7</b><b>✓ București & Ilfov</b><b>✓ Recenzii 4.9</b></div>
                </div>
                <div className="plumber-photo plumber-photo-v9">
                  <div className="photo-overlay-service"><b>Ai ajuns unde trebuie</b><span>Servicii de instalații · București</span></div>
                  <div className="worker-shape"><i/><i/><i/></div>
                  <span>Intervenție profesională</span>
                </div>
              </div>
            </div>
            <div className="cursor-click cursor-click-v9"><MousePointerClick size={28}/></div>
          </Scene>

          <Scene active={active} index={3} cls="scene-lead-v4 scene-lead-v9">
            <div className="conversion-panel conversion-v4 conversion-v9">
              <div className="conversion-icon"><BadgeCheck size={28}/></div>
              <small>CONVERSIE ÎNREGISTRATĂ</small>
              <strong>Lead nou din Google Ads</strong>
              <div className="lead-profile"><UserRound/><div><b>Client interesat</b><span>a căutat „instalator bucurești”</span></div></div>
              <div className="conversion-row"><span>Sursă</span><b>Google Ads / Search</b></div>
              <div className="conversion-row"><span>Pagină</span><b>Instalator București</b></div>
              <div className="conversion-row"><span>Acțiune</span><b>Apel telefonic</b></div>
              <div className="conversion-row"><span>Status</span><b className="green">Client potențial</b></div>
            </div>
          </Scene>

          <Scene active={active} index={4} cls="scene-client-v4 scene-client-v9">
            <div className="client-connection client-connection-v9">
              <div className="client-node"><UserRound/><b>Client</b><span>Are nevoie de instalator</span></div>
              <div className="connection-wave"><i/><i/><i/><span><Phone/></span></div>
              <div className="business-node"><CheckCircle2/><b>Afacerea ta</b><span>Primește solicitarea</span></div>
            </div>
            <div className="client-message client-message-v9">Căutare relevantă → reclamă → site potrivit → contact real.</div>
            <div className="match-badges-v9"><span><Check size={11}/> intenție reală</span><span><Check size={11}/> serviciu relevant</span><span><Check size={11}/> conversie măsurată</span></div>
          </Scene>
        </div>
      </div>
    </section>
  );
}

function Scene({ active, index, cls, children }: { active: number; index: number; cls: string; children: React.ReactNode }) {
  return <div className={`journey-scene ${cls} ${active === index ? 'is-active' : active > index ? 'is-past' : ''}`}>{children}</div>;
}

function ChromeTop({ url }: { url: string }) {
  return <div className="browser-top"><i/><i/><i/><span>{url}</span></div>;
}

function GoogleLogo() {
  return <img className="google-official-logo journey-google-logo journey-google-logo-v9" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google"/>;
}
