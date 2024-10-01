import Datavisualization from "@/assets/images/singleservice/datavisualization.png";
import Datascience from "@/assets/images/singleservice/datascience.png";
import Dataconsulting from "@/assets/images/singleservice/dataconsulting.png";
import Dataengineering from "@/assets/images/singleservice/dataengineering.png";
import V_approach1 from "@/assets/images/datavisualization/approach1.png";
import V_approach2 from "@/assets/images/datavisualization/approach2.png";
import V_approach3 from "@/assets/images/datavisualization/approach3.png";
import V_approach4 from "@/assets/images/datavisualization/approach4.png";
import V_approach5 from "@/assets/images/datavisualization/approach5.png";
import S_approach1 from "@/assets/images/datascience/approach1.png";
import S_approach2 from "@/assets/images/datascience/approach2.png";
import S_approach3 from "@/assets/images/datascience/approach3.png";
import S_approach4 from "@/assets/images/datascience/approach4.png";
import S_approach5 from "@/assets/images/datascience/approach5.png";
import E_approach1 from "@/assets/images/dataengineering/approach1.png";
import E_approach2 from "@/assets/images/dataengineering/approach2.png";
import E_approach3 from "@/assets/images/dataengineering/approach3.png";
import E_approach4 from "@/assets/images/dataengineering/approach4.png";
import E_approach5 from "@/assets/images/dataengineering/approach5.png";
import E_approach6 from "@/assets/images/dataengineering/approach6.png";
import E_approach7 from "@/assets/images/dataengineering/approach7.png";
import E_approach8 from "@/assets/images/dataengineering/approach8.png";
import C_approach1 from "@/assets/images/dataconsulting/approach1.png";
import C_approach2 from "@/assets/images/dataconsulting/approach2.png";
import C_approach3 from "@/assets/images/dataconsulting/approach3.png";
import C_approach4 from "@/assets/images/dataconsulting/approach4.png";
import C_approach5 from "@/assets/images/dataconsulting/approach5.png";
import C_approach6 from "@/assets/images/dataconsulting/approach6.png";
import V_stage1 from "@/assets/images/datavisualization_process/stage1.png";
import V_stage2 from "@/assets/images/datavisualization_process/stage2.png";
import V_stage3 from "@/assets/images/datavisualization_process/stage3.png";
import V_stage4 from "@/assets/images/datavisualization_process/stage4.png";
import V_stage5 from "@/assets/images/datavisualization_process/stage5.png";
import S_stage1 from "@/assets/images/datascience_process/stage1.png";
import S_stage2 from "@/assets/images/datascience_process/stage2.png";
import S_stage3 from "@/assets/images/datascience_process/stage3.png";
import S_stage4 from "@/assets/images/datascience_process/stage4.png";
import S_stage5 from "@/assets/images/datascience_process/stage5.png";
import C_stage1 from "@/assets/images/dataconsulting_process/stage1.png";
import C_stage2 from "@/assets/images/dataconsulting_process/stage2.png";
import C_stage3 from "@/assets/images/dataconsulting_process/stage3.png";
import C_stage4 from "@/assets/images/dataconsulting_process/stage4.png";
import C_stage5 from "@/assets/images/dataconsulting_process/stage5.png";
import E_stage1 from "@/assets/images/dataengineering_process/stage1.png";
import E_stage2 from "@/assets/images/dataengineering_process/stage2.png";
import E_stage3 from "@/assets/images/dataengineering_process/stage3.png";
import E_stage4 from "@/assets/images/dataengineering_process/stage4.png";
import E_stage5 from "@/assets/images/dataengineering_process/stage5.png";

