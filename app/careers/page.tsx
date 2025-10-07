import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Users,
  Zap,
  Globe,
  TrendingUp,
  Heart,
  Award,
  Clock,
  MapPin,
  BookOpen,
  GraduationCap,
  Coffee,
  Palette,
  Code,
  Shield,
  Cloud,
  Brain,
  ArrowRight,
  Play,
  Star,
  Rocket
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '5+ years',
      tags: ['React', 'TypeScript', 'Next.js'],
      urgency: 'High'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Research & Development',
      type: 'Full-time',
      location: 'San Francisco, CA',
      experience: '3+ years',
      tags: ['Python', 'TensorFlow', 'PyTorch'],
      urgency: 'High'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      type: 'Full-time',
      location: 'Remote',
      experience: '4+ years',
      tags: ['AWS', 'Kubernetes', 'Docker'],
      urgency: 'Medium'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'New York, NY',
      experience: '4+ years',
      tags: ['Figma', 'UX Research', 'Prototyping'],
      urgency: 'Medium'
    },
    {
      title: 'Technical Recruiter',
      department: 'People & Talent',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      tags: ['Recruiting', 'Sourcing', 'HR'],
      urgency: 'High'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      type: 'Full-time',
      location: 'Boston, MA',
      experience: '3+ years',
      tags: ['Python', 'SQL', 'Machine Learning'],
      urgency: 'Medium'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with equity options'
    },
    {
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours and async collaboration'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear promotion paths and professional development budget'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and mental health coverage'
    },
    {
      icon: Award,
      title: 'Learning Stipend',
      description: '$3,000 annual budget for courses, conferences, and books'
    },
    {
      icon: Clock,
      title: 'Unlimited PTO',
      description: 'Take time when you need it with our flexible vacation policy'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together across disciplines'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We encourage experimentation and thinking outside the box'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We do the right thing, even when no one is watching'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We prioritize understanding and supporting each other'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit bg-green-100 text-green-700">
              We&apos;re Hiring!
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Build the Future{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a team of passionate innovators building cutting-edge technology 
              that transforms industries and improves lives worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Join Our Team?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re building more than just products - we&apos;re building a better way to work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '50+',
                label: 'Team Members',
                description: 'Growing team of experts across 15 countries'
              },
              {
                number: '4.8★',
                label: 'Team Satisfaction',
                description: 'Rated by our employees on Glassdoor'
              },
              {
                number: '100%',
                label: 'Remote First',
                description: 'Work from anywhere in the world'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us shape the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {position.title}
                      </h3>
                      {position.urgency === 'High' && (
                        <Badge variant="destructive" className="animate-pulse">Urgent</Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="whitespace-nowrap">
                      Save Job
                    </Button>
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don&apos;t see the perfect role? We&apos;re always looking for talented people.
            </p>
            <Button variant="outline" size="lg">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We take care of our team so you can do your best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group p-6 border border-gray-200 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent and respectful - we value your time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application Review',
                description: 'We review your application within 48 hours',
                duration: '1-2 days'
              },
              {
                step: '02',
                title: 'Initial Chat',
                description: '30-minute call with our talent team',
                duration: '30 mins'
              },
              {
                step: '03',
                title: 'Technical Interview',
                description: 'Skills assessment with the team',
                duration: '1-2 hours'
              },
              {
                step: '04',
                title: 'Final Offer',
                description: 'Meet the leadership team and receive offer',
                duration: '1 week'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <Badge variant="secondary">{step.duration}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know the people you&apos;ll be working with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Lead Product Designer',
                department: 'Design',
                quote: 'The autonomy and trust here is incredible. I get to solve real problems.',
                avatar: '👩‍💻'
              },
              {
                name: 'Marcus Johnson',
                role: 'Senior Backend Engineer',
                department: 'Engineering',
                quote: 'Best engineering culture I\'ve experienced. We ship quality code fast.',
                avatar: '👨‍💻'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Data Science Manager',
                department: 'Research',
                quote: 'The learning opportunities and challenging projects keep me growing.',
                avatar: '👩‍🔬'
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl mb-2">{member.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    <Badge variant="secondary" className="mt-1">{member.department}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{member.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Join a team that values your skills, supports your growth, and trusts you to do great work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers/positions">View All Positions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-green-200 text-sm">
            <div className="flex items-center justify-center">
              <Star className="h-4 w-4 mr-2" />
              Competitive compensation
            </div>
            <div className="flex items-center justify-center">
              <Globe className="h-4 w-4 mr-2" />
              Work from anywhere
            </div>
            <div className="flex items-center justify-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Growth opportunities
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}