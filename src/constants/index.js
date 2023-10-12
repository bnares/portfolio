import {
    mobile,
    backend,
    creator,
    web,
    html,
    css,
    reactjs,
    redux,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    revit,
    autocad,
    robot,
    c,
    mui,
    zut,
    pk,
    pp,
    forge,
    ecommerce,
    quiz,
    budget,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "BIM Modeler",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name:"Robot Structural",
      icon:robot,
    },
    {
      name:'AutoCad',
      icon:autocad
    },
    {
      name:"Revit",
      icon:revit
    },
    {
      name:"C#",
      icon:c,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "mui",
      icon: mui,
    },
    
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Projekt Przyszły Programista",
      icon: pp,
      iconBg: "#383E56",
      date: "August 2020 - March 2023",
      points: [
        "Holistic course which focuses on teaching its students how to become a programmer.",
        "During the course, the Author/Mentor helps students learn many popular programming languages.",
        "The course consists of 2 parts. The first helps to develop basic knowledge where students learn C++, HTML, CSS, PHP, Java. The second part involves mastering a language of your own choice.",
        "During each section, the Teacher challenges students with many exercises where they learn clean code rules and design patterns. After each section, students are obligated to create their own console application and later a web application.",
      ],
    },
    {
      title: "Energy Engineer",
      company_name: "Politechnika Krakowska",
      icon: pk,
      iconBg: "#383E56",
      date: "September 2015 - June 2018",
      points: [
		    "Bachelor of Engineering in Energetics",
        "Field of study where people can learn all about the forms of energy and how to create, transform, and transport that energy.",
        "During these studies, I built and designed many energetic machines like turbines, transformers, and electric engines. I worked with AC current and DC current. This time in my life helped me learn and understand what teamwork is.",
      ],
    },
    {
      title: "Civil Engineer",
      company_name: "Zachodniopomorski Uniwersytet Technologiczny",
      icon: zut,
      iconBg: "#383E56",
      date: "September 2010 - June 2015",
      points: [
        "Master of Engineering in Civil Construction.",
        "Field of study where I learned a lot about statics, mechanics, and building construction.",
        "Civil engineering helped me to understand how big of an impact mathematics has on our world. This field of study developed in me a feeling that there is nothing I can't learn or understand, even though the problem uses the language of advanced mathematics and statistics.",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Building App",
      description:
        "Cloud Application allows users to freely navigate around a Revit model based on the Building Information Modeling (BIM) framework. Users can select elements from a table and display charts. The app utilizes Autodesk's platform services and is hosted on Microsoft Azure.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
      ],
      image: forge,
      source_code_link: "https://github.com/bnares/forge",
      urlLink:"https://ostrouch-forge.azurewebsites.net",
    },
    {
      name: "E-Commerce Shop",
      description:
        "This application allows users to log in, add items to the basket, remove items from the basket, and make purchases. To log in as an administrator with the permission to add new items to the shop, use the following credentials: username - 'Piotr', password - 'Pa$$w0rd'.",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/bnares/skiShop",
      urlLink:"https://skishop-postrouch.azurewebsites.net/catalog",
    },
    {
      name: "Quiz App",
      description:
        "The Quiz App is a straightforward application where users can choose the correct answer from four possibilities. In the end, the application displays the final score along with a list of both correct and incorrect answers. By clicking on a question from the list, users can review whether their answer was correct.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/bnares/quizApp/tree/main/QuizAPI",
      //urlLink:"https://ostrouch-forge.azurewebsites.net",
    },
    {
      name: "Budget App",
      description:
        "My first-ever application had some design and logical errors, but I keep it as a reminder to track my progress. My Budget is a straightforward app where users can add incomes and expenses, grouped into categories. Categories can be deleted or modified, just like the incomes. To view some data on charts, log in with the following credentials: email - piotr@gmail.com, password - string.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Azure",
          color: "pink-text-gradient",
        },
      ],
      image: budget,
      source_code_link: "https://github.com/bnares/budgetApp/tree/main",
      urlLink:"https://ostrouch-budget.azurewebsites.net/login",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };