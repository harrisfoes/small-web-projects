import  adviceAppImage  from "../assets/advice_app_image.jpg"
import baseApparelImage from "../assets/base_apparel.jpg"
import resultSummaryImage from "../assets/result_summary.jpg"

const projects = [
  {
    name: "Advice Giving Application",
    image: adviceAppImage,
    isFeatured: false,
    tech: ["React", "TailwindCSS"],
    desc: "Are you Down in the dumps? Tired? Heartbroken? This advice giving app is perfect for you!",
    link: "https://harrisfoes.github.io/advice-app",
    code: "https://github.com/harrisfoes/advice-app",
  },
  {
    name: "Apparel Marketing Page",
    image: baseApparelImage,
    isFeatured: false,
    tech: ["React", "TailwindCSS"],
    desc: "An Exercise in responsive design. This is a practice piece for Tailwind and learning how to layout",
    link: "https://harrisfoes.github.io/base-apparel",
    code: "https://github.com/harrisfoes/base-apparel",
  },
  {
    name: "Results Summary",
    image: resultSummaryImage,
    isFeatured: false,
    tech: ["React", "TailwindCSS"],
    desc: "Don't underestimate this one. I did. It was a sweaty day.",
    link: "https://harrisfoes.github.io/result-summary",
    code: "https://github.com/harrisfoes/result-summary",
  },
];

export { projects };
