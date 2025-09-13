'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Modern Penthouse Renovation",
      category: "Residential",
      location: "Manhattan, NY",
      year: "2024",
      duration: "6 months",
      team: "4 designers",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete transformation of a 3,000 sq ft penthouse featuring contemporary design elements and smart home integration."
    },
    {
      id: 2,
      title: "Corporate Headquarters Design",
      category: "Commercial",
      location: "San Francisco, CA",
      year: "2024",
      duration: "8 months",
      team: "6 designers",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Innovative office space design for a tech company, emphasizing collaboration and employee wellness."
    },
    {
      id: 3,
      title: "Luxury Hotel Suite Collection",
      category: "Hospitality",
      location: "Miami, FL",
      year: "2023",
      duration: "12 months",
      team: "8 designers",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Design and furnishing of 50 luxury hotel suites with ocean-inspired themes and premium amenities."
    },
    {
      id: 4,
      title: "Sustainable Family Home",
      category: "Residential",
      location: "Portland, OR",
      year: "2023",
      duration: "10 months",
      team: "5 designers",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Eco-friendly home design featuring sustainable materials and energy-efficient solutions."
    },
    {
      id: 5,
      title: "Boutique Restaurant Interior",
      category: "Commercial",
      location: "Chicago, IL",
      year: "2023",
      duration: "4 months",
      team: "3 designers",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Intimate dining space design with warm lighting and artisanal finishes for a farm-to-table restaurant."
    },
    {
      id: 6,
      title: "Urban Loft Conversion",
      category: "Residential",
      location: "Brooklyn, NY",
      year: "2023",
      duration: "7 months",
      team: "4 designers",
      image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Industrial loft transformation combining raw architectural elements with modern comfort."
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-amber-800">Modernism</a>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Home</a>
                <a href="/about" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">About</a>
                <a href="/services" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Services</a>
                <a href="/projects" className="text-amber-800 px-3 py-2 text-sm font-medium border-b-2 border-amber-800">Projects</a>
                <a href="/portfolio" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Portfolio</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-6xl font-light text-amber-900 leading-tight">
              Our <span className="font-normal">Projects</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed projects spanning residential, commercial, 
              and hospitality spaces. Each project tells a unique story of transformation 
              and innovation.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 ${
                  activeFilter === category
                    ? "bg-amber-800 text-white hover:bg-amber-900"
                    : "border-amber-800 text-amber-800 hover:bg-amber-50"
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-stone-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-800 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-stone-500">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-stone-500">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year} • {project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-stone-500">
                        <Users className="h-4 w-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-amber-800 text-amber-800 hover:bg-amber-50 group-hover:bg-amber-800 group-hover:text-white transition-all"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-4">Project Statistics</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">162+</div>
              <div className="text-stone-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">98%</div>
              <div className="text-stone-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">24+</div>
              <div className="text-stone-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">15</div>
              <div className="text-stone-600">Design Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800">Featured Project</Badge>
              <h3 className="text-4xl font-light text-stone-900">
                Award-Winning<br />
                <span className="font-normal">Penthouse Design</span>
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Our latest masterpiece - a stunning penthouse renovation that earned the 
                2024 Interior Design Excellence Award. This project showcases our ability 
                to blend luxury with functionality while respecting the building's 
                architectural heritage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                  <span className="text-stone-600">3,000 sq ft of transformed space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                  <span className="text-stone-600">Smart home integration throughout</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                  <span className="text-stone-600">Sustainable materials and practices</span>
                </div>
              </div>
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Featured project" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light text-white">Start Your Project Today</h3>
            <p className="text-amber-100 text-lg">
              Ready to transform your space? Let's discuss your vision and create 
              something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-3">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}