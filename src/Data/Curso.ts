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
    image: "/courses/fullstack.jpg",
    tag: "Mais procurado",
  },
  {
    id: 2,
    title: "DevOps na prática",
    description: "CI/CD, Docker, Kubernetes, Terraform e automação em cloud.",
    level: "Intermediário ao avançado",
    hours: "48h",
    rating: "4.8",
    image: "/courses/devops.jpg",
    tag: "Novidade",
  },
  {
    id: 3,
    title: "Banco de Dados SQL e NoSql",
    description: "Modelagem, SQL, MySQL, PostgreSQL, MongoDB e muito mais.",
    level: "Iniciante ao intermediário",
    hours: "40h",
    rating: "4.6",
    image: "/courses/database.jpg",
  },
  {
    id: 4,
    title: "Segurança da informação",
    description: "Fundamentos de segurança, rede, hacking ético e boas práticas.",
    level: "Intermediário",
    hours: "36h",
    rating: "4.8",
    image: "/courses/security.jpg",
  },
  {
    id: 5,
    title: "Inteligencia artificial com Python",
    description: "Machine Learning, Deep Learning e IA aplicada ao mundo real.",
    level: "Intermediário",
    hours: "60h",
    rating: "4.9",
    image: "/courses/ai.jpg",
  },
  {
    id: 6,
    title: "Análise de dados com Power BI",
    description: "Transforme dados em insights poderosos e relatórios profissionais.",
    level: "Iniciante",
    hours: "28h",
    rating: "4.3",
    image: "/courses/powerbi.jpg",
  },
  {
    id: 7,
    title: "React.js do zero ao avançado",
    description: "Crie interfaces modernas, componentes, rotas e consumo de APIs.",
    level: "Iniciante ao intermediário",
    hours: "120h",
    rating: "4.7",
    image: "/courses/react.jpg",
  },
  {
    id: 8,
    title: "Node.Js & APIs REST",
    description: "Desenvolva APIs robustas, autenticação, testes e banco de dados.",
    level: "Iniciante ao intermediário",
    hours: "80h",
    rating: "4.7",
    image: "/courses/node.jpg",
  },
  {
    id: 9,
    title: "AWS Cloud Essentials",
    description: "Fundamentos da nuvem AWS, EC2, S3, IAM e muito mais.",
    level: "Intermediário",
    hours: "24h",
    rating: "4.3",
    image: "/courses/aws.jpg",
  },
];