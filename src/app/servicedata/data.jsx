import Datavisualization from "@/assets/images/singleservice/datavisualization.png";
import Datascience from "@/assets/images/singleservice/datascience.png";
import Dataconsulting from "@/assets/images/singleservice/dataconsulting.png";
import Dataengineering from "@/assets/images/singleservice/dataengineering.png";

export const servicesdata = [
  {
    id: "data-consulting",
    title: "Data Consulting",
    herosection: {
      imgSrc: Dataconsulting,
      heading: [
        "Creating a data culture is a journey.",
        " How prepared are you?",
      ],
      description:
        "Datakulture’s industry-leading consulting teams will gear you up and accelerate your outcomes.",
    },
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    herosection: {
      imgSrc: Dataengineering,
      heading: [
        "Enterprise data is complex.",
        " Do you have systems to manage it?",
      ],
      description:
        "Datakulture’s engineering teams will build systems that are customized for your ambitious goals to power your business.",
    },
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    herosection: {
      imgSrc: Datavisualization,
      heading: ["Not everyone can ‘read’ data.", " Are you making it usable?"],
      description:
        "Datakulture’s data and analytics teams build dashboards and reports that make insights easy to understand and take action on.",
    },
  },
  {
    id: "data-science",
    title: "Data Science",
    herosection: {
      imgSrc: Datascience,
      heading: ["The future is here.", " Are you ready?"],
      description:
        "Datakulture's augmented analytics and data science teams leverage the latest in machine learning and artificial intelligence to prepare you for the future.",
    },
  },
];
