'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function About() {
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
                <a href="/about" className="text-amber-800 px-3 py-2 text-sm font-medium border-b-2 border-amber-800">About</a>
                <a href="/services" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Services</a>
                <a href="/projects" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Projects</a>
                <a href="/portfolio" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Portfolio</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light text-amber-900 leading-tight">
                  About<br />
                  <span className="font-normal">Modernism</span>
                </h1>
                <p className="text-lg text-stone-600 leading-relaxed">
                  For over two decades, we've been transforming spaces into extraordinary 
                  experiences. Our passion for design excellence and commitment to innovation 
                  has made us a trusted partner for discerning clients worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-amber-900">24+</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-900">162+</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wider">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern interior design" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-amber-800" />
              </div>
              <h3 className="text-3xl font-light text-stone-900">Our Mission</h3>
              <p className="text-stone-600 leading-relaxed">
                To create exceptional interior spaces that reflect our clients' personalities 
                while enhancing their daily lives. We believe that great design should be both 
                beautiful and functional, creating environments that inspire and comfort.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-800" />
                  <span className="text-stone-600">Sustainable design practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-800" />
                  <span className="text-stone-600">Client-centered approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-800" />
                  <span className="text-stone-600">Innovation in every project</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-amber-800" />
              </div>
              <h3 className="text-3xl font-light text-stone-900">Our Vision</h3>
              <p className="text-stone-600 leading-relaxed">
                To be the leading interior design firm recognized for transforming spaces 
                into timeless works of art. We envision a world where every space tells a 
                story and every design creates lasting memories.
              </p>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Design vision" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-4">Meet Our Team</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our talented team of designers, architects, and project managers work 
              collaboratively to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900 mb-2">Sarah Johnson</h4>
                <p className="text-amber-800 font-medium mb-3">Lead Interior Designer</p>
                <p className="text-stone-600 text-sm">
                  With 15 years of experience, Sarah specializes in modern residential 
                  and commercial spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900 mb-2">Michael Chen</h4>
                <p className="text-amber-800 font-medium mb-3">Senior Architect</p>
                <p className="text-stone-600 text-sm">
                  Award-winning architect with expertise in sustainable design and 
                  space optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-12 w-12 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900 mb-2">Emma Rodriguez</h4>
                <p className="text-amber-800 font-medium mb-3">Project Manager</p>
                <p className="text-stone-600 text-sm">
                  Ensures every project runs smoothly from concept to completion with 
                  meticulous attention to detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light text-white">Ready to Transform Your Space?</h3>
            <p className="text-amber-100 text-lg">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-3">
                Start Your Project
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