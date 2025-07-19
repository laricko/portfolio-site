"use client"

import { redirect } from "next/navigation";
import { useState } from "react";


const initText = `
  <p>Hello! I'm <strong>Lari Tsiuriumov</strong> a software engineer based in Moscow.</p>
  <p>I specialize in building backend or full-stack applications. I enjoy using technologies like <span>Python, Fastapi, Django, Typescript, React, Next.</span>.</p>
  <p>I create clean, efficient systems and love work with DDD, and cloud deployment.</p>
  <p>Type <code class="text-gray-400">help</code> to see interactive shell.</p>
`


const aboutText = `
  <p>I studied Computer Science and Math and started working in 2020 as a Python developer.</p>
  <p>I have hands-on experience across the entire Python ecosystem — from backend frameworks to DevOps tools.</p>
  <p>Recently gained experience with frontend technologies, including JavaScript, TypeScript, React, Next.js, and more.</p>
  <p>At my last job, I worked on a platform for monitoring construction using drone data. I worked on the backend, wrote tests, and had to work with the frontend also.</p>
  <p class="mb-2">Today I'm working on my own project.</p>

  <p>List of technologies I've used:</p>
  <p><strong>Languages:</strong> Python, JavaScript, TypeScript</p>
  <p><strong>Frameworks:</strong> Django, DRF, Flask, FastAPI, Aiohttp, React, Next.js</p>
  <p><strong>Databases:</strong> PostgreSQL, MySQL, Redis, Elasticsearch, MongoDB, Amazon RDS</p>
  <p><strong>Tools:</strong> Docker, Git, Linux, Nginx, Selenium, Celery, Kafka, RabbitMQ, AWS, CI/CD, Swagger, Pytest, ArgoCD, Grafana, Postman</p>
  <p><strong>Skills:</strong> Microservices, REST API, TDD, DDD, Serverless, Debugging, Clean Architecture</p>
`

const helpText = `
  <p>Available commands:</p>
  <ul class="list-none pl-2">
    <li><span>about</span> — Learn more about me and my background</li>
    <li><span>links</span> — My links</li>
    <li><span>resume</span> — Download my resume</li>
    <li><span>projects</span> — Will redirect you on projects page</li>
    <li><span>clear</span> — Clear the terminal output</li>
    <li><span>help</span> — Display this list of commands</li>
  </ul>
  <p>Type a command and press <kbd class="bg-gray-700 px-1 rounded text-sm">Enter</kbd></p>
`

const linksText = `
  <p>Here are some useful links:</p>
  <ul class="list-none pl-2">
    <li><span>[Email]</span> — <a href="mailto:laritsiuriumov@gmail.com">laritsiuriumov@gmail.com</a></li>
    <li><span>[Github]</span> — <a href="https://github.com/laricko" target="_blank">https://github.com/laricko</a></li>
    <li><span>[Telegram]</span> — <a href="https://t.me/regularsizedman" target="_blank">https://t.me/regularsizedman</a></li>
    <li><span>[Stackoverflow]</span> — <a href="https://stackoverflow.com/users/14486187/larick" target="_blank">https://stackoverflow.com/users/14486187/larick</a></li>
    <li><span>[Leetcode]</span> — <a href="https://leetcode.com/u/larick/" target="_blank">https://leetcode.com/u/larick/</a></li>

  </ul>
`;


export default function useTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([initText,]);

  const handleCommand = (cmd: string) => {
    cmd = cmd.toLocaleLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "") {
      setHistory(prev => [...prev, `> ${cmd}`, ""]);
      return;
    }

    if (cmd === "projects") {
      redirect("/projects")
    }

    if (cmd === "resume") {
      const link = document.createElement('a');
      link.href = '/portfolio-site/resume.pdf';
      link.download = 'Lari_Tsiuriumov_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setHistory(prev => [...prev, `> ${cmd}`, "Downloading resume..."]);
      return
    }

    const textCommands = {
      help: helpText,
      about: aboutText,
      links: linksText,
    }


    if (!(cmd in textCommands)) {
      setHistory(prev => [...prev, `> ${cmd}`, helpText]);
      return;
    }

    setHistory(prev => [...prev, `> ${cmd}`, (textCommands as any)[cmd]]); // eslint-disable-line
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return {
    input,
    setInput,
    history,
    handleKeyDown,
  };
}
