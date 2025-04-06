import { Github, Linkedin, Mail, ChevronDown, Gamepad2, Brain, Code } from 'lucide-react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(128,90,213,0.08),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_25%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(168,85,247,0.08),transparent_25%)] pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl"></div>
        
        <div className="space-y-8 relative">
          <div className="flex gap-4 mb-8">
            <Gamepad2 className="w-12 h-12 text-purple-500" />
            <Brain className="w-12 h-12 text-purple-400" />
            <Code className="w-12 h-12 text-purple-300" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider text-zinc-400">GAME DEV • AI • FULL STACK</h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              I'm Giacomo
              <span className="block text-5xl sm:text-7xl lg:text-8xl bg-[linear-gradient(to_right,#9333ea,#c084fc,#a855f7,#7e22ce)] bg-clip-text text-transparent animate-gradient bg-300% relative">
                Palmisani
                <span className="absolute -inset-x-2 inset-y-3 bg-purple-500/20 blur-2xl -z-10"></span>
              </span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl font-light">
            Merging the worlds of game development, artificial intelligence, and web technologies
            to create immersive digital experiences.
          </p>
          <div className="flex gap-6 pt-4">
            <a href="#" className="text-zinc-400 hover:text-purple-500 transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-purple-500 transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-purple-500 transition-colors duration-300">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <div className="pt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-zinc-600" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" id="projects">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_50%)]"></div>
        <h2 className="text-4xl font-bold mb-4 tracking-tight relative">Featured Work</h2>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl relative">
          A showcase of my latest projects in game development, AI integration, and full-stack applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <ProjectCard 
            title="AI-Powered Game Engine"
            description="A revolutionary game engine that uses machine learning for procedural content generation"
            image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            tags={['Unity', 'Python', 'TensorFlow']}
            link="#"
          />
          <ProjectCard 
            title="Neural Network Visualizer"
            description="Interactive 3D visualization of neural networks in real-time training"
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            tags={['React', 'Three.js', 'PyTorch']}
            link="#"
          />
          <ProjectCard 
            title="Neural Network Visualizer"
            description="Interactive 3D visualization of neural networks in real-time training"
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            tags={['React', 'Three.js', 'PyTorch']}
            link="#"
          />
          <ProjectCard 
            title="Neural Network Visualizer"
            description="Interactive 3D visualization of neural networks in real-time training"
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            tags={['React', 'Three.js', 'PyTorch']}
            link="#"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900/50 relative" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's Push Boundaries Together</h2>
          <p className="text-xl text-zinc-400 mb-12">
            Whether it's game development, AI integration, or full-stack solutions,
            I'm ready to bring your innovative ideas to life.
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 relative group"
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Mail className="w-5 h-5 relative" />
            <span className="relative">Start a Conversation</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-zinc-600 border-t border-zinc-800/50 relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <p>© 2025 Giacomo Palmisani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
