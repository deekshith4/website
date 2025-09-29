import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  BarChart3, 
  Clock, 
  Users, 
  Target,
  Zap,
  TrendingUp,
  Building,
  Globe,
  Award,
  Play,
  ExternalLink
} from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/80 backdrop-blur-sm">
            Success Stories
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Real Impact,
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Measured Results
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how forward-thinking companies leverage our solutions to drive innovation, 
            accelerate growth, and transform their industries.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'AI Solutions', 'IoT', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'].map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="rounded-full px-6 border-slate-200 hover:border-slate-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                company: "TechNova Inc.",
                industry: "Technology",
                challenge: "Inefficient data processing costing $2M annually",
                solution: "AI-powered analytics platform",
                results: {
                  revenue: "+45%",
                  efficiency: "+60%",
                  cost: "-35%"
                },
                duration: "6 months",
                team: "8 specialists",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                logo: "💻",
                gradient: "from-blue-500 to-cyan-500",
                featured: true
              },
              {
                company: "Global Retail Co.",
                industry: "E-commerce",
                challenge: "Low customer retention and personalization",
                solution: "Machine learning recommendation engine",
                results: {
                  revenue: "+30%",
                  retention: "+55%",
                  conversion: "+40%"
                },
                duration: "4 months",
                team: "6 specialists",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                logo: "🛒",
                gradient: "from-purple-500 to-pink-500",
                featured: false
              },
              {
                company: "HealthPlus Systems",
                industry: "Healthcare",
                challenge: "Manual patient data analysis causing delays",
                solution: "IoT-enabled patient monitoring system",
                results: {
                  efficiency: "+75%",
                  accuracy: "+90%",
                  time: "-60%"
                },
                duration: "9 months",
                team: "12 specialists",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
                logo: "🏥",
                gradient: "from-green-500 to-emerald-500",
                featured: true
              },
              {
                company: "FinSecure Bank",
                industry: "Finance",
                challenge: "High fraud rates and manual verification",
                solution: "AI-driven fraud detection system",
                results: {
                  fraud: "-80%",
                  speed: "+50%",
                  savings: "$5M"
                },
                duration: "5 months",
                team: "7 specialists",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
                logo: "💰",
                gradient: "from-amber-500 to-orange-500",
                featured: false
              },
              {
                company: "ManufacturePro",
                industry: "Manufacturing",
                challenge: "Production line inefficiencies",
                solution: "IoT sensors and predictive maintenance",
                results: {
                  output: "+35%",
                  downtime: "-70%",
                  quality: "+25%"
                },
                duration: "7 months",
                team: "10 specialists",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
                logo: "🏭",
                gradient: "from-slate-600 to-slate-800",
                featured: false
              },
              {
                company: "EduTech Solutions",
                industry: "Education",
                challenge: "Low student engagement and outcomes",
                solution: "Personalized learning AI platform",
                results: {
                  engagement: "+65%",
                  outcomes: "+40%",
                  satisfaction: "+55%"
                },
                duration: "8 months",
                team: "9 specialists",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
                logo: "🎓",
                gradient: "from-indigo-500 to-purple-500",
                featured: true
              }
            ].map((study, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                study.featured ? 'ring-2 ring-blue-200' : ''
              }`}>
                {/* Featured Badge */}
                {study.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent`} />
                  
                  {/* Company Logo */}
                  <div className="absolute top-4 right-4">
                    <div className="text-3xl">{study.logo}</div>
                  </div>
                  
                  {/* Industry Tag */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0">
                      {study.industry}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Company & Challenge */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{study.company}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Zap className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="font-semibold text-slate-900">Solution</span>
                    </div>
                    <p className="text-slate-700 text-sm">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(study.results).map(([key, value], idx) => (
                      <div key={key} className="text-center p-3 bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-100">
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-500 capitalize mt-1">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-slate-100">
                      Read Full Study
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Building, value: "250+", label: "Companies Transformed" },
              { icon: TrendingUp, value: "$2.3B", label: "Client Revenue Growth" },
              { icon: Target, value: "98%", label: "Success Rate" },
              { icon: Globe, value: "15+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-300 text-xl">
              Direct feedback from the teams we've partnered with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CTO at TechNova Inc.",
                quote: "The AI platform reduced our processing time by 60% and opened up new revenue streams we never thought possible.",
                avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Marcus Johnson",
                role: "CEO at Global Retail Co.",
                quote: "Savant's recommendation engine transformed our customer experience. The results exceeded our expectations.",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Dr. Emily Watson",
                role: "Director at HealthPlus",
                quote: "The IoT solution revolutionized our patient care. We're now providing better healthcare with greater efficiency.",
                avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 bg-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-white">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-slate-300 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-200 leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact" className="flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Schedule Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/case-studies/all" className="flex items-center">
                  View All Studies
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}