import project1 from "@/assets/project 1.jpg";
import project2 from "@/assets/project 2.jpg";
import project3 from "@/assets/project 3.jpg";
import project4 from "@/assets/project 4.jpg";
import project5 from "@/assets/project 5.jpg";
import project6 from "@/assets/project 6.jpg";
import project7 from "@/assets/project 7.jpg";
import project8 from "@/assets/project 8.jpg";
import project9 from "@/assets/project 9.jpg";
import project10 from "@/assets/project 10.jpg";
import project11 from "@/assets/project 11.jpg";
import { Project } from "@/types/Project";

export const data: Project[] = [
  {
    name: "Jortan Camera Landing page",
    categories: {
      categoriesKeys: ["sales", "landingPage"],
      categoriesValues: ["projectCard1.category1", "projectCard1.category2"],
    },
    description: "projectCard1.description",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
    img: project1,
    github: "https://github.com/Manasses-Ndombele/nelson-gaspar-landing-page",
    link: "https://github.com/Manasses-Ndombele/jortran-landing-page",
    imgAlt: "projectCard1.imgAlt",
  },
  {
    name: "C.E.P - Landing page",
    categories: {
      categoriesKeys: ["sales", "landingPage"],
      categoriesValues: ["projectCard2.category1", "projectCard2.category2"],
    },
    description: "projectCard2.description",
    technologies: ["NextJS", "ReactJS", "TypeScript", "TailwindCSS"],
    img: project2,
    github: "https://github.com/Manasses-Ndombele/nelson-gaspar-landing-page",
    link: "https://nelson-gaspar.vercel.app/",
    imgAlt: "projectCard2.imgAlt",
  },
  {
    name: "Beleza Viva",
    categories: {
      categoriesKeys: ["branding", "institutional"],
      categoriesValues: ["projectCard3.category1", "projectCard3.category2"],
    },
    description: "projectCard3.description",
    technologies: ["ReactJS", "TailwindCSS", "TypeScript"],
    img: project3,
    github: "https://github.com/Manasses-Ndombele/beleza-viva-clinica",
    link: "https://beleza-viva.vercel.app/",
    imgAlt: "projectCard3.imgAlt",
  },
  {
    name: "EDEN Hotels",
    categories: {
      categoriesKeys: ["branding", "institutional", "webSystems"],
      categoriesValues: [
        "projectCard4.category1",
        "projectCard4.category2",
        "projectCard4.category3",
      ],
    },
    description: "projectCard4.description",
    technologies: ["ReactJS", "TailwindCSS", "PHP", "TypeScript"],
    img: project4,
    github: "https://github.com/Manasses-Ndombele/EDEN-Hotels",
    link: "https://eden-hotels.vercel.app/",
    imgAlt: "projectCard4.imgAlt",
  },
  {
    name: "Emagrecimento sem segredos",
    categories: {
      categoriesKeys: ["sales", "landingPage"],
      categoriesValues: ["projectCard5.category1", "projectCard5.category2"],
    },
    description: "projectCard5.description",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project5,
    github: "https://github.com/Manasses-Ndombele/ESS-Landing-Page",
    link: "http://emagrecimento-sem-segredos.vercel.app",
    imgAlt: "projectCard5.imgAlt",
  },
  {
    name: "Portfolio freelancer",
    categories: {
      categoriesKeys: ["others"],
      categoriesValues: ["projectCard6.category1"],
    },
    description: "projectCard6.description",
    technologies: ["Python", "NextJS", "ReactJS", "TypeScript"],
    img: project6,
    github: "https://github.com/Manasses-Ndombele/portfolio-freelancer-v3",
    link: "https://manassesndombele.vercel.app/",
    imgAlt: "projectCard6.imgAlt",
  },
  {
    name: "PetMimos",
    categories: {
      categoriesKeys: ["sales", "ecommerce"],
      categoriesValues: ["projectCard7.category1", "projectCard7.category2"],
    },
    description: "projectCard7.description",
    technologies: ["ReactJS", "NextJS", "TailwindCSS", "TypeScript"],
    img: project7,
    github: "https://github.com/Manasses-Ndombele/petmimos-loja",
    link: "https://petmimos.vercel.app/",
    imgAlt: "projectCard7.imgAlt",
  },
  {
    name: "VR Motion",
    categories: {
      categoriesKeys: ["sales", "ecommerce"],
      categoriesValues: ["projectCard8.category1", "projectCard8.category2"],
    },
    description: "projectCard8.description",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project8,
    github: "https://github.com/Manasses-Ndombele/VR-Motion",
    link: "https://vr-motion.vercel.app/",
    imgAlt: "projectCard8.imgAlt",
  },
  {
    name: "Borges Consulting",
    categories: {
      categoriesKeys: ["branding", "institutional"],
      categoriesValues: ["projectCard9.category1", "projectCard9.category2"],
    },
    description: "projectCard9.description",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project9,
    github: "https://github.com/Manasses-Ndombele/Borges-Consulting",
    link: "https://borges-consulting.vercel.app/",
    imgAlt: "projectCard9.imgAlt",
  },
  {
    name: "Quiz da Socorre.me",
    categories: {
      categoriesKeys: ["others"],
      categoriesValues: ["projectCard10.category1"],
    },
    description: "projectCard10.description",
    technologies: ["HTML", "Sass", "JavaScript", "Bootstrap 5", "PHP"],
    img: project10,
    github: "https://github.com/Manasses-Ndombele/TVC-Quiz",
    link: "https://socorre.me/quiz/pages",
    imgAlt: "projectCard10.imgAlt",
  },
  {
    name: "Automails",
    categories: {
      categoriesKeys: ["webSystems", "automations"],
      categoriesValues: ["projectCard11.category1", "projectCard11.category2"],
    },
    description: "projectCard11.description",
    technologies: [
      "Python",
      "Flask",
      "ReactJS",
      "JavaScript",
      "Sass",
      "Bootstrap 5",
    ],
    img: project11,
    github: "https://github.com/Manasses-Ndombele/AutoMails",
    link: "https://automails.vercel.app/",
    imgAlt: "projectCard11.imgAlt",
  },
];
