import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-purple-500/30">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3 text-zinc-100">
          {title}
          <a href={link} className="text-zinc-500 hover:text-purple-500 transition-colors duration-300">
            <ExternalLink className="w-5 h-5" />
          </a>
        </h3>
        <p className="text-zinc-400 mb-6 text-lg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm bg-purple-500/10 text-purple-300 font-medium border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;