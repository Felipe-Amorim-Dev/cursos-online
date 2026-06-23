import imgCsharp from "../assets/img_csharp.png";
import imgDevops from "../assets/img_devops.png";
import imgSql from "../assets/img_sql.png";
import imgSeguranca from "../assets/img_seguranca.png";
import imgPy from "../assets/img_py.png";
import imgBi from "../assets/img_bi.png";
import imgReact from "../assets/img_react.png";
import imgNode from "../assets/img_node.png";
import imgAws from "../assets/img_aws.png";

export type Cursos = {
  id: number;
  title: string;
  description: string;
  level: string;
  hours: string;
  rating: string;
  image: string;
  tag?: string;
};

export const cursos: Cursos[] = [
  {
    id: 1,
    title: "Desenvolvimento FullStack",
    description: "Aprenda do front-end ao back-end e construa aplicações completas.",
    level: "Iniciante ao avançado",
    hours: "120h",
    rating: "4.9",
    image: imgCsharp,
    tag: "Mais procurado",
  },
  {
    id: 2,
    title: "DevOps na prática",
    description: "CI/CD, Docker, Kubernetes, Terraform e automação em cloud.",
    level: "Intermediário ao avançado",
    hours: "48h",
    rating: "4.8",
    image: imgDevops,
    tag: "Novidade",
  },
  {
    id: 3,
    title: "Banco de Dados SQL e NoSql",
    description: "Modelagem, SQL, MySQL, PostgreSQL, MongoDB e muito mais.",
    level: "Iniciante ao intermediário",
    hours: "40h",
    rating: "4.6",
    image: imgSql,
  },
  {
    id: 4,
    title: "Segurança da informação",
    description: "Fundamentos de segurança, rede, hacking ético e boas práticas.",
    level: "Intermediário",
    hours: "36h",
    rating: "4.8",
    image: imgSeguranca,
  },
  {
    id: 5,
    title: "Inteligencia artificial com Python",
    description: "Machine Learning, Deep Learning e IA aplicada ao mundo real.",
    level: "Intermediário",
    hours: "60h",
    rating: "4.9",
    image: imgPy,
  },
  {
    id: 6,
    title: "Análise de dados com Power BI",
    description: "Transforme dados em insights poderosos e relatórios profissionais.",
    level: "Iniciante",
    hours: "28h",
    rating: "4.3",
    image: imgBi,
  },
  {
    id: 7,
    title: "React.js do zero ao avançado",
    description: "Crie interfaces modernas, componentes, rotas e consumo de APIs.",
    level: "Iniciante ao intermediário",
    hours: "120h",
    rating: "4.7",
    image: imgReact,
  },
  {
    id: 8,
    title: "Node.Js & APIs REST",
    description: "Desenvolva APIs robustas, autenticação, testes e banco de dados.",
    level: "Iniciante ao intermediário",
    hours: "80h",
    rating: "4.7",
    image: imgNode,
  },
  {
    id: 9,
    title: "AWS Cloud Essentials",
    description: "Fundamentos da nuvem AWS, EC2, S3, IAM e muito mais.",
    level: "Intermediário",
    hours: "24h",
    rating: "4.3",
    image: imgAws,
  },
];