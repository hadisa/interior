'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Eye,
  Heart,
  Share2,
  ArrowRight,
  Grid3X3,
  List
} from 'lucide-react';

export default function Portfolio() {
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('All');

  const portfolioItems = [
    {
      id: 1,
      title: "Minimalist Living Room",
      category: "Living Spaces",
      style: "Modern Minimalist",
      year: "2024",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 234,
      views: 1520
    },
    {
      id: 2,
      title: "Executive Office Suite",
      category: "Commercial",
      style: "Contemporary",
      year: "2024",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: "Luxury Master Bedroom",
      category: "Bedrooms",
      style: "Modern Luxury",
      year: "2023",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 312,
      views: 2100
    },
    {
      id: 4,
      title: "Gourmet Kitchen Design",
      category: "Kitchens",
      style: "Scandinavian",
      year: "2023",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 267,
      views: 1750
    },
    {
      id: 5,
      title: "Cozy Reading Nook",
      category: "Living Spaces",
      style: "Bohemian Modern",
      year: "2023",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 156,
      views: 890
    },
    {
      id: 6,
      title: "Industrial Loft Bathroom",
      category: "Bathrooms",
      style: "Industrial",
      year: "2023",
      image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 198,
      views: 1200
    },
    {
      id: 7,
      title: "Elegant Dining Room",
      category: "Dining Rooms",
      style: "Classic Modern",
      year: "2022",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 223,
      views: 1450
    },
    {
      id: 8,
      title: "Modern Home Office",
      category: "Commercial",
      style: "Contemporary",
      year: "2022",
      image: "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 178,
      views: 1100
    },
    {
      id: 9,
      title: "Spa-Inspired Bathroom",
      category: "Bathrooms",
      style: "Zen Modern",
      year: "2022",
      image: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 289,
      views: 1890
    }
  ];

  const categories = ['All', 'Living Spaces', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Dining Rooms', 'Commercial'];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
                <a href="/projects" className="text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 text-sm font-medium">Projects</a>
                <a href="/portfolio" className="text-amber-800 px-3 py-2 text-sm font-medium border-b-2 border-amber-800">Portfolio</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                Get Inspired
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
              Design <span className="font-normal">Portfolio</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of interior design masterpieces. Each space 
              tells a unique story of creativity, functionality, and timeless elegance.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm ${
                    activeCategory === category
                      ? "bg-amber-800 text-white hover:bg-amber-900"
                      : "border-amber-800 text-amber-800 hover:bg-amber-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? "bg-amber-800 text-white" : "border-stone-300"}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? "bg-amber-800 text-white" : "border-stone-300"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-stone-200">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-white/90 text-stone-900 hover:bg-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-white/90 text-stone-900 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-white/90 text-stone-900 hover:bg-white">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-800 text-white">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="flex justify-between items-center text-sm text-stone-500">
                        <span>{item.style}</span>
                        <span>{item.year}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center space-x-4 text-sm text-stone-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-amber-800 text-amber-800 hover:bg-amber-50"
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-stone-200">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-800 text-white">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-stone-500">
                            <span>{item.style}</span>
                            <span>•</span>
                            <span>{item.year}</span>
                          </div>
                        </div>
                        
                        <p className="text-stone-600 leading-relaxed">
                          A stunning example of {item.style.toLowerCase()} design that perfectly 
                          balances form and function. This space showcases our expertise in 
                          creating environments that are both beautiful and livable.
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4">
                        <div className="flex items-center space-x-6 text-stone-500">
                          <div className="flex items-center space-x-2">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes} likes</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Eye className="h-4 w-4" />
                            <span>{item.views} views</span>
                          </div>
                        </div>
                        <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-stone-900 mb-4">Featured Collection</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our most celebrated designs that have defined trends and inspired countless homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern luxury collection" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h4 className="text-2xl font-semibold mb-2">Modern Luxury Collection</h4>
                  <p className="text-white/90 mb-4">Sophisticated spaces that redefine contemporary living</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-stone-900">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sustainable design collection" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h4 className="text-2xl font-semibold mb-2">Sustainable Design Collection</h4>
                  <p className="text-white/90 mb-4">Eco-conscious designs that don't compromise on style</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-stone-900">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light text-white">Inspired by Our Work?</h3>
            <p className="text-amber-100 text-lg">
              Let's create something beautiful together. Schedule a consultation to discuss 
              your vision and see how we can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3">
                Download Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}