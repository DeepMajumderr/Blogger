export const blogs = [
  {
    id: 1,
    title: "The Rise of JavaScript",
    info: "JavaScript has evolved from a simple scripting language to the backbone of modern web development. With frameworks like React, Angular, and Vue, it powers most interactive websites. The community has grown rapidly and continues to innovate. Today, JavaScript is not limited to the browser—it runs on servers with Node.js too. It’s a must-learn language for any web developer."
  },
  {
    id: 2,
    title: "Getting Started with React",
    info: "React is a powerful JavaScript library for building user interfaces. It uses components to create reusable UI elements. With the virtual DOM, React offers fast rendering and great performance. Hooks make managing state easier and cleaner. It's maintained by Meta and has a huge ecosystem of tools and libraries."
  },
  {
    id: 3,
    title: "What is Tailwind CSS?",
    info: "Tailwind CSS is a utility-first CSS framework. It allows rapid UI development without writing custom CSS. You can compose custom designs by applying utility classes directly in your HTML. It promotes consistency and makes responsive design easy. Tailwind is highly customizable and integrates well with React and Vue."
  },
  {
    id: 4,
    title: "Understanding Async/Await in JS",
    info: "Async/await makes working with asynchronous code in JavaScript simpler and more readable. Instead of chaining promises with `.then()`, you can write code that looks synchronous. It improves error handling using `try/catch`. However, async functions always return promises, so understanding promises is still crucial."
  },
  {
    id: 5,
    title: "How Git Works Under the Hood",
    info: "Git is a distributed version control system that tracks changes in source code. It uses snapshots and hashes to manage versions efficiently. Each commit stores a snapshot of the project and links to a previous commit. Git branches and merges help manage feature development. Mastering Git is key for collaboration."
  },
  {
    id: 6,
    title: "Tips for Better CSS Architecture",
    info: "Writing scalable CSS involves using modular styles and proper naming conventions. Consider using BEM or utility-first frameworks. Keep specificity low and avoid deep nesting. Use variables and consistent spacing systems. Organize code in layers: base, layout, components, and utilities."
  },
  {
    id: 7,
    title: "Python vs JavaScript: A Comparison",
    info: "Python is known for its simplicity and is great for data science and scripting. JavaScript is dominant in web development. Both have large communities and tons of libraries. Python is better for machine learning, while JS excels at building web interfaces. Choosing one depends on your project goals."
  },
  {
    id: 8,
    title: "Getting Started with Node.js",
    info: "Node.js allows JavaScript to run outside the browser. It's widely used for building backend applications and APIs. Node uses a non-blocking, event-driven architecture. npm, the Node package manager, offers thousands of reusable packages. Express.js is a popular framework built on Node."
  },
  {
    id: 9,
    title: "What is REST API?",
    info: "A REST API allows different systems to communicate using HTTP methods like GET, POST, PUT, and DELETE. It follows stateless principles and uses JSON for data exchange. RESTful APIs are easy to integrate and widely adopted in web development. Authentication often uses tokens or sessions."
  },
  {
    id: 10,
    title: "Deploying Your App with Vercel",
    info: "Vercel simplifies frontend deployment with Git integration. Just push your code to GitHub, and it auto-deploys. It supports frameworks like Next.js, React, and Vue out of the box. You get fast global CDN, serverless functions, and preview links. Vercel is great for modern frontend teams."
  },
  {
    id: 11,
    title: "State Management in React",
    info: "Managing state in React can be done using useState, useReducer, or context API. For larger apps, tools like Redux or Zustand help. Proper state management improves performance and readability. Lifting state up and separating UI from logic are key best practices."
  },
  {
    id: 12,
    title: "Responsive Design Best Practices",
    info: "A responsive website adapts to different screen sizes using media queries and flexible layouts. Use percentage widths and relative units. Consider mobile-first design for better performance. Test on various devices to ensure usability. Frameworks like Tailwind make it easier to implement."
  },
  {
    id: 13,
    title: "The Power of TypeScript",
    info: "TypeScript adds type safety to JavaScript. It helps catch bugs at compile time and improves IDE support. TypeScript supports classes, interfaces, and generics. It’s great for large projects with multiple developers. Popular tools like React and Next.js have first-class TypeScript support."
  },
  {
    id: 14,
    title: "Understanding useEffect in React",
    info: "The `useEffect` hook is used to handle side effects in React, like fetching data or subscribing to events. It replaces lifecycle methods like componentDidMount. Always specify dependencies correctly to avoid infinite loops. Cleanup functions help manage memory and unsubscriptions."
  },
  {
    id: 15,
    title: "Why Learn GitHub Actions?",
    info: "GitHub Actions automate workflows like testing and deployment. You define actions in YAML files that run on GitHub’s infrastructure. It’s great for CI/CD, linting code, or publishing to npm. GitHub Actions integrates well with Docker, AWS, and more. Automating tasks saves time and reduces errors."
  },
  {
    id: 16,
    title: "Build a Simple Portfolio Website",
    info: "Start with a clean HTML/CSS layout and showcase your projects. Use responsive design to support all devices. Add animations with CSS or JavaScript for visual appeal. Deploy it using GitHub Pages, Netlify, or Vercel. A personal portfolio is essential for job seekers and freelancers."
  },
  {
    id: 17,
    title: "Working with Forms in React",
    info: "Handling forms in React requires managing input values using useState. Controlled components ensure inputs reflect the component state. Libraries like Formik and React Hook Form simplify validation. Always provide error messages and feedback for a better UX."
  },
  {
    id: 18,
    title: "What is a Progressive Web App (PWA)?",
    info: "PWAs combine the best of web and mobile apps. They work offline, can be installed on devices, and load fast. Service workers manage caching and background sync. PWAs improve user experience and retention. Tools like Workbox make building PWAs easier."
  },
  {
    id: 19,
    title: "The Basics of Web Accessibility",
    info: "Accessibility ensures your website is usable by everyone, including people with disabilities. Use semantic HTML and ARIA attributes. Provide text alternatives for images. Ensure keyboard navigation and proper color contrast. Accessible design improves usability for all users."
  },
  {
    id: 20,
    title: "Dark Mode in Web Apps",
    info: "Dark mode enhances readability and reduces eye strain in low-light environments. Use CSS variables and media queries to implement it. Many apps offer a toggle to switch themes. Dark mode can also improve battery life on OLED screens."
  },
  {
    id: 21,
    title: "10 VS Code Extensions Every Dev Needs",
    info: "VS Code extensions boost productivity and improve workflow. Must-haves include Prettier, ESLint, GitLens, Live Server, and Path Intellisense. Extensions can improve performance, collaboration, and debugging. Choose only what you need to avoid clutter."
  },
  {
    id: 22,
    title: "Backend vs Frontend Development",
    info: "Frontend deals with the UI and user experience using HTML, CSS, and JS. Backend handles server logic, databases, and APIs. Full-stack developers work on both ends. Each role requires different tools and mindsets. Collaboration between the two is crucial for any app."
  },
  {
    id: 23,
    title: "What is Docker?",
    info: "Docker is a tool for containerizing applications. It ensures your app runs the same in every environment. Containers are lightweight and fast to spin up. Dockerfiles define how containers are built. Popular in DevOps, Docker improves deployment consistency."
  },
  {
    id: 24,
    title: "How to Use Firebase Authentication",
    info: "Firebase Auth provides secure login with email/password, Google, and more. It's easy to integrate with React. It handles user sessions, password reset, and email verification. Firebase offers a simple SDK and great documentation. Ideal for MVPs and small apps."
  },
  {
    id: 25,
    title: "React Router: A Quick Guide",
    info: "React Router enables navigation in single-page apps. Define routes using `<Route>` and wrap with `<BrowserRouter>`. Use `Link` or `NavLink` for navigation. Dynamic routing supports parameters and nested routes. It's essential for any multi-page React app."
  },
  {
    id: 26,
    title: "Understanding HTTP Status Codes",
    info: "HTTP status codes tell you what happened with a request. 200 means success, 404 means not found, and 500 means server error. Knowing these helps with debugging and building APIs. They are part of every HTTP response from a server."
  },
  {
    id: 27,
    title: "Introduction to MongoDB",
    info: "MongoDB is a NoSQL database that stores data in JSON-like documents. It’s schema-less, flexible, and easy to scale. It integrates well with Node.js. You can use Mongoose for schema validation. Ideal for dynamic applications and rapid development."
  },
  {
    id: 28,
    title: "Getting Started with Next.js",
    info: "Next.js is a React framework for building full-stack apps. It supports server-side rendering, static site generation, and API routes. With file-based routing and image optimization, it simplifies complex tasks. Vercel is its official hosting platform."
  },
  {
    id: 29,
    title: "How the Internet Works",
    info: "The internet is a network of networks connected by routers and switches. When you type a URL, your browser sends a request to a DNS server, finds the IP, and connects to the server. HTTP is used to fetch data. Understanding this helps build better web apps."
  },
  {
    id: 30,
    title: "Learning DSA with JavaScript",
    info: "Data Structures and Algorithms (DSA) are essential for coding interviews. You can practice arrays, stacks, queues, trees, and graphs using JavaScript. LeetCode and HackerRank offer great practice problems. Understanding time and space complexity is crucial."
  }
]
