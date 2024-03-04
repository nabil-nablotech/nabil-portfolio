import icdc from "../assets/svg/projects/icdc.svg";
import bento from "../assets/svg/projects/bento.svg";
import yot from "../assets/svg/projects/yot.svg";
import umis from "../assets/svg/projects/umis.svg";
import emblem from "../assets/svg/projects/emblem.svg";
import css from "../assets/svg/css.svg";

export const projectsData = {
  title: { en: "Projects", it: "Progetti" },
  projects: {
    en: [
      {
        id: 1,
        projectName: "AI Camera Security System",
        projectDesc:
          "We have built a camera security system that uses AI to detect humans automatically. We developed this project as part of our coursework for the Complex Systems course at the University of Camerino.",
        tags: ["NextJS", "NestJS", "Python", "YOLO Object detection"],
        code: "https://github.com/unicam-complex-system/camera-security-system-monorepo",
        demo: "https://youtu.be/qZGoS0hBMzI?si=PL1q8pf9rt52y3eI",
        image: css,
      },
      {
        id: 2,
        projectName: "Integrated Canine Data Commons",
        projectDesc:
          "This project was established to further research on human cancers by enabling comparative analysis with canine cancer (Dog Cancer).",
        tags: ["React", "Material UI", "GraphQL", "Storybook"],
        code: "",
        demo: "https://caninecommons.cancer.gov/#/",
        image: icdc,
      },
      {
        id: 3,
        projectName: "Bento",
        projectDesc:
          "This project provides a structure to enable groups to quickly stand up and then configure a data sharing environment for life science data - groups can use Bento to share data amongst themselves or with a larger community.",
        tags: ["React", "Material UI", "GraphQL"],
        code: "",
        demo: "https://bento-tools.org/",
        image: bento,
      },
      {
        id: 4,
        projectName: "Yot Technology",
        projectDesc:
          "This project is a corporate website for one of the companies that I have worked for.",
        tags: ["React", "Next JS", "Strapi"],
        code: "",
        demo: "https://www.yottechnology.com/",
        image: yot,
      },
      {
        id: 5,
        projectName: "Water Utility Management System",
        projectDesc:
          "This project is a web application that enables the Ministry of Water and Energy of Ethiopia to  for logging and analysing water consumption data, helping professional water managers to monitor and operate water meters sustainably and efficiently.",
        tags: ["React", "Material UI", "ASP.NET"],
        code: "",
        demo: "https://umis.ubaeth.com",
        image: umis,
      },
      {
        id: 6,
        projectName: "E-services",
        projectDesc:
          "This project is a web based application that enables individual and businesses to access the various services offerred by different the Ethiopian government institutions online.",
        tags: ["React", "Next JS", "Tailwind"],
        code: "",
        demo: "https://www.eservices.gov.et/",
        image: emblem,
      },
    ],
    it: [
      {
        id: 1,
        projectName: "AI Camera Security System",
        projectDesc:
          "Abbiamo creato un sistema di sicurezza con telecamera che utilizza l'intelligenza artificiale per rilevare automaticamente gli esseri umani. Abbiamo sviluppato questo progetto nell'ambito dei nostri corsi per il corso di Sistemi Complessi presso l'Università di Camerino.",
        tags: ["NextJS", "NestJS", "Python", "YOLO Object detection"],
        code: "https://github.com/unicam-complex-system/camera-security-system-monorepo",
        demo: "https://youtu.be/qZGoS0hBMzI?si=PL1q8pf9rt52y3eI",
        image: css,
      },
      {
        id: 2,
        projectName: "Integrated Canine Data Commons",
        projectDesc:
          "Questo progetto è stato istituito per approfondire la ricerca sui tumori umani consentendo l'analisi comparativa con il cancro canino (Dog Cancer).",
        tags: ["React", "Material UI", "GraphQL", "Storybook"],
        code: "",
        demo: "https://caninecommons.cancer.gov/#/",
        image: icdc,
      },
      {
        id: 3,
        projectName: "Bento",
        projectDesc:
          "Questo progetto fornisce una struttura per consentire ai gruppi di attivarsi rapidamente e quindi configurare un ambiente di condivisione dei dati per i dati delle scienze della vita: i gruppi possono utilizzare Bento per condividere i dati tra di loro o con una comunità più ampia.",
        tags: ["React", "Material UI", "GraphQL"],
        code: "",
        demo: "https://bento-tools.org/",
        image: bento,
      },
      {
        id: 4,
        projectName: "Yot Technology",
        projectDesc:
          "Questo progetto è un sito web aziendale per una delle aziende per cui ho lavorato.",
        tags: ["React", "Next JS", "Strapi"],
        code: "",
        demo: "https://www.yottechnology.com/",
        image: yot,
      },
      {
        id: 5,
        projectName: "Water Utility Management System",
        projectDesc:
          "Questo progetto è un'applicazione web che consente al Ministero dell'Acqua e dell'Energia dell'Etiopia di registrare e analizzare i dati sul consumo idrico, aiutando i gestori idrici professionisti a monitorare e gestire i contatori dell'acqua in modo sostenibile ed efficiente.",
        tags: ["React", "Material UI", "ASP.NET"],
        code: "",
        demo: "https://umis.ubaeth.com",
        image: umis,
      },
      {
        id: 6,
        projectName: "E-services",
        projectDesc:
          "Questo progetto è un'applicazione basata sul web che consente a individui e aziende di accedere online ai vari servizi offerti dalle diverse istituzioni governative etiopi.",
        tags: ["React", "Next JS", "Tailwind"],
        code: "",
        demo: "https://www.eservices.gov.et/",
        image: emblem,
      },
    ],
  },
  callToAction: { en: "View All", it: "Mostra tutto" },
  searchPrompt: { en: "Search project...", it: "Cerca progetto..." },
};
