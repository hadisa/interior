'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Home, 
  Truck, 
  Lightbulb,
  Ruler,
  Sofa,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function Services() {
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
                <a href="/services" className="text-amber-800 px-3 py-2 text-sm font-medium border-b-2 border-amber-800">Services</a>
                <a href="/projects" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Projects</a>
                <a href="/portfolio" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Portfolio</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                Get Quote
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
              Our <span className="font-normal">Services</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive interior design services 
              tailored to your unique needs and lifestyle. Every project is a collaboration 
              that brings your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Palette className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">Interior Design</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Complete interior design solutions from space planning to final styling. 
                  We create cohesive, functional spaces that reflect your personality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Space planning & layout</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Color scheme development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Material & finish selection</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Ruler className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">Space Planning</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Optimize your space with strategic planning that maximizes functionality 
                  while maintaining aesthetic appeal and flow.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Floor plan optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Traffic flow analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Furniture placement</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Sofa className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">Furniture Selection</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Curated furniture selection that combines style, comfort, and quality. 
                  We source pieces that perfectly complement your design vision.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Custom furniture design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Vendor sourcing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Quality assurance</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Lightbulb className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">Lighting Design</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Strategic lighting solutions that enhance ambiance, functionality, 
                  and highlight your space's best features.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Ambient lighting design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Task lighting solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Accent lighting</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Home className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">Home Staging</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Professional staging services to showcase your property's potential 
                  and create lasting impressions for buyers or guests.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Property assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Furniture rental</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Styling & accessories</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Truck className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">Project Management</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  End-to-end project coordination ensuring timely delivery, quality 
                  control, and seamless communication throughout the process.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Timeline management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Vendor coordination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-amber-800" />
                    <span className="text-sm text-stone-600">Quality assurance</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-4">Our Design Process</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              A structured approach that ensures every project exceeds expectations 
              while staying on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-2">Consultation</h4>
              <p className="text-stone-600 text-sm">
                Initial meeting to understand your vision, needs, and budget requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-2">Design</h4>
              <p className="text-stone-600 text-sm">
                Concept development, space planning, and detailed design presentations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-2">Implementation</h4>
              <p className="text-stone-600 text-sm">
                Project execution with careful coordination of all vendors and timelines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-2">Completion</h4>
              <p className="text-stone-600 text-sm">
                Final styling, quality check, and handover of your transformed space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-4">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-stone-200">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic">
                  "Modernism transformed our home beyond our wildest dreams. Their attention 
                  to detail and creative vision is unmatched."
                </p>
                <div>
                  <p className="font-semibold text-stone-900">Sarah Mitchell</p>
                  <p className="text-sm text-stone-500">Residential Client</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-stone-200">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic">
                  "Professional, creative, and incredibly organized. They delivered our 
                  office renovation on time and within budget."
                </p>
                <div>
                  <p className="font-semibold text-stone-900">David Chen</p>
                  <p className="text-sm text-stone-500">Commercial Client</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-stone-200">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic">
                  "The team's expertise in space planning helped us maximize every square 
                  foot of our small apartment. Brilliant work!"
                </p>
                <div>
                  <p className="font-semibold text-stone-900">Emily Rodriguez</p>
                  <p className="text-sm text-stone-500">Residential Client</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light text-white">Ready to Get Started?</h3>
            <p className="text-amber-100 text-lg">
              Schedule a consultation today and let's discuss how we can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-3">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}