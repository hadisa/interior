'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Home, 
  Palette, 
  Package, 
  Truck, 
  Star,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-800">Modernism</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Home</a>
                <a href="#about" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">About</a>
                <a href="#services" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Services</a>
                <a href="#projects" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#portfolio" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Portfolio</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-stone-700 hover:text-amber-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-stone-200">
                <a href="#home" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Home</a>
                <a href="#about" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-base font-medium">About</a>
                <a href="#services" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Services</a>
                <a href="#projects" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Projects</a>
                <a href="#portfolio" className="block text-stone-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Portfolio</a>
                <Button className="w-full mt-4 bg-amber-800 hover:bg-amber-900 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-light text-amber-900 leading-tight">
                  Modern Interior<br />
                  <span className="font-normal">Design Service</span>
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                  Modernism is an acclaimed professional interior design 
                  specializing interior architecture, interior design, 
                  and decorating modern and timeless interiors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3">
                  View Our Work
                </Button>
                <Button variant="outline" size="lg" className="border-amber-800 text-amber-800 hover:bg-amber-50 px-8 py-3">
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-amber-900">24</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wider">Years of<br />experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-900">162</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wider">Projects<br />completed</div>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Modern living room" 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Interior design" 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Modern bedroom" 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Kitchen design" 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light text-stone-900">Make your dream home.</h3>
            <p className="text-stone-600">Your dream residence</p>
            <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">
              Visit Office
            </Button>
          </div>
        </div>
      </section>

      {/* Best Furnitures Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-light text-stone-900">We Provide You The Best Furnitures</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Experience style and luxury with our sustainable raw materials and elegant 
              finishes without taking a focused lot of time and resources.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">5K+</div>
              <div className="text-stone-600 text-sm">Happy customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">1000+</div>
              <div className="text-stone-600 text-sm">Recommendations</div>
            </div>
          </div>

          {/* Featured Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Living space" 
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Bedroom" 
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="col-span-2 relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern interior" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Modern kitchen" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-4">Service for your convenience</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-stone-200">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-6 w-6 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900">Interior design</h4>
                <p className="text-stone-600 text-sm">
                  Practice, innovation, scale, vibrant elements, understated, and elegance 
                  that define our work
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-stone-200">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Home className="h-6 w-6 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900">Furnitures</h4>
                <p className="text-stone-600 text-sm">
                  Software applications for file & document management and file your 
                  documents seamlessly
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-stone-200">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900">Free Delivery</h4>
                <p className="text-stone-600 text-sm">
                  Throughout requirements, health, and safety issues and building 
                  compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Category Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-8">Shop from category</h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="bg-amber-800 text-white hover:bg-amber-900 px-4 py-2">
                Living Room
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-600 hover:bg-stone-100 px-4 py-2">
                Dining Room
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-600 hover:bg-stone-100 px-4 py-2">
                Living Room
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-600 hover:bg-stone-100 px-4 py-2">
                Bedroom
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-600 hover:bg-stone-100 px-4 py-2">
                Office
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-600 hover:bg-stone-100 px-4 py-2">
                More
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Living room chair" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium text-stone-900 mb-1">Living room chairs</h4>
                <p className="text-amber-800 font-semibold">Visit 100+ →</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Living room chair" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium text-stone-900 mb-1">Living room chairs</h4>
                <p className="text-amber-800 font-semibold">Visit 100+ →</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Dining room table" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium text-stone-900 mb-1">Dining room table</h4>
                <p className="text-amber-800 font-semibold">Visit 200+ →</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Office furniture" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium text-stone-900 mb-1">Office furniture</h4>
                <p className="text-amber-800 font-semibold">Visit 150+ →</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-amber-400">Modernism</h4>
              <p className="text-stone-400 text-sm">
                Creating beautiful, functional spaces that reflect your unique style and needs.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold">Services</h5>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>Interior Design</li>
                <li>Space Planning</li>
                <li>Consultation</li>
                <li>Project Management</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold">Company</h5>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold">Contact</h5>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>123 Design Street</li>
                <li>New York, NY 10001</li>
                <li>(555) 123-4567</li>
                <li>hello@modernism.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 mt-8 text-center text-stone-400 text-sm">
            © 2024 Modernism Interior Design. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}