import React,{useState}from'react';
import{ArrowLeft,ArrowRight,ArrowUpRight,Linkedin,Github,Mail,Menu,X,ExternalLink,Code2,Cloud,Database,BriefcaseBusiness,GraduationCap,Sparkles}from'lucide-react';
const linkedin='https://www.linkedin.com/in/naw-htoo-wai-9305202a3',email='naw.h.wai.ms@gmail.com';
const projects=[
{id:'endometriosis-ai',n:'01',title:'AI for Endometriosis Detection',sub:'Multimodal Medical Imaging · MSc Dissertation',cat:'AI · MEDICAL IMAGING · RESEARCH',summary:'An ongoing MSc research project exploring AI-based analysis of MRI and transvaginal ultrasound (TVUS) images to identify endometriosis-related findings.',date:'2026 — IN DEVELOPMENT',visual:'health',cover:'/endometriosis-cover.jpg',tech:['Python','MRI','TVUS','Classical CNN','Quantum CNN (QCNN)','Keras','GPU','NVIDIA Jetson','Web Development'],details:['Explore the suitability, labels and permitted use of MRI and TVUS image datasets.','Develop and compare a Classical Convolutional Neural Network (CNN) and a Quantum Convolutional Neural Network (QCNN).','Build a web application where users can upload medical images and view outputs from both models.','Use Keras as a resource and framework for model development and experimentation.','Investigate GPU support for model training and inference, and explore NVIDIA Jetson for local model execution.']},

{id:'health',n:'02',title:'Know You Better',sub:'Smart Health Monitoring App',cat:'CLOUD · MOBILE · HEALTH TECHNOLOGY',summary:'A cloud-based smart health monitoring app using wearable technology and connected services.',date:'June 2025',visual:'health',cover:'/know-you-better-cover.jpg',tech:['Azure','React Native','AKS','Cosmos DB','Azure Functions','Azure DevOps','Docker'],details:['Developed a cloud-native health app using Azure, React Native and wearable technology.','Designed a scalable architecture with AKS, Cosmos DB and Azure Functions.','Planned secure data flow using API Management and Application Gateway.','Set up a CI/CD pipeline using Azure DevOps and Docker containers.','Focused on real-time health data processing and GDPR-compliant storage.']},
{id:'event',n:'03',title:'Event Management Website',sub:'Web Development Project',cat:'WEB DEVELOPMENT',summary:'An event management website with user login, RSVP, booking and an administration dashboard.',date:'May 2025',visual:'event',tech:['HTML','CSS','PHP','MySQL'],link:'https://homepages.shu.ac.uk/~c4058675/Website/home-page.php',details:['Built an event management system with user login, RSVP, booking and an admin dashboard.','Developed the website using HTML, CSS, PHP and MySQL.','Implemented client, sales and admin roles with access control.']},
{id:'challenge',n:'04',title:'Challenge UK',sub:'Web-Based Booking Application',cat:'PRODUCT · PROJECT PLANNING',summary:'A proposed booking application designed to replace manual processes and improve access to booking information.',date:'April 2025',visual:'booking',tech:['Jira','MS Project','Cloud Hosting','Requirements Analysis'],details:['Proposed and designed a web-based booking system to replace manual processes.','Focused on improving operational efficiency, customer experience and real-time data access.','Defined functional specifications including user login, real-time booking, CRM and automated notifications.','Used Jira and MS Project for project management and planning.']},
{id:'smarttech',n:'05',title:'SmartTech AI Use Case',sub:'Database & Big Data Group Project',cat:'DATABASE · DATA MODELLING',summary:'A group project exploring database design, normalisation and relational and big data systems.',date:'March 2025',visual:'database',tech:['Database Design','ER Modelling','3NF','Big Data'],details:['Normalised complex datasets up to Third Normal Form (3NF) to reduce redundancy and improve data integrity.','Applied top-down Entity Relationship modelling to design structured database relationships.','Evaluated scalability limits of relational models compared with modern big data systems.','Developed practical skills in data modelling, normalisation and database architecture evaluation.']}
];
const skillGroups=[{title:'Development',icon:Code2,items:['HTML','CSS','PHP','C#','Python','Django','React Native']},{title:'Cloud & DevOps',icon:Cloud,items:['Microsoft Azure','AWS','Docker','Microservices','CI/CD','Git']},{title:'Data & Databases',icon:Database,items:['SQL','MySQL','NoSQL','Database Design','ERD','Data Modelling']},{title:'Planning & Delivery',icon:BriefcaseBusiness,items:['Jira','MS Project','Agile / Scrum','Gantt Charts','Risk Registers']}];
export default function App(){const[page,setPage]=useState('Home'),[project,setProject]=useState(projects[0]),[menu,setMenu]=useState(false);const go=p=>{setPage(p);setMenu(false);window.scrollTo({top:0,behavior:'smooth'})};const open=p=>{setProject(p);go('Project detail')};const nav=['Home','About','Projects','Experience','Skills','Education','Contact'];return <div className="site"><header><button className="logo" onClick={()=>go('Home')}>Naw Htoo Wai<span>.</span></button><button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button><nav className={menu?'nav show':'nav'}>{nav.map(n=><button className={page===n?'selected':''} key={n} onClick={()=>go(n)}>{n}</button>)}</nav><button className="connect" onClick={()=>go('Contact')}>Let’s connect <ArrowUpRight size={15}/></button></header><main>
{page==='Home'&&<><section className="hero"><div className="side">PORTFOLIO · 2026</div><div className="hero-copy"><p className="eyebrow">SOFTWARE · CLOUD · DIGITAL EXPERIENCES</p><h1>My Name is <em>Naw Htoo Wai.</em></h1><p className="lead">An IT professional with nearly three years of international work experience across Singapore and the UK, completing an MSc in Computing. Focused on software development, cloud technologies and building practical digital solutions that solve real world problems.</p><div className="actions"><button className="primary" onClick={()=>go('Projects')}>Explore my work <ArrowRight size={16}/></button><button className="textbtn" onClick={()=>go('About')}>A little about me <ArrowUpRight size={15}/></button></div><div className="social"><span>FIND ME</span><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/></a><a href={'mailto:'+email}><Mail/></a></div></div><div className="portrait-area"><div className="portrait"><img src="/portrait.PNG" alt="Naw Htoo Wai working at a computer" /></div><div className="stamp">BASED IN<br/><b>SHEFFIELD, UK</b></div></div><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>01 — 07</span></div></section><section className="selected-work"><div className="bar"><span>SELECTED WORK</span><button onClick={()=>go('Projects')}>VIEW ALL PROJECTS <ArrowUpRight size={14}/></button></div><div className="work-heading"><h2>A few things I’ve<br/><em>worked on.</em></h2><p>Academic projects across software, cloud and data.</p></div><div className="cards compact">{projects.map(p=><ProjectCard key={p.id} p={p} click={()=>open(p)}/>)}</div></section><section className="about-strip"><span className="eyebrow">A LITTLE MORE</span><p>Interested in how thoughtful technology can make everyday experiences better.</p><button className="circle" onClick={()=>go('About')}><ArrowUpRight/></button></section></>}
{page==='About'&&<Inner kicker="01 / ABOUT" title={<>A little about <em>me.</em></>} subtitle="A short introduction, with room for the story behind the work."><div className="about-layout"><div className="about-art"><img src="/about-photo.jpg" alt="Naw Htoo Wai in Paris" /></div><div><h2>Technology is most interesting when it makes something <em>better.</em></h2><p>I’m Naw Htoo Wai, a Computing postgraduate based in Sheffield, United Kingdom. I’m interested in software and web development, mobile applications, cloud engineering and the ways technology can solve practical problems.</p><p>My academic projects have given me opportunities to explore cloud-native application design, full-stack web development, booking systems, database modelling and big data concepts. I enjoy learning new tools, working through challenges and developing ideas into useful solutions.</p><div className="facts"><div><small>BASED IN</small><b>Sheffield, United Kingdom</b></div><div><small>INTERESTS</small><b>Software · Cloud · Data</b></div></div></div></div></Inner>}
{page==='Projects'&&<Inner kicker="02 / SELECTED WORK" title={<>Projects & <em>experiments.</em></>} subtitle="Select a project to explore the thinking, tools and work behind it."><div className="cards">{projects.map(p=><ProjectCard key={p.id} p={p} click={()=>open(p)}/>)}</div></Inner>}
{page==='Project detail'&&<Inner><button className="back" onClick={()=>go('Projects')}><ArrowLeft size={15}/> BACK TO PROJECTS</button><p className="eyebrow">{project.n} / {project.cat}</p><h1 className="detail-title">{project.title}</h1><p className="subline">{project.sub}</p><div className={'detail-visual visual '+project.visual}><Visual p={project}/></div><div className="detail-columns"><div><small className="eyebrow">OVERVIEW</small><h2>{project.summary}</h2></div><div><small className="eyebrow">PROJECT CONTRIBUTIONS</small><ul>{project.details.map((d,i)=><li key={i}>{d}</li>)}</ul></div></div><div className="tech"><p className="eyebrow">TECHNOLOGIES & TOOLS</p><Tags items={project.tech}/><p className="date">PROJECT DATE · {project.date}</p>{project.link&&<a className="textbtn" href={project.link} target="_blank" rel="noreferrer">Visit project <ExternalLink size={14}/></a>}</div></Inner>}
{page==='Experience'&&<Inner kicker="03 / EXPERIENCE" title={<>Experience & <em>practice.</em></>} subtitle="My professional journey across technology, administration and business.">

  <div className="timeline">
    <div className="timeline-date">SEP 2026 — PRESENT</div>
    <div>
      <h2>Student Mentor – Computing</h2>
      <h3>Sheffield Hallam University · Sheffield, UK</h3>
      <ul>
        <li>Support Computing students with their academic development and university experience.</li>
        <li>Provide guidance and encourage student engagement and collaboration.</li>
      </ul>
    </div>
  </div>

  <div className="timeline">
    <div className="timeline-date">SEP 2026 — PRESENT</div>
    <div>
      <h2>GoGlobal Ambassador</h2>
      <h3>Sheffield Hallam University · Sheffield, UK</h3>
      <ul>
        <li>Represent and support international engagement activities at the university.</li>
      </ul>
    </div>
  </div>

  <div className="timeline">
    <div className="timeline-date">SEP 2025 — PRESENT</div>
    <div>
      <h2>International Student Ambassador</h2>
      <h3>Sheffield Hallam University · Sheffield, UK</h3>
      <ul>
        <li>Support international student activities and help promote the university experience.</li>
      </ul>
    </div>
  </div>

  <div className="timeline">
    <div className="timeline-date">SEP 2025 — SEP 2026</div>
    <div>
      <h2>IT Operations Intern (Placement)</h2>
      <h3>Tsuki · Sheffield, UK</h3>
      <ul>
        <li>Gained practical exposure to software infrastructure and IT operations.</li>
      </ul>
    </div>
  </div>

  <div className="timeline">
    <div className="timeline-date">APR 2021 — MAR 2024</div>
    <div>
      <h2>Procurement & HR Administrator</h2>
      <h3>Grey & Sanders · Singapore</h3>
      <ul>
        <li>Used Magento to update website images, manage user accounts and add new users.</li>
        <li>Managed stock adjustments using NickNack software.</li>
        <li>Coordinated communications and task tracking using Asana.</li>
        <li>Monitored project timelines using Jira.</li>
        <li>Supported payroll, recruitment, employee administration and work pass applications.</li>
      </ul>
    </div>
  </div>

  <div className="timeline">
    <div className="timeline-date">MAY 2017 — MAR 2019</div>
    <div>
      <h2>Business Development Executive</h2>
      <h3>K.W.Z.M Distributer Mandalay · Myanmar</h3>
      <ul>
        <li>Worked in business development and supported business operations.</li>
      </ul>
    </div>
  </div>

  <div className="timeline">
    <div className="timeline-date">FEB 2016 — MAR 2017</div>
    <div>
      <h2>Junior Sales Executive</h2>
      <h3>Unilever Distributer Mandalay · Myanmar</h3>
      <ul>
        <li>Gained experience in sales processes and customer-facing business activities.</li>
      </ul>
    </div>
  </div>

</Inner>}
{page==='Skills'&&<Inner kicker="04 / TOOLKIT" title={<>Tools of the <em>trade.</em></>} subtitle="A selection of technologies, tools and working practices listed in my CV."><div className="skill-grid">{skillGroups.map(({title,icon:Icon,items},i)=><article className="skill" key={title}><Icon/><small>0{i+1}</small><h2>{title}</h2><Tags items={items}/></article>)}</div><p className="note">Please remove or adjust anything that no longer reflects your current experience.</p></Inner>}
{page==='Education'&&<Inner kicker="05 / EDUCATION" title={<>Learning & <em>growth.</em></>} subtitle="Academic background and professional certifications."><div className="education">{[['MSc Computing','Sheffield Hallam University · Sheffield, United Kingdom','January 2025 — Present'],['Master of Business Administration','University of Newcastle Australia · Singapore','2019 — 2021'],['Business Administration Certificate','Strategy First University · Mandalay, Myanmar','2018 — 2019'],['Bachelor’s Degree','Yadanabon University · Mandalay, Myanmar','2015 — 2018']].map((e,i)=><article key={e[0]}><span>0{i+1}</span><GraduationCap/><div><h2>{e[0]}</h2><p>{e[1]}</p><small>{e[2]}</small></div></article>)}</div><div className="certs"><p className="eyebrow">CERTIFICATIONS & RECOGNITION</p><p>Microsoft Azure AI Fundamentals (AI-900) <span>May 2025</span></p><p>Microsoft Azure Fundamentals (AZ-900) <span>July 2025</span></p><p>2nd Runner-up · Smart Pulse Hackathon — Smart Plant Care System</p><p className="eyebrow">LANGUAGES</p><p>English · Proficient　 /　 Burmese · Native　 /　 French · Advanced (as listed in CV)</p></div></Inner>}
{page==='Contact'&&<Inner kicker="06 / CONTACT" title={<>Let’s start a <em>conversation.</em></>} subtitle="For professional connections, project conversations and opportunities."><div className="contact-box"><div><p className="eyebrow">GET IN TOUCH</p><a className="email" href={'mailto:'+email}>{email} <ArrowUpRight/></a><p>Sheffield, United Kingdom</p></div><div className="contact-links"><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn <ArrowUpRight/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GitHub <ArrowUpRight/></a><a href={'mailto:'+email}><Mail/> Email <ArrowUpRight/></a></div></div><p className="note">GitHub is currently linked to the general GitHub website. Replace it with your profile URL when available.</p></Inner>}
</main><footer><button className="logo" onClick={()=>go('Home')}>Naw Htoo Wai<span>.</span></button><span>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span><button onClick={()=>go('Home')}>BACK TO TOP ↑</button></footer></div>}
function Inner({kicker,title,subtitle,children}){return <section className="inner"><div className="page-head">{kicker&&<p className="eyebrow">{kicker}</p>}<h1>{title}</h1>{subtitle&&<p className="subline">{subtitle}</p>}</div>{children}</section>}
function ProjectCard({p,click}){return <button className={p.id === 'endometriosis-ai' ? "card featured" : "card"} onClick={click}><div className={'visual '+p.visual}><Visual p={p}/><span className="number">{p.n}</span></div><div className="card-info"><small>{p.cat}</small><h3>{p.title}</h3><p>{p.sub}</p><i><ArrowUpRight size={16}/></i></div></button>}
function Visual({p}){return p.cover?<img className="project-cover-image" src={p.cover} alt={p.title+' project cover'}/>:<div className="visual-art">{p.visual==='health'?<div className="phone"><b>♡</b><strong>Health</strong><small>Daily overview</small><span/></div>:p.visual==='event'?<div className="browser"><small>EVENTS</small><b>Make moments happen.</b><span/></div>:p.visual==='booking'?<div className="booking"><b>BOOKING</b><i/><i/><i/><i/></div>:<div className="database"><i/><i/><i/><i/></div>}</div>}
function Tags({items}){return <div className="tags">{items.map(x=><span key={x}>{x}</span>)}</div>}
