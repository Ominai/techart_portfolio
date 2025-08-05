import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Arch',
    lastName:  'Raxion',
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
        link: 'https://github.com/Ominai',
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
        link: 'mailto:rax@raxion.art',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Tech Artist</>,
    subline: <>An Artist with experience in <br /> <InlineCode>Graphic Design</InlineCode><InlineCode>App Development</InlineCode><InlineCode>Web Design</InlineCode><InlineCode>3D Modeling</InlineCode><br /><InlineCode>2D Illustration</InlineCode><InlineCode>Marketing</InlineCode><InlineCode>Movie + Game Animation</InlineCode><br /><br />
    I've recently been tinkering with <br />
    <InlineCode>Code/Scripting</InlineCode><InlineCode>ML Engineering</InlineCode><InlineCode>Network Security</InlineCode>
    </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Raxion is an art-centric tinkerer with a vast repetoire of skills for taking on challenging digital problems. He is particularly skilled in rapid prototyping of functional deliverables and marketing assets. His work has stood the test of time in multiple industries from Medical to Retail. With a penchant for computer optimization, tinkering, and custom app development on Linux systems, he's tech savvy enough to be his own IT team just as a matter of hobby.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Snyxius Technologies',
                timeframe: '2018 - 2019',
                role: 'Project Manager',
                achievements: [
                    <>Led a team of App Developers to create bespoke and customized Smartphone and Web Applications.</>,
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
                    <>Massively increased Dealership Visibility, increasing customer visitation from 2 per month to 30 per month, helping Freeway Isuzu earn the Title of Best Isuzu Dealership in Southern California from 2016+.</>,
                    <>Created a custom system for the Dealership's Parts and Service Department to work in conjunction with their unique style of organization, increasing Parts Department Productivity from 30 minutes per customer to 5 minutes or less.</>
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
                    <>Designed the UI and UX of VINControl's Web and Smartphone App suite, helping upgrade numerous dealerships from outdated and insecure Vehicle Inventory Management Systems.</>,
                    <>Created a variety of tutorials and animations for the VINControl suite.</>
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
                company: 'Vehicle Inventory Network',
                timeframe: '2013 - 2014',
                role: 'Photographer',
                achievements: [
                    <>Set up and worked with VINControl systems to automate the uploading of thousands of vehicle photos onto Dealer websites complete with banners and ads, a massive upgrade from manually applying and batch uploading photos directly to the dealer's website code.</>                    
                ],
                images: [
                ]
            },
            {
                company: 'NeoMedix Corp',
                timeframe: '2013 - 2013',
                role: 'Graphic Designer',
                achievements: [
                    <>Automated the design process for NeoMedix's clientelle, creating customized educational pamphlets, detailed canvases, and trade show pieces for numerous Hospitals and Glaucoma Specialists.</>                    
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
                title: 'Graphic Design Art Tools',
                description: <>Adobe / Figma / XD / etc<br />
                 - If an art program exists, I've probably used it.</>,
                images: [
                ]
            },
            {
                title: '3D Tools',
                description: <>Blender / zBrush / Unreal / Unity / Autodesk<br />
                 - Full Pipeline Production Proficiency. I've begun working with Geometry and Shader nodes for procedural vfx.</>,
                images: [
                ]
            },
            {
                title: 'Code Proficiencies',
                description: <>Python / TensorFlow / Frontend Web Dev / Bash / JS / Actionscript</>,
                images: [
                ]
            },
            {
                title: 'Oddball Skills',
                description: <>Arch Linux Enthusiast / 3D Printer / Sculptor / Computer Network Administrator</>,
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
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.gif', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-07.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
