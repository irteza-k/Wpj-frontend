export const mockExperts = [
    {
      id: 'exp1',
      name: 'Dr. Anya Sharma',
      title: 'Senior Product Manager, Google',
      description: 'Expert in SaaS product strategy, user experience, and market expansion. Mentored 200+ professionals.',
      longBio: 'Dr. Anya Sharma is a highly accomplished Senior Product Manager at Google with over 10 years of experience in building and scaling innovative software products. She specializes in B2B SaaS, user-centered design, and driving product-led growth. Anya is passionate about empowering aspiring product managers and has a track record of guiding individuals to land roles at top tech companies. Her sessions focus on practical skills, interview preparation, and navigating the product career ladder.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734b31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzE2MjZ8MHwxfHNlYXJjaHw1fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fHx8MTcwMTgwMDAwMHww&ixlib=rb-4.0.3&q=80&w=400',
      rating: 4.9,
      reviews: 185,
      price: 1499,
      category: 'Product Management',
      services: [
        { id: 's1', name: '1-on-1 Mentorship (30 min)', price: 1499, description: 'Personalized career guidance and Q&A.' },
        { id: 's2', name: 'Product Interview Prep (60 min)', price: 2999, description: 'Mock interviews and feedback for PM roles.' },
        { id: 's3', name: 'Resume Review', price: 999, description: 'Detailed feedback on your product management resume.' },
      ],
      calendarLink: 'https://calendly.com/anyasharma/30min' // Placeholder for actual scheduling
    },
    {
      id: 'exp2',
      name: 'Rahul Khanna',
      title: 'Lead Software Engineer, Microsoft',
      description: 'Specializes in backend systems, distributed computing, and competitive programming.',
      longBio: 'Rahul Khanna is a Lead Software Engineer at Microsoft, bringing 8 years of hands-on experience in developing robust and scalable backend infrastructure. He has a deep understanding of system design, microservices, and cloud technologies (Azure, AWS). Rahul is also an avid competitive programmer and enjoys helping aspiring software engineers master algorithms, data structures, and prepare for challenging technical interviews.',
      imageUrl: 'https://images.unsplash.com/photo-1599566150163-ea8df706e22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzE2MjZ8MHwxfHNlYXJjaHwyMHx8cHJvZmVzc2lvbmFsJTIwbWFuJTIwaGVhZHNob3R8ZW58MHx8fHwxNzAxODAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=400',
      rating: 4.8,
      reviews: 152,
      price: 1299,
      category: 'Software Development',
      services: [
        { id: 's4', name: 'DSA & Algo Session (60 min)', price: 1299, description: 'Deep dive into data structures and algorithms.' },
        { id: 's5', name: 'System Design Interview (60 min)', price: 2500, description: 'Preparation for system design rounds.' },
      ],
      calendarLink: 'https://calendly.com/rahulkhanna/60min'
    },
    {
        id: 'exp3',
        name: 'Sneha Rao',
        title: 'Growth Marketing Manager, Swiggy',
        description: 'Drives user acquisition and retention through data-driven marketing strategies.',
        longBio: 'Sneha Rao is a dynamic Growth Marketing Manager at Swiggy, with extensive experience in scaling startups and established brands. Her expertise lies in performance marketing, SEO, content strategy, and A/B testing to optimize conversion funnels. Sneha is passionate about helping aspiring marketers understand the nuances of digital growth and build impactful campaigns.',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzE2MjZ8MHwxfHNlYXJjaHwxM3x8cHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwwfHx8fDE3MDE4MDAwMDB8MA&ixlib=rb-4.0.3&q=80&w=400',
        rating: 4.7,
        reviews: 98,
        price: 899,
        category: 'Marketing',
        services: [
            { id: 's6', name: 'Growth Strategy Session (45 min)', price: 899, description: 'Develop a tailored growth marketing plan.' },
            { id: 's7', name: 'Performance Marketing Review (60 min)', price: 1700, description: 'Audit and optimize your ad campaigns.' },
        ],
        calendarLink: 'https://calendly.com/sneharao/45min'
    },
    {
        id: 'exp4',
        name: 'Vikram Singh',
        title: 'Startup Advisor & Investor',
        description: 'Helps early-stage startups with fundraising, product-market fit, and scaling.',
        longBio: 'Vikram Singh is a seasoned entrepreneur turned angel investor and startup advisor with over 15 years of experience in building and exiting successful ventures. He provides strategic guidance on business model validation, fundraising pitches, team building, and navigating the challenges of early-stage growth. Vikram is dedicated to fostering the next generation of innovators.',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzE2MjZ8MHwxfHNlYXJjaHwyMnx8cHJvZmVzc2lvbmFsJTIwbWFuJTIwaGVhZHNob3R8ZW58MHx8fHwxNzAxODAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=400',
        rating: 5.0,
        reviews: 75,
        price: 2500,
        category: 'Startup & Entrepreneurship',
        services: [
            { id: 's8', name: 'Startup Idea Validation (60 min)', price: 2500, description: 'Assess the viability and potential of your startup idea.' },
            { id: 's9', name: 'Fundraising Strategy (90 min)', price: 3500, description: 'Guidance on pitch deck, investor outreach, and valuation.' },
        ],
        calendarLink: 'https://calendly.com/vikramsingh/60min'
    },
    {
        id: 'exp5',
        name: 'Priya Verma',
        title: 'UI/UX Designer, Flipkart',
        description: 'Specializes in creating intuitive and visually appealing user interfaces.',
        longBio: 'Priya Verma is a passionate UI/UX Designer at Flipkart, with 7 years of experience crafting exceptional digital experiences. Her expertise spans user research, wireframing, prototyping, and visual design. Priya is committed to teaching aspiring designers the principles of user-centered design and how to build impactful portfolios.',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzE2MjZ8MHwxfHNlYXJjaHw3fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fHx8MTcwMTgwMDAwMHww&ixlib=rb-4.0.3&q=80&w=400',
        rating: 4.9,
        reviews: 110,
        price: 1100,
        category: 'Design',
        services: [
            { id: 's10', name: 'Portfolio Review (45 min)', price: 1100, description: 'Detailed feedback on your UI/UX design portfolio.' },
            { id: 's11', name: 'UX Principles Session (60 min)', price: 1800, description: 'Understand core UX principles and best practices.' },
        ],
        calendarLink: 'https://calendly.com/priyaverma/45min'
    },
  ];

  export const mockCategories = [
    'Product Management',
    'Software Development',
    'Marketing',
    'Startup & Entrepreneurship',
    'Design',
    'Data Science',
    'Career Coaching',
    'Finance',
    'Content Creation',
  ];