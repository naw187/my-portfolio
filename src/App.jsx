import React,{useState}from'react';
import{ArrowLeft,ArrowRight,ArrowUpRight,Linkedin,Github,Mail,Menu,X,ExternalLink,Code2,Cloud,Database,BriefcaseBusiness,GraduationCap,Sparkles, User}from'lucide-react';
const linkedin='https://www.linkedin.com/in/naw-htoo-wai-9305202a3',email='naw.h.wai.ms@gmail.com';
const projects=[
{id:'endometriosis-ai',n:'01',title:'AI for Endometriosis Detection',sub:'Multimodal Medical Imaging · MSc Dissertation',cat:'AI · MEDICAL IMAGING · RESEARCH',summary:'An ongoing MSc research project exploring AI-based analysis of MRI and transvaginal ultrasound (TVUS) images to identify endometriosis-related findings.',date:'2026 — IN DEVELOPMENT',visual:'health',cover:'/endometriosis-cover.jpg',tech:['Python','MRI','TVUS','Classical CNN','Quantum CNN (QCNN)','Keras','GPU','NVIDIA Jetson','Web Development'],details:['Explore the suitability, labels and permitted use of MRI and TVUS image datasets.','Develop and compare a Classical Convolutional Neural Network (CNN) and a Quantum Convolutional Neural Network (QCNN).','Build a web application where users can upload medical images and view outputs from both models.','Use Keras as a resource and framework for model development and experimentation.','Investigate GPU support for model training and inference, and explore NVIDIA Jetson for local model execution.']},

{id:'health',n:'02',title:'Know You Better',sub:'Smart Health Monitoring App',cat:'CLOUD · MOBILE · HEALTH TECHNOLOGY',summary:'A cloud-based smart health monitoring app using wearable technology and connected services.',date:'June 2025',visual:'health',cover:'/know-you-better-cover.jpg',tech:['Azure','React Native','AKS','Cosmos DB','Azure Functions','Azure DevOps','Docker'],details:['Developed a cloud-native health app using Azure, React Native and wearable technology.','Designed a scalable architecture with AKS, Cosmos DB and Azure Functions.','Planned secure data flow using API Management and Application Gateway.','Set up a CI/CD pipeline using Azure DevOps and Docker containers.','Focused on real-time health data processing and GDPR-compliant storage.']},
{id:'event',n:'03',title:'Event Management Website',sub:'Web Development Project',cat:'WEB DEVELOPMENT',summary:'An event management website with user login, RSVP, booking and an administration dashboard.',date:'May 2025',visual:'event',tech:['HTML','CSS','PHP','MySQL'],link:'https://homepages.shu.ac.uk/~c4058675/Website/home-page.php',details:['Built an event management system with user login, RSVP, booking and an admin dashboard.','Developed the website using HTML, CSS, PHP and MySQL.','Implemented client, sales and admin roles with access control.']},
{id:'challenge',n:'04',title:'Challenge UK',sub:'Web-Based Booking Application',cat:'PRODUCT · PROJECT PLANNING',summary:'A proposed booking application designed to replace manual processes and improve access to booking information.',date:'April 2025',visual:'booking',tech:['Jira','MS Project','Cloud Hosting','Requirements Analysis'],details:['Proposed and designed a web-based booking system to replace manual processes.','Focused on improving operational efficiency, customer experience and real-time data access.','Defined functional specifications including user login, real-time booking, CRM and automated notifications.','Used Jira and MS Project for project management and planning.']},
{id:'smarttech',n:'05',title:'SmartTech AI Use Case',sub:'Database & Big Data Group Project',cat:'DATABASE · DATA MODELLING',summary:'A group project exploring database design, normalisation and relational and big data systems.',date:'March 2025',visual:'database',tech:['Database Design','ER Modelling','3NF','Big Data'],details:['Normalised complex datasets up to Third Normal Form (3NF) to reduce redundancy and improve data integrity.','Applied top-down Entity Relationship modelling to design structured database relationships.','Evaluated scalability limits of relational models compared with modern big data systems.','Developed practical skills in data modelling, normalisation and database architecture evaluation.']}
];
const skillGroups=[{title:'Development',icon:Code2,items:['HTML','CSS','JavaScript','PHP','C#','Python','Django','React.js']},{title:'Cloud & DevOps',icon:Cloud,items:['Microsoft Azure','AWS','Docker','Microservices','CI/CD','Git']},{title:'Data & Databases',icon:Database,items:['SQL','MySQL','NoSQL','Database Design','ERD','Data Modelling']},{title:'Planning & Delivery',icon:BriefcaseBusiness,items:['Jira','MS Project','Agile / Scrum','Gantt Charts','Risk Registers']},{title:'Soft Skills',icon:User,items:['Problem-Solving','Analytical Thinking','Communication & Teamwork','Adaptability','Time Management']}];
export default function App(){const[page,setPage]=useState('Home'),[project,setProject]=useState(projects[0]),[menu,setMenu]=useState(false);const go=p=>{setPage(p);setMenu(false);window.scrollTo({top:0,behavior:'smooth'})};const open=p=>{setProject(p);go('Project detail')};const nav=['Home','About','Projects','Experience','Skills','Education','Contact'];return <div className="site"><header><button className="logo" onClick={()=>go('Home')}>Naw Htoo Wai<span>.</span></button><button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button><nav className={menu?'nav show':'nav'}>{nav.map(n=><button className={page===n?'selected':''} key={n} onClick={()=>go(n)}>{n}</button>)}</nav><button className="connect" onClick={()=>go('Contact')}>Let’s connect <ArrowUpRight size={15}/></button></header><main>
{page==='Home'&&<><section className="hero"><div className="side">PORTFOLIO · 2026</div><div className="hero-copy"><p className="eyebrow">SOFTWARE · CLOUD · DIGITAL EXPERIENCES</p><h1>My Name is<br/><em>Naw Htoo Wai.</em></h1><p className="lead">An IT professional with nearly three years of international work experience across Singapore and the UK, completing an MSc in Computing. Focused on software development, cloud technologies and building practical digital solutions that solve real world problems.</p><div className="actions"><button className="primary" onClick={()=>go('Projects')}>Explore my work <ArrowRight size={16}/></button><button className="textbtn" onClick={()=>go('About')}>A little about me <ArrowUpRight size={15}/></button></div><div className="social"><span>FIND ME</span><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/></a><a href={'mailto:'+email}><Mail/></a></div></div><div className="portrait-area"><div className="portrait"><img src="/portrait.PNG" alt="Naw Htoo Wai working at a computer" /></div><div className="stamp">BASED IN<br/><b>SHEFFIELD, UK</b></div></div><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>01 — 07</span></div></section><section className="selected-work"><div className="bar"><span>SELECTED WORK</span><button onClick={()=>go('Projects')}>VIEW ALL PROJECTS <ArrowUpRight size={14}/></button></div><div className="work-heading"><h2>A few things I’ve<br/><em>worked on.</em></h2><p>Academic projects across software, cloud and data.</p></div><div className="cards compact">{projects.map(p=><ProjectCard key={p.id} p={p} click={()=>open(p)}/>)}</div></section><section className="about-strip"><span className="eyebrow">A LITTLE MORE</span><p>Interested in how thoughtful technology can make everyday experiences better.</p><button className="circle" onClick={()=>go('About')}><ArrowUpRight/></button></section></>}
{page==='About'&&<Inner kicker="01 / ABOUT" title={<>A little about <em>me.</em></>} subtitle="A short introduction, with room for the story behind the work."><div className="about-layout"><div className="about-art"><img src="/about-photo.jpg" alt="Naw Htoo Wai in Paris" /></div><div><h2>Technology is most interesting when it makes something <em>better.</em></h2><p>I’m Naw Htoo Wai, a Computing postgraduate based in Sheffield, United Kingdom, with three years of professional experience across Singapore and the UK. With an academic and professional background spanning business and technology, I bring a multidisciplinary perspective to solving practical challenges through digital innovation.My interests include software and web development, mobile applications, cloud engineering and AI-driven solutions. Through my professional experience and academic projects, I have developed an understanding of business needs alongside technical problem-solving, exploring areas such as full-stack development, cloud-native applications, database design and big data. I’m passionate about turning ideas into practical, meaningful technology solutions.

</p><div className="facts"><div><small>BASED IN</small><b>Sheffield, United Kingdom</b></div><div><small>INTERESTS</small><b>Software · Cloud · Data</b></div></div></div></div></Inner>}
{page==='Projects'&&<Inner kicker="02 / SELECTED WORK" title={<>Projects & <em>experiments.</em></>} subtitle="Select a project to explore the thinking, tools and work behind it."><div className="cards">{projects.map(p=><ProjectCard key={p.id} p={p} click={()=>open(p)}/>)}</div></Inner>}
{page==='Project detail'&&<Inner><button className="back" onClick={()=>go('Projects')}><ArrowLeft size={15}/> BACK TO PROJECTS</button><p className="eyebrow">{project.n} / {project.cat}</p><h1 className="detail-title">{project.title}</h1><p className="subline">{project.sub}</p><div className={'detail-visual visual '+project.visual}><Visual p={project}/></div><div className="detail-columns"><div><small className="eyebrow">OVERVIEW</small><h2>{project.summary}</h2></div><div><small className="eyebrow">PROJECT CONTRIBUTIONS</small><ul>{project.details.map((d,i)=><li key={i}>{d}</li>)}</ul></div></div><div className="tech"><p className="eyebrow">TECHNOLOGIES & TOOLS</p><Tags items={project.tech}/><p className="date">PROJECT DATE · {project.date}</p>{project.link&&<a className="textbtn" href={project.link} target="_blank" rel="noreferrer">Visit project <ExternalLink size={14}/></a>}</div></Inner>}
{page==='Experience'&&<Inner kicker="03 / EXPERIENCE" title={<>Job <em>experiences </em></>} subtitle="My professional journey across Singapore and UK, spanning technology, business and university environments.">
{/* FULL-TIME JOB EXPERIENCES */}
<div className="experience-group">
    <p className="eyebrow">FULL TIME JOB EXPERIENCES</p>

    <div className="timeline">
      <div className="timeline-date">09/2025 — 09/2026</div>
      <div>
        <h2>IT Operations Intern - Web, Software & Digital Systems</h2>
        <h3>Tsuki Sheffield · United Kingdom</h3>
        <ul>
          <li>Monitored and maintained backend systems for tablet-based ordering platforms, including database connectivity, menu synchronisation and user permissions.</li>
          <li>Supported website maintenance and frontend updates using HTML, CSS and CMS tools, including updating menus, images, promotional banners and website content.</li>
          <li>Assisted with testing and troubleshooting online payment platforms, including digital gift vouchers and payment-related issues.</li>
          <li>Conducted functional and bug testing across websites and digital ordering systems, identifying issues and suggesting improvements to user experience (UX/UI).</li>
          <li>Troubleshot technical issues involving digital menus, ordering tablets and in-house IT devices to support daily business operations.</li>
          <li>Provided technical support to staff, helping resolve software, hardware and system-related problems.</li>
          <li>Documented technical processes, system changes and troubleshooting activities to support effective IT operations.</li>
        </ul>
      </div>
    </div>

    <div className="timeline">
      <div className="timeline-date">04/2021 — 03/2024</div>
      <div>
        <h2>Business Technology Administrator (IT Focused)</h2>
        <h3>Grey and Sanders Singapore · Singapore, Singapore</h3>
        <ul>
          <li>Communicated effectively with production teams, suppliers, and internal colleagues to ensure smooth operations and resolve issues promptly—transferable skills valuable for client and team case management in IT roles.</li>
          <li>Used <strong>Magento</strong> backend to update and upload website images, manage user accounts, and add new users following onboarding, demonstrating practical experience with e-commerce platforms.</li>
          <li>Managed stock adjustments through <strong>NickNack</strong> software, ensuring accurate inventory control.</li>
          <li>Coordinated internal communications and task tracking using <strong>Asana</strong>, supporting team collaboration and project management.</li>
          <li>Monitored project timelines and objectives with <strong>Jira</strong>, improving workflow efficiency and ensuring timely delivery.</li>
          <li>Developed a strong understanding of IT tools and software relevant to business processes, enhancing skills applicable to IT support and project roles.</li>
          <li>Managed employee administration and payroll processing, ensuring accurate and timely payments.</li>
          <li>Coordinated work pass applications and ensured compliance with the Ministry of Manpower (M.O.M.).</li>
          <li>Led recruitment activities including job advertising, CV screening, interviewing, onboarding, and handling employee terminations.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* PART-TIME JOB EXPERIENCES */}
  <div className="experience-group">
    <p className="eyebrow">PART TIME JOB EXPERIENCES</p>

    <div className="timeline">
      <div className="timeline-date">
        09/2026 — 01/2027<br/>(5 months contract)
      </div>
      <div>
        <h2>Student Mentor – Computing</h2>
        <h3>Sheffield Hallam University, UK</h3>
      </div>
    </div>

    <div className="timeline">
      <div className="timeline-date">
        09/2026 — 04/2027<br/>(8 months contract)
      </div>
      <div>
        <h2>GoGlobal Ambassador</h2>
        <h3>Sheffield Hallam University, UK</h3>
      </div>
    </div>

    <div className="timeline">
      <div className="timeline-date">
        09/2025 — 04/2027<br/>(1 year and half contract)
      </div>
      <div>
        <h2>International Student Ambassador</h2>
        <h3>Sheffield Hallam University, UK</h3>
      </div>
    </div>
  </div>

</Inner>}
{page==='Skills'&&<Inner kicker="04 / TOOLKIT" title={<>Tools of the <em>trade.</em></>} subtitle="A selection of technologies, tools and working practices listed in my CV."><div className="skill-grid">{skillGroups.map(({title,icon:Icon,items},i)=><article className="skill" key={title}><Icon/><small>0{i+1}</small><h2>{title}</h2><Tags items={items}/></article>)}</div></Inner>}
{page==='Education'&&<Inner kicker="05 / EDUCATION" title={<>Learning & <em>growth.</em></>} subtitle="Academic background and professional certifications."><div className="education">{[['MSc Computing','Sheffield Hallam University · Sheffield, United Kingdom','January 2025 — Present'],['Master of Business Administration','University of Newcastle Australia · Singapore','2019 — 2021'],['Business Administration Certificate','Strategy First University · Mandalay, Myanmar','2018 — 2019'],['Bachelor’s Degree','Yadanabon University · Mandalay, Myanmar','2015 — 2018']].map((e,i)=><article key={e[0]}><span>0{i+1}</span><GraduationCap/><div><h2>{e[0]}</h2><p>{e[1]}</p><small>{e[2]}</small></div></article>)}</div><div className="certs"><p className="eyebrow">CERTIFICATIONS & RECOGNITION</p><p>Microsoft Azure AI Fundamentals (AI-900) <span>May 2025</span></p><p>Microsoft Azure Fundamentals (AZ-900) <span>March 2026</span></p><p>2nd Runner-up · Smart Pulse Hackathon — Smart Plant Care System <span>May 2025</span></p><p>Gold Hallam Award - Sheffield Hallam University <span>July 2025</span></p><p className="eyebrow">LANGUAGES</p><p>English · Proficient　 /　 Burmese · Native</p></div></Inner>}
{page==='Contact'&&<Inner kicker="06 / CONTACT" title={<>Let’s start a <em>conversation.</em></>} subtitle="For professional connections, project conversations and opportunities."><div className="contact-box"><div><p className="eyebrow">GET IN TOUCH</p><a className="email" href={'mailto:'+email}>{email} <ArrowUpRight/></a><p>Sheffield, United Kingdom</p></div><div className="contact-links"><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn <ArrowUpRight/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GitHub <ArrowUpRight/></a><a href={'mailto:'+email}><Mail/> Email <ArrowUpRight/></a></div></div></Inner>}
</main><footer><button className="logo" onClick={()=>go('Home')}>Naw Htoo Wai<span>.</span></button><span>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span><button onClick={()=>go('Home')}>BACK TO TOP ↑</button></footer></div>}
function Inner({kicker,title,subtitle,children}){return <section className="inner"><div className="page-head">{kicker&&<p className="eyebrow">{kicker}</p>}<h1>{title}</h1>{subtitle&&<p className="subline">{subtitle}</p>}</div>{children}</section>}
function ProjectCard({p,click}){return <button className={p.id === 'endometriosis-ai' ? "card featured" : "card"} onClick={click}><div className={'visual '+p.visual}><Visual p={p}/><span className="number">{p.n}</span></div><div className="card-info"><small>{p.cat}</small><h3>{p.title}</h3><p>{p.sub}</p><i><ArrowUpRight size={16}/></i></div></button>}
function Visual({p}){return p.cover?<img className="project-cover-image" src={p.cover} alt={p.title+' project cover'}/>:<div className="visual-art">{p.visual==='health'?<div className="phone"><b>♡</b><strong>Health</strong><small>Daily overview</small><span/></div>:p.visual==='event'?<div className="browser"><small>EVENTS</small><b>Make moments happen.</b><span/></div>:p.visual==='booking'?<div className="booking"><b>BOOKING</b><i/><i/><i/><i/></div>:<div className="database"><i/><i/><i/><i/></div>}</div>}
function Tags({items}){return <div className="tags">{items.map(x=><span key={x}>{x}</span>)}</div>}
