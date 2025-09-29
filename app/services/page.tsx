import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Brain, 
  Cpu, 
  BarChart3, 
  Users,
  Shield,
  Cloud,
  Zap,
  Globe,
  Smartphone,
  Database,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Play
} from 'lucide-react';

export default function ProductsServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit">
              Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Powering Innovation with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From AI-driven insights to IoT infrastructure and financial technology, 
              we provide comprehensive solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {/* Services Overview */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        End-to-end solutions tailored to your business needs
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {[
        {
          icon: Brain,
          title: 'AI & Machine Learning',
          description: 'Custom AI solutions that learn and adapt to your business needs. We build intelligent systems that drive efficiency and innovation.',
          features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines'],
          gradient: 'from-purple-500 to-pink-500',
          stats: '98% accuracy'
        },
        {
          icon: Cpu,
          title: 'IoT Solutions',
          description: 'Connect and manage your devices with smart IoT infrastructure. Real-time monitoring and predictive maintenance for seamless operations.',
          features: ['Sensor Networks', 'Real-time Monitoring', 'Predictive Maintenance', 'Smart Automation'],
          gradient: 'from-green-500 to-blue-500',
          stats: '10M+ devices'
        },
        {
          icon: BarChart3,
          title: 'Financial Technology',
          description: 'Modern financial solutions for the digital economy. Advanced analytics and secure transactions for today\'s financial challenges.',
          features: ['Risk Analysis', 'Fraud Detection', 'Algorithmic Trading', 'Payment Systems'],
          gradient: 'from-blue-500 to-cyan-500',
          stats: '99.9% uptime'
        },
        {
          icon: Users,
          title: 'Consulting Services',
          description: 'Strategic guidance to transform your business with technology. Expert insights and implementation strategies for digital transformation.',
          features: ['Digital Transformation', 'Technology Audit', 'Implementation Strategy', 'Team Training'],
          gradient: 'from-orange-500 to-red-500',
          stats: '500+ projects'
        },
        {
          icon: Shield,
          title: 'Cybersecurity',
          description: 'Protect your assets with enterprise-grade security solutions. Comprehensive protection against evolving cyber threats.',
          features: ['Threat Detection', 'Data Encryption', 'Compliance', 'Security Audits'],
          gradient: 'from-red-500 to-purple-500',
          stats: '24/7 monitoring'
        },
        {
          icon: Cloud,
          title: 'Cloud Infrastructure',
          description: 'Scalable cloud solutions for growing businesses. Flexible, secure, and high-performance cloud environments tailored to your needs.',
          features: ['Cloud Migration', 'DevOps', 'Containerization', 'Serverless Architecture'],
          gradient: 'from-cyan-500 to-blue-500',
          stats: 'Global scale'
        }
      ].map((service, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                {service.stats}
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-600">
                  <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Learn More
              </Button>
              <Button size="sm" variant="outline" className="group-hover:border-gray-300">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Background decorative element */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full -translate-y-16 translate-x-16`}></div>
        </div>
      ))}
    </div>

    {/* Additional Services CTA */}
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team specializes in building tailored solutions for unique business challenges. 
          Let's discuss how we can create something extraordinary together.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Schedule Consultation
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready-to-use platforms designed for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                name: 'Savant AI Platform',
                tagline: 'Enterprise-grade AI for every business',
                description: 'A comprehensive AI platform that enables businesses to build, deploy, and scale machine learning models without the complexity.',
                features: [
                  'Drag-and-drop model builder',
                  'Real-time analytics dashboard',
                  'Automated model training',
                  'API integration ready'
                ],
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
                gradient: 'from-purple-500 to-blue-500',
                status: 'Latest'
              },
              {
                name: 'IoT Connect Suite',
                tagline: 'Seamless device management at scale',
                description: 'Connect, monitor, and manage millions of devices with our robust IoT platform built for reliability and security.',
                features: [
                  'Real-time device monitoring',
                  'Automated firmware updates',
                  'Advanced security protocols',
                  'Scalable cloud infrastructure'
                ],
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
                gradient: 'from-green-500 to-cyan-500',
                status: 'Popular'
              },
              {
                name: 'FinanceFlow Pro',
                tagline: 'Intelligent financial analytics',
                description: 'Transform your financial operations with AI-powered insights, risk assessment, and automated reporting.',
                features: [
                  'Predictive cash flow analysis',
                  'Fraud detection algorithms',
                  'Regulatory compliance tools',
                  'Custom reporting dashboard'
                ],
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
                gradient: 'from-blue-500 to-cyan-500',
                status: 'New'
              },
              {
                name: 'ConsultAI Assistant',
                tagline: 'Your AI consulting partner',
                description: 'An intelligent assistant that provides data-driven insights and recommendations for business strategy and optimization.',
                features: [
                  'Natural language queries',
                  'Industry benchmarking',
                  'ROI analysis tools',
                  'Strategy recommendation engine'
                ],
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
                gradient: 'from-orange-500 to-red-500',
                status: 'Beta'
              }
            ].map((product, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${product.gradient} text-white border-0`}>
                      {product.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600">{product.tagline}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for specific industry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, industry: 'Finance', solutions: '8', color: 'text-green-600' },
              { icon: Smartphone, industry: 'Retail', solutions: '12', color: 'text-blue-600' },
              { icon: Workflow, industry: 'Manufacturing', solutions: '6', color: 'text-orange-600' },
              { icon: Globe, industry: 'Healthcare', solutions: '9', color: 'text-red-600' },
              { icon: Database, industry: 'Logistics', solutions: '7', color: 'text-purple-600' },
              { icon: Users, industry: 'Education', solutions: '5', color: 'text-cyan-600' },
              { icon: Shield, industry: 'Government', solutions: '4', color: 'text-gray-600' },
              { icon: Cloud, industry: 'Technology', solutions: '15', color: 'text-indigo-600' }
            ].map((item, index) => (
              <div key={index} className="group p-6 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                  <Badge variant="secondary">{item.solutions} solutions</Badge>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.industry}</h3>
                <p className="text-gray-600 text-sm mb-4">Customized solutions for {item.industry.toLowerCase()} industry challenges</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:underline">
                  Explore solutions <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Seamless Integration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Works with the tools and platforms you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {['AWS', 'Google Cloud', 'Microsoft Azure', 'Salesforce', 'Slack', 'Zoom', 'Shopify', 'Stripe', 'Twilio', 'MongoDB', 'Redis', 'Docker'].map((partner) => (
              <div key={partner} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how businesses are transforming with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'TechCorp Inc.',
                industry: 'Technology',
                result: '45% faster decision making',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
              },
              {
                company: 'Global Retail',
                industry: 'E-commerce',
                result: '30% increase in conversion',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
              },
              {
                company: 'HealthPlus',
                industry: 'Healthcare',
                result: '60% reduction in costs',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
              }
            ].map((caseStudy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.company}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{caseStudy.industry}</Badge>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{caseStudy.company}</h3>
                  <p className="text-gray-600 text-sm mb-4">Achieved {caseStudy.result} using our AI solutions</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="text-blue-200 text-sm">
            Free 30-day trial • No credit card required • Setup in minutes
          </p>
        </div>
      </section>
    </div>
  );
}