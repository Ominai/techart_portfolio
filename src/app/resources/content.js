import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Leon',
    lastName:  'Nguyen',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Tech Artist',
    avatar:    '/images/avatar.png',
    location:  'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: '',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: '',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:leonm.nguyen@proton.me',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Tech Artist</>,
    subline: <><InlineCode>Shaders/Geometry Nodes</InlineCode><InlineCode>Rigging</InlineCode><InlineCode>3D Modeling</InlineCode><InlineCode>UE5/Unity/Godot Engine</InlineCode><br /><InlineCode>2D Illustration</InlineCode><InlineCode>C++ Plugins</InlineCode><InlineCode>Movie/Game Animation</InlineCode><InlineCode>Particle Effects</InlineCode><InlineCode>Graphic Design</InlineCode><InlineCode>Project Management</InlineCode><br />
    </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: false,
        title: 'Introduction',
        description: <>Leon is an art-centric tinkerer with a vast repetoire of skills for taking on challenging digital problems. He is particularly skilled in rapid prototyping of functional deliverables and marketing assets. His work has stood the test of time in multiple industries from Medical to Retail. With a penchant for computer optimization, tinkering, and custom app development on Linux systems, he's tech savvy enough to be his own IT team just as a matter of hobby.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelancer',
                timeframe: '2019 - Present',
                role: 'Technology and Art Consultant',
                achievements: [
                    <>Designed Python macros enabling 50+ artists to securely mass-download, delete, and archive over 10,000 digital artworks along with contextual metadata such as comments, journals, and descriptions for enhanced user autonomy in privacy compliance across multiple online platforms.</>,
                    <>Created 2D concept illustrations and translated them into precise 3D-printable models using Blender, CAD tools, and resin printing technology for miniature, prop, and part manufacturing across diverse client productions.</>,
                    <>Developed custom HTML/CSS/JavaScript solutions for streamers and webcomic artists, delivering innovative site effects to enhance audience engagement and content interactivity.</>,
                    <>FAA Part 107 Certified Drone Pilot: build, maintain, program autonomous missions with ArduPilot for high-resolution photography & photogrammetry deliverables.</>,
                    <>Collaborated on the AutoGPT project during ChatGPT-3.5 release to develop and test pioneering memory recursion methods for improved LLM coherence and reduced hallucinations; key findings that clarified foundational limitations of AI model determinism versus probabilistic behavior.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/.jpg',
                        alt: 'Snyxius Project',
                        width: 5,
                        height: 9
                    },
                    {
                        src: '/images/projects/.jpg',
                        alt: 'Snyxius Project',
                        width: 14,
                        height: 9
                    }
                ]
            },

            {
                company: 'Snyxius Technologies',
                timeframe: '2018 - 2019',
                role: 'Project Manager',
                achievements: [
                    <>Led and oversaw the full lifecycle of custom app development projects, ensuring that client needs were precisely captured, translated into actionable plans, and delivered within scope, budget, and timeline constraints.</>,
                    <>Served as the primary point of contact between clients, development teams, and stakeholders to guarantee transparent communication and alignment with each client’s unique business objectives.</>,
                    <>Faced with an overbudgeted and stalled daycare app project due to the client's struggles with UX/UI design and the team’s unfamiliarity with GDPR, I acquired a comprehensive understanding of the regulations and client needs, redesigned the entire UX/UI to ensure compliance, and effectively communicated these requirements to the programming team, enabling the project to resume after a three-month halt and helping the client present a clearer, more understandable app to shareholders.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/snyxius/sny1.jpg',
                        alt: 'Snyxius Project',
                        width: 5,
                        height: 9
                    },
                    {
                        src: '/images/projects/snyxius/sny2.jpg',
                        alt: 'Snyxius Project',
                        width: 14,
                        height: 9
                    },
                    {
                        src: '/images/projects/snyxius/sny3.png',
                        alt: 'Snyxius Project',
                        width: 5,
                        height: 9
                    },
                    {
                        src: '/images/projects/snyxius/sny4.png',
                        alt: 'Snyxius Project',
                        width: 5,
                        height: 9
                    },
                    {
                        src: '/images/projects/snyxius/sny5.png',
                        alt: 'Snyxius Project',
                        width: 5,
                        height: 9
                    }
                ]
            },
            {
                company: 'Freeway Isuzu Trucks & Vans',
                timeframe: '2014 - 2017',
                role: 'Marketing and Operations Specialist',
                achievements: [
                    <>Overcame low customer visitation by implementing targeted marketing strategies that increased monthly visits from 2 to 30, helping Freeway Isuzu earn the title of Best Isuzu Dealership in Southern California.</>,
                    <>Addressed inefficiencies in the Parts and Service Department by developing a customized workflow system, reducing customer processing time from 30 minutes to 5 minutes or less and significantly boosting productivity.</>
                ],
                images: [ 
                    {
                        src: '/images/projects/fway/fway1.jpg',
                        alt: 'Snyxius Project',
                        width: 12,
                        height: 9
                    },
                    {
                        src: '/images/projects/fway/fway2.png',
                        alt: 'Snyxius Project',
                        width: 3,
                        height: 9
                    },
                    {
                        src: '/images/projects/fway/fway3.png',
                        alt: 'Snyxius Project',
                        width: 10,
                        height: 9
                    },
                    {
                        src: '/images/projects/fway/fway4.jpg',
                        alt: 'Snyxius Project',
                        width: 8,
                        height: 9
                    },
                    {
                        src: '/images/projects/fway/fway5.png',
                        alt: 'Snyxius Project',
                        width: 14,
                        height: 9
                    }
                ]
            },
            {
                company: 'Vehicle Inventory Network',
                timeframe: '2013 - 2014',
                role: 'UI/UX Designer',
                achievements: [
                    <>Created wireframes, prototypes, sitemaps, process flows, and storyboards to illustrate design concepts.</>,
                    <>Collaborated with cross-functional teams including developers, product managers, and marketers to align design with business goals.</>,
                    <>Enhanced mobile app usability, tripling the user base within a month.</>,
                    <>Created detailed wireframes and prototypes that reduced time to market significantly.</>
                ],
                images: [ 
                    {
                        src: '/images/projects/vinc/vinc1.png',
                        alt: 'Snyxius Project',
                        width: 12,
                        height: 9
                    },
                    {
                        src: '/images/projects/vinc/vinc2.jpg',
                        alt: 'Snyxius Project',
                        width: 4,
                        height: 9
                    },
                    {
                        src: '/images/projects/vinc/vinc3.png',
                        alt: 'Snyxius Project',
                        width: 12,
                        height: 9
                    },
                    {
                        src: '/images/projects/vinc/vinc4.png',
                        alt: 'Snyxius Project',
                        width: 15,
                        height: 9
                    },
                    {
                        src: '/images/projects/vinc/vinc5.jpg',
                        alt: 'Snyxius Project',
                        width: 4,
                        height: 9
                    },
                    {
                        src: '/images/projects/vinc/vinc6.jpg',
                        alt: 'Snyxius Project',
                        width: 4,
                        height: 9
                    }
                ]
            },
            {
                company: 'NeoMedix Corp',
                timeframe: '2013 - 2013',
                role: 'Graphic Designer',
                achievements: [
                    <>Produced designs by collaborating closely with marketing teams to integrate feedback and ensure alignment with campaign objectives and branding standards.</>,
                    <>Managed digital assets and organizing production file pipelines for marketing communications.</>,
                    <>Created a series of patient education pamphlets and posters to communicate glaucoma and treatment options, collaborating with doctors to design clear, persuasive materials that highlighted the benefits of the Trabectome over stents, resulting in improved patient understanding and support for the Trabectome procedure.</>
                ],
                images: [   
                    {
                        src: '/images/projects/nmx/nmx6.png',
                        alt: 'Snyxius Project',
                        width: 11,
                        height: 9
                    },
                    {
                        src: '/images/projects/nmx/nmx4.png',
                        alt: 'Snyxius Project',
                        width: 12,
                        height: 9
                    },
                    {
                        src: '/images/projects/nmx/nmx5.png',
                        alt: 'Snyxius Project',
                        width: 12,
                        height: 9
                    },
                    {
                        src: '/images/projects/nmx/nmx7.jpg',
                        alt: 'Snyxius Project',
                        width: 14,
                        height: 9
                    },
                    {
                        src: '/images/projects/nmx/nmx9.jpg',
                        alt: 'Snyxius Project',
                        width: 12,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Art Institute of California: Orange County',
                description: <>Bachelor of Computer Sciences in 3D Visual Development.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical Skills',
        skills: [
            {
                title: 'Digital Art Techniques',
            description: <>Shaders / Rigging / Procedural Generation / Texturing / Modeling / Particles / Lighting / Post Processing / MoCap Setup / Photogrammetry / Video Editing / V-Ray / Color Correction / Wireframing / Graphic Design / Flowcharts / Marketing Material / Tradeshow Design / Print Proofing </>,
                images: [
                ]
            },
            {
                title: 'Digital Art Tools',
                description: <>Blender / Davinci Resolve / zBrush / Unreal 4+5 / Godot / Unity / Autodesk - 3DSMax+CAD+Maya / Adobe - Photoshop+After Effects+Illustrator+Animator+XD / Inkscape / Krita / Spine <br />
                 - Full pipeline production proficiency and fastest Bezier Pen tool user this side of the Mississippi </>,
                images: [
                ]
            },
            {
                title: 'Project Management',
                description: <>Obsidian / Agile / Kanban / Waterfall / JIRA </>,
                images: [
                ]
            },
            {
                title: 'Code Proficiencies',
                description: <>Python / TensorFlow / Frontend Web Dev / Bash / JS / Actionscript / C++ / TS / LUA / n8n / AgentKit <br />
                Web Development / Plugin Creation / Data Aggregation and Interpretation / App Development / Automation </>,
                images: [
                ]
            },
            {
                title: 'Hobby Skills',
                description: <>Linux / Resin 3D Printing / Drone Pilot / Spraypainting / Source Code Reverse Engineering / Electronic Soldering / Boxing / LLM and VLM Experimentation / Making Comics / Professional Photography / Robotics </>,
                images: [
                ]
            }
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const gallery = {
    label: 'Gallery',
    title: 'My varied and personal artwork',
    description: `Various artwork by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-02.png', 
            alt: 'image',
            orientation: 'horizontal',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            width: 9,
            height: 6
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            width: 9,
            height: 6        
        },
        { 
            src: '/images/gallery/img-05.png', 
            alt: 'image',
            orientation: 'horizontal',
            width: 16,
            height: 9
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            width: 16,
            height: 9
        },
        { 
            src: '/images/gallery/img-07.png', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            width: 16,
            height: 9
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            width: 4,
            height: 3
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'vertical',
            width: 6,
            height: 5
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            width: 6,
            height: 5
        },
        { 
            src: '/images/gallery/img-12.png', 
            alt: 'image',
            orientation: 'vertical',
            width: 9,
            height: 10
        },
        { 
            src: '/images/gallery/img-13.png', 
            alt: 'image',
            orientation: 'vertical',
            width: 5,
            height: 8
        },
        { 
            src: '/images/gallery/img-14.png', 
            alt: 'image',
            orientation: 'horizontal',
            width: 8,
            height: 8
        },
        { 
            src: '/images/gallery/img-15.png', 
            alt: 'image',
            orientation: 'horizontal',
            width: 7,
            height: 8
        },
        { 
            src: '/images/gallery/img-16.png', 
            alt: 'image',
            orientation: 'vertical',
            width: 9,
            height: 10
        },
        { 
            src: '/images/gallery/img-17.png', 
            alt: 'image',
            orientation: 'vertical',
            width: 9,
            height: 10
        },
        { 
            src: '/images/gallery/img-18.png', 
            alt: 'image',
            orientation: 'vertical',
            width: 9,
            height: 10
        },
        { 
            src: '/images/gallery/img-19.gif', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-20.gif', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-21.gif', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-22.jpg', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-23.jpg', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
        { 
            src: '/images/gallery/img-24.jpg', 
            alt: 'image',
            orientation: 'vertical',
            width: 4,
            height: 5
        },
        { 
            src: '/images/gallery/img-25.jpg', 
            alt: 'image',
            orientation: 'vertical',
            width: 4,
            height: 5
        },
        { 
            src: '/images/gallery/img-26.gif', 
            alt: 'image',
            orientation: 'vertical',
            width: 7,
            height: 9
        },
        { 
            src: '/images/gallery/img-27.gif', 
            alt: 'image',
            orientation: 'horizontal',
            width: 16,
            height: 9
        },
        { 
            src: '/images/gallery/img-28.jpg', 
            alt: 'image',
            orientation: 'vertical',
            width: 10,
            height: 10
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