export const servicesdata = [
  {
    slug: "data-consulting",
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
    approach_title: "Mine your data. Empower your people.",
    approaches: [
      {
        imgSrc: C_approach1,
        title: "Data strategy assessment",
        description: [
          "What is the current state? What is the ideal future state? What are the gaps? What is the strategy to get there? Will it work?",
          "Our consulting teams will  understand you thoroughly and help devise the right strategy to achieve your goals.",
        ],
      },
      {
        imgSrc: C_approach2,
        title: "Data maturity model",
        description: [
          "Data maturity depends on a number of factors: data quality, availability, accessibility, organisation vision, agility, connecting insights to business outcomes etc.",
          "We bring time-tested frameworks to power your transformational data culture.",
        ],
      },
      {
        imgSrc: C_approach3,
        title: "Data science readiness",
        description: [
          "Predictive ML models need high-quality data, efficient pipelines, right tools, impactful use cases, change management strategy and more.",
          "We will audit your readiness and design the roadmap for your data science success.",
        ],
      },
      {
        imgSrc: C_approach4,
        title: "Data framework",
        description: [
          "Sustainable data culture depends on robust data frameworks, including the right people, processes and policies that govern your initiatives.",
          "Our experts will help accelerate your data journey, while giving you the agility to evolve with your needs and goals.",
        ],
      },
      {
        imgSrc: C_approach5,
        title: "Data and analytics roadmap",
        description: [
          "A strategy is only as good as the success of its implementation. Yet, only 8% of Chief Data Officer are measuring the financial value of their data analytics initiatives.",
          "Whether you are looking for insights or to monetize the data through a platform, we will build the right plan of action for you.",
        ],
      },
      {
        imgSrc: C_approach6,
        title: "Training and innovation",
        description: [
          "Poor data literacy is the no. 1 roadblock to creating a data-driven culture, finds Gartner. To democratize data, you need every stakeholder on board, enthusiastically.",
          "Our consultants will partner with you on training your teams and creating a culture of data-driven innovation.",
        ],
      },
    ],
    process_timeline: [
      "Initial consultation",
      "Scope the project",
      "Data interpretation",
      "Recommendation development",
      "Implementation planning",
    ],
    process: [
      {
        title: "Initial consultation",
        description:
          "Meet with the client to understand their business goals, challenges, and data-related needs. Determine the scope of the project and define the objectives.",
        imgSrc: C_stage1,
      },
      {
        title: "Scope the project",
        description:
          "Determine the specific areas and aspects of data that need to be addressed. Define the project boundaries, including the types of data, sources, and timeframes involved.Collaborate with clients to identify the specific data elements, variables, and metrics needed to achieve the project objectives. ",
        imgSrc: C_stage2,
      },
      {
        title: "Data interpretation and insights",
        description:
          "Analyze the results of the data analysis and modeling. Interpret the findings in the context of the client's business objectives and challenges. Identify key insights and opportunities for improvement.",
        imgSrc: C_stage3,
      },
      {
        title: "Recommendation development",
        description:
          "Analyze the results of the data analysis and modeling. Interpret the findings in the context of the client's business objectives and challenges. Identify key insights and opportunities for improvement.",
        imgSrc: C_stage4,
      },
      {
        title: "Implementation planning",
        description:
          "Collaborate with the client to develop an implementation plan for the recommended strategies. Define key milestones, timelines, and resource requirements. Consider potential risks and mitigation strategies.",
        imgSrc: C_stage5,
      },
    ],
  },
  {
    slug: "data-engineering",
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
    approach_title: "Set a robust foundation for your data culture",
    approaches: [
      {
        imgSrc: E_approach1,
        title: "Data discovery",
        description: [
          "Elevate your business with our advanced ML services. Retrainable models replace outdated systems, automating processes and revealing insights.",
          "Our tailored ML solutions are designed to fit your unique needs, empowering you to make data-driven decisions that drive growth. Stay ahead of the competition and embrace the future of machine learning. ",
        ],
      },
      {
        imgSrc: E_approach2,
        title: "Data architecture",
        description: [
          "Explore the might of decision science with our comprehensive services. From personalized recommendations to advanced simulations, we offer cutting-edge solutions for business growth. Our expert team leverages data-driven insights and algorithms for tailored recommendations, boosting engagement and revenue.",
          "With robust simulation capabilities, test scenarios and decide confidently. Optimize operations, resources, and strategies for peak efficiency and goal attainment.",
        ],
      },
      {
        imgSrc: E_approach3,
        title: "Data modeling",
        description: [
          "Simplify and enhance ML operations with our MLops services. Our expert team specializes in deploying and managing ML microservices, ensuring seamless model integration into your infrastructure.",
          "With our comprehensive MLops solutions, you can automate every stage of the model's lifecycle – from training and deployment to continuous monitoring, ensuring faster and more dependable delivery of AI-powered applications. ",
        ],
      },
      {
        imgSrc: E_approach4,
        title: "Data profiling",
        description: [
          "Unleash deep learning's power with our comprehensive services. From conversational AI to cutting-edge computer vision, we bring AI's future to you. Our experts specialize in developing and deploying advanced models for intelligent decision-making. ",
          "Whether you need natural language processing for conversational interfaces or computer vision for image analysis, we have the expertise to transform your business. ",
        ],
      },
      {
        imgSrc: E_approach5,
        title: "Data pipeline",
        description: [
          "Ignite your creativity using our cutting-edge generative AI services. Dive into boundless possibilities of image, audio, and video generation. ",
          "Whether you're crafting lifelike images, unique soundtracks, or compelling visual stories, our technology will transform your content creation process. Embrace the future of generative AI and tap into your limitless creative potential.",
        ],
      },
      {
        imgSrc: E_approach6,
        title: "Data LakeHouse",
        description: [
          "Unleash deep learning's power with our comprehensive services. From conversational AI to cutting-edge computer vision, we bring AI's future to you. Our experts specialize in developing and deploying advanced models for intelligent decision-making. ",
          "Whether you need natural language processing for conversational interfaces or computer vision for image analysis, we have the expertise to transform your business. ",
        ],
      },
      {
        imgSrc: E_approach7,
        title: "Data Warehouse Modernization",
        description: [
          "Ignite your creativity using our cutting-edge generative AI services. Dive into boundless possibilities of image, audio, and video generation. ",
          "Whether you're crafting lifelike images, unique soundtracks, or compelling visual stories, our technology will transform your content creation process. Embrace the future of generative AI and tap into your limitless creative potential.",
        ],
      },
      {
        imgSrc: E_approach8,
        title: "Data governance",
        description: [
          "Unleash deep learning's power with our comprehensive services. From conversational AI to cutting-edge computer vision, we bring AI's future to you. Our experts specialize in developing and deploying advanced models for intelligent decision-making. ",
          "Whether you need natural language processing for conversational interfaces or computer vision for image analysis, we have the expertise to transform your business. ",
        ],
      },
    ],
    process_timeline: [
      "Identify the problem",
      "Gathering the data",
      "Transforming the data",
      "Managing data pipelines",
      "Grant client access",
    ],
    process: [
      {
        title: "Identify the business problem",
        description:
          "Firstly our engineering team will identify the exact business problem and they will provide  solutions. This will help us to determine a clear understanding of the data. ",
        imgSrc: E_stage1,
      },
      {
        title: "Gathering, cleaning & preprocessing the data",
        description:
          "Once identifying the data the next step is to collect it. This may involve extracting data from multiple sources, including databases, files, APIs, etc. To ensure it is consistent and ready for analysis. This may involve removing duplicates, filling in missing values, and transforming data into a common format. This will help us to identify areas where data cleaning or data enrichment may be needed.",
        imgSrc: E_stage2,
      },
      {
        title: "Storing & transforming the data",
        description:
          "Once the data has been cleaned and preprocessed, store it in a format that is easily accessible to clients. This may involve storing the data in a data warehouse, data lake, or other database. After storing the data, we will transform it to make it more useful for analysis. ",
        imgSrc: E_stage3,
      },
      {
        title: "Building & maintaining data pipelines",
        description:
          "Once transformed data, the next step is to build data pipelines to automate the collection, preprocessing, storage, and transformation of data. This will ensure that the data is always up-to-date and ready for analysis. Then we monitor and maintain them to ensure that they are running smoothly and efficiently.",
        imgSrc: E_stage4,
      },
      {
        title: "Provide access to clients",
        description:
          "Finally, the last step is to give  data access to theclients so that they can analyze it. This may involve building dashboards or other tools that allow our clients to easily access and analyze the data.",
        imgSrc: E_stage5,
      },
    ],
  },
  {
    slug: "data-visualization",
    title: "Data Visualization",
    herosection: {
      imgSrc: Datavisualization,
      heading: ["Not everyone can ‘read’ data.", " Are you making it usable?"],
      description:
        "Datakulture’s data and analytics teams build dashboards and reports that make insights easy to understand and take action on.",
    },
    approach_title: "Bring data to life, make insights actionable",
    approaches: [
      {
        imgSrc: V_approach1,
        title: "UX-driven data visualization",
        description: [
          "Organizations often start their visualization journeys with the data at hand. This renders insights unusable because it doesn't consider the needs of the user.",
          "Our UX-driven visualization teams start with the user in mind. We identify the business case and visualize data to serve that.",
        ],
      },
      {
        imgSrc: V_approach2,
        title: "Metrics that matter",
        description: [
          "Not all insights are meaningful or useful. A good data analytics program should separate the wheat from the shaf and focus on business goals.",
          "We focus on metrics that matter. We understand business goals and leverage data visualization to accelerate progress.",
        ],
      },
      {
        imgSrc: V_approach3,
        title: "Data-driven storytelling",
        description: [
          "Data, in and of itself, is an abstract. It is the narrative that creates emotion and eventually action.",
          "We bring together contextual and related data from across sources to tell powerful stories that kindle inspired action.",
        ],
      },
      {
        imgSrc: V_approach4,
        title: "Modernizing data visualization strategies",
        description: [
          "Revolutionizing the data landscape with cutting-edge visualization strategies. We transform intricate data sets into interactive, easy-to-understand visuals, empowering your team to make data-driven decisions and unlock new opportunities for growth.",
        ],
      },
      {
        imgSrc: V_approach5,
        title: "Tailored embedded solutions",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus leo et velit ullamcorper congue. Nam vel neque enim. Nullam at pretium sapien. Vestibulum mattis erat mauris, vitae fermentum purus venenatis vitae. Proin massa lectus, maximus eget aliquam commodo, luctus vel mi. Aenean posuere ligula sed maximus lobortis.",
        ],
      },
    ],
    process_timeline: [
      "Performing POC",
      "Define requirements &model",
      "Design & develop the dashboard",
      "Data analysis and interpretation",
      "Dashboard testing and refinement",
    ],
    process: [
      {
        title: "Performing POC",
        description:
          "We determine the requirements needed to accomplish the POC, including any hardware, software, or other resources needed. Also we gather the necessary resources, including any equipment or software needed to execute the POC also we create a report that summarizes the results of the POC and provides recommendations for moving forward. The report should include the success criteria, key findings, and next steps for implementation.",
        imgSrc: V_stage1,
      },
      {
        title: "Identify the project requirements & define the data model",
        description:
          "We understand the goals and objectives of the project, as well as the data sources. Also identify the data sources and define the data model by selecting the appropriate data sets, tables, and fields needed for the dashboard.",
        imgSrc: V_stage2,
      },
      {
        title: "Design the dashboard layout & develop the dashboard",
        description:
          "Analyze the results of the data analysis and modeling. Interpret the findings in the context of the client's business objectives and challenges. Identify key insights and opportunities for improvement.",
        imgSrc: V_stage3,
      },
      {
        title: "Analyze and interpret the data",
        description:
          "After developing the dashboard we analyze and interpret the data. Also we Identify patterns, trends, and outliers, and try to explain the insights we  found. This will help us to better understand the story behind the data and communicate it effectively to others.",
        imgSrc: V_stage4,
      },
      {
        title: "Test and refine the dashboard",
        description:
          "Test the dashboard with sample data to ensure that it meets the project requirements, and regularly maintain and update the dashboard to ensure that it continues to meet the needs of the audience and client.",
        imgSrc: V_stage5,
      },
    ],
  },

  {
    slug: "data-science",
    title: "Data Science",
    herosection: {
      imgSrc: Datascience,
      heading: ["The future is here.", " Are you ready?"],
      description:
        "Datakulture's augmented analytics and data science teams leverage the latest in machine learning and artificial intelligence to prepare you for the future.",
    },
    approach_title: "Do more with data, ML & AI",
    approaches: [
      {
        imgSrc: S_approach1,
        title: "Machine learning",
        description: [
          "Elevate your business with our advanced ML services. Retrainable models replace outdated systems, automating processes and revealing insights.",
          "Our tailored ML solutions are designed to fit your unique needs, empowering you to make data-driven decisions that drive growth. Stay ahead of the competition and embrace the future of machine learning. ",
        ],
      },
      {
        imgSrc: S_approach2,
        title: "Decision sciences",
        description: [
          "Explore the might of decision science with our comprehensive services. From personalized recommendations to advanced simulations, we offer cutting-edge solutions for business growth. Our expert team leverages data-driven insights and algorithms for tailored recommendations, boosting engagement and revenue.",
          "With robust simulation capabilities, test scenarios and decide confidently. Optimize operations, resources, and strategies for peak efficiency and goal attainment.",
        ],
      },
      {
        imgSrc: S_approach3,
        title: "MLops",
        description: [
          "Simplify and enhance ML operations with our MLops services. Our expert team specializes in deploying and managing ML microservices, ensuring seamless model integration into your infrastructure.",
          "With our comprehensive MLops solutions, you can automate every stage of the model's lifecycle – from training and deployment to continuous monitoring, ensuring faster and more dependable delivery of AI-powered applications. ",
        ],
      },
      {
        imgSrc: S_approach4,
        title: "Deep learning",
        description: [
          "Unleash deep learning's power with our comprehensive services. From conversational AI to cutting-edge computer vision, we bring AI's future to you. Our experts specialize in developing and deploying advanced models for intelligent decision-making. ",
          "Whether you need natural language processing for conversational interfaces or computer vision for image analysis, we have the expertise to transform your business. ",
        ],
      },
      {
        imgSrc: S_approach5,
        title: "Generative AI",
        description: [
          "Ignite your creativity using our cutting-edge generative AI services. Dive into boundless possibilities of image, audio, and video generation. ",
          "Whether you're crafting lifelike images, unique soundtracks, or compelling visual stories, our technology will transform your content creation process. Embrace the future of generative AI and tap into your limitless creative potential.",
        ],
      },
    ],
    process_timeline: [
      "Business discovery",
      "Project scoping",
      "Analysis and design",
      "Managing data pipelines",
      "Feedback and deployment",
    ],
    process: [
      {
        title: "Business discovery",
        description:
          "The initial call is about getting you to explain your problems or a specific business requirement you have. We get every business stakeholder involved for a complete contextual understanding.",
        imgSrc: S_stage1,
      },
      {
        title: "Project scoping",
        description:
          "The project officially kickstarts here with us sharing a brief project documentation with you. This documentation carries nitty-gritty details of the project, assured deliverables, and timelines. You will also receive a report on your current data availability, its data science scope, limitations it poses, along with an entire summary.",
        imgSrc: S_stage2,
      },
      {
        title: "Analysis & design",
        description:
          "Data availability is checked. Statistical analysis is performed to further interpret the data and its underlying patterns. The right data science model for development is also chosen.",
        imgSrc: S_stage3,
      },
      {
        title: "Model development",
        description:
          "This stage involves pre-processing of the data where the required data is collected from your systems and formatted to suit the modelling requirements. Once the right datasets are ready, features are built based on them. Then, the machine learning model is built based on your needs, tested, and validated. ",
        imgSrc: S_stage4,
      },
      {
        title: "Feedback & deployment",
        description:
          "Your stakeholders get to see, use, test, and provide feedback. As you are satisfied with the model, we deploy it on your end for a streamlined insights delivery from there on.",
        imgSrc: S_stage5,
      },
    ],
  },
];
