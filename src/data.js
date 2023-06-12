const skillsList = [
    { title: "React JS", value: 75 },
    // { title: "Next js", value: 80 },
    { title: "Material UI", value: 80 },
    { title: "Styled components", value: 80 },
    {title: "Vue JS", value:60},
    { title: "Node JS ", value: 60 },
   
];
const covid = "https://github.com/jadesolaadeagbo/covid19-Tracker";
const covid_live = "https://covid-19-tracker-b3746.web.app/";
const loruki = "https://github.com/jadesolaadeagbo/Loruki--"
const loruki_live =" http://loruki-murex.vercel.app/"
const spotify = "https://github.com/jadesolaadeagbo/spotify_clone"
const spotify_live = "https://spotify-clone-phi.vercel.app"
const votechain = "https://github.com/jadesolaadeagbo/Votechain"
const votechain_live = "https://votechain.vercel.app/"
const sample = "https://github.com/jadesolaadeagbo/sample-portfolio"
const sample_live = "https://iykee.netlify.app"
const shopnation = "https://github.com/jadesolaadeagbo/ShopNation-Ecommerce.git";
const shopnation_live = "https://shopnation.netlify.app/";
const netflixreact = "https://github.com/jadesolaadeagbo/Netflix-clone-with-ReactJs.git";
const netflixreact_live="https://netflix-clone-rubies21.vercel.app/";
const netflixvue ="https://github.com/jadesolaadeagbo/Netflix-clone-with-vueJs.git";
const netflixvue_live="https://netflix-clone-with-vue-js.vercel.app/";


const projectList = [
    {
        id: 1,
        title: "Covid-19 Tracker",
        technologies: ["HTML","CSS","React JS", "Node JS"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.postimg.cc/SsZmn7Kg/covidtracker.png" ,
        github: covid,
        live_preview: covid_live,
    },
    {
        id: 2,
        title: "Loruki Website",
        technologies: ["HTML", "CSS", "Material UI"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://i.postimg.cc/2jqm50Mq/loruki.png",
        github: loruki,
        live_preview:loruki_live
    },
    {
        id: 3,
        title: "Spotify Clone",
        technologies: ["React JS", "Node JS", ""],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://i.postimg.cc/Ls5LNv7N/spotify-clone.png",
        github:spotify,
        live_preview:spotify_live

    },
    {
        id: 4,
        title: "Votechain App",
        technologies: ["Next JS", "Node JS", "Solidity"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://i.postimg.cc/zX9RQT8m/votechain.png",
        github:votechain,
        live_preview:votechain_live
    },

    {
        id: 5,
        title: "Sample portfolio app",
        technologies: ["Vue JS", "Node JS"],
        backgroundImage:"https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://i.postimg.cc/KvM1xD3p/sample.png",
        github:sample,
        live_preview:sample_live
        
    },
      {
        id: 6,
        title: "ShopNation E-commerce",
        technologies: ["Vue JS"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.postimg.cc/0NBDWVHx/shopnation.png" ,
        github: shopnation,
        live_preview: shopnation_live,
    },
    {
        id: 7,
        title: "Netflix clone with React Js",
        technologies: ["React JS"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.postimg.cc/J0m4qY2r/Screenshot-1587.png" ,
        github: netflixreact,
        live_preview: netflixreact_live,
    },
    {
        id: 8,
        title: "Netflix Clone with Vue Js",
        technologies: ["Vue JS"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.postimg.cc/4dmYxLDT/Screenshot-1586.png" ,
        github: netflixvue,
        live_preview: netflixvue_live,
    },

];

const experienceList = [
    {
        id: 0,
        company: "HNG Internships",
        links: {
            website: "https://training.zuri.team",
            
        },
    },
    {
        id: 1,
        company: "Zuri Internships",
        links: {
            website: "https://training.zuri.team",
            instagram: "https://www.instagram.com/zuriinternship",
        },
    },
];

export { skillsList, projectList, experienceList };
