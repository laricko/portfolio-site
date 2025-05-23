'use client'

import Link from "next/link";
import { ProjectCard } from './projectCard';


const projects = [
  {
    title: "Zen Chain Habit Tracker",
    images: ["/portfolio-site/images/zen-chain-1.jpg", "/portfolio-site/images/zen-chain-2.jpg"],
    description: `
      A simple and helpful Telegram bot that lets users create and track habits through chat. 
      Users can add a habit, set a goal, and choose how often they want to work on it (daily, weekly, or monthly). 
      The bot guides them step by step and saves the data. 
      This project shows how I build user-friendly tools with clean code, async support, and good structure.
      <br /><br />
      <strong>Tech Stack:</strong><br />
      <code>Python</code> – core logic and bot development<br />
      <code>python-telegram-bot</code> – handling Telegram messages and conversations<br />
      <code>PostgreSQL</code> – storing user and habit data<br />
      <code>SQLAlchemy</code> – interacting with the database<br />
      <code>Docker</code> – containerizing the app for easy setup and deployment<br />
      <code>Cron</code> – running background tasks (like habit progress tracking)
      <br /><br />
      <a href="https://github.com/laricko/zen-chain-habit-tracker" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">
        View the code on GitHub
      </a>
    `,
  },
  {
    title: "Microservices Example",
    images: null,
    description: `
      A boilerplate project demonstrating microservices architecture using Python. It includes an API gateway built with FastAPI that routes requests to individual services via RabbitMQ. Each service is containerized with Docker and communicates asynchronously through message queues.
      <br /><br />
      <strong>Tech Stack:</strong><br />
      <code>FastAPI</code> – API gateway handling client requests<br />
      <code>RabbitMQ</code> – message broker for inter-service communication<br />
      <code>Python</code> – service development<br />
      <code>Docker</code> – containerization of services<br />
      <code>Docker Compose</code> – orchestration of multi-container applications
      <br /><br />
      <a href="https://github.com/laricko/microservices-example" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">
        View the code on GitHub
      </a>
    `,
  },
];


export const ProjectsList = () => {
  return (
    <main className="px-96 py-10 text-gray-300">

      <div className="mb-12 text-4xl">
        <Link href="/" className="text-white">Back</Link>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            images={project.images}
            description={project.description}
          />
        ))}
      </div>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className="mt-10 text-center">
        <a
          href="https://github.com/laricko"
          target="_blank"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Go to github
        </a>
      </div>

    </main>
  );
};
