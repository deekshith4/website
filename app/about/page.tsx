import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Award, 
  Calendar,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit">
              About Savant
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2020, Savant has been at the forefront of AI innovation, 
              helping businesses transform their operations and achieve unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize AI technology and make it accessible to businesses of all sizes, 
                  enabling them to compete and thrive in the digital economy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every business, regardless of size or industry, 
                  can harness the power of AI to solve complex problems and create value.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation, integrity, and impact drive everything we do. 
                  We believe in transparent partnerships and measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our company and defined our impact
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: '2020',
                title: 'Company Founded',
                description: 'Started with a vision to make AI accessible to all businesses'
              },
              {
                year: '2021',
                title: 'First AI Platform Launch',
                description: 'Released our flagship AI platform serving 50+ early adopters'
              },
              {
                year: '2022',
                title: 'Series A Funding',
                description: 'Raised $10M to accelerate product development and team growth'
              },
              {
                year: '2023',
                title: '500+ Clients Milestone',
                description: 'Reached 500 satisfied clients across 20+ industries'
              },
              {
                year: '2024',
                title: 'Global Expansion',
                description: 'Opened offices in Europe and Asia, serving clients worldwide'
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="secondary">{milestone.year}</Badge>
                    <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving innovation and growth at Savant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Rodriguez',
                role: 'CEO & Co-Founder',
                bio: 'Former VP of AI at Google, 15+ years in tech leadership. PhD in Computer Science from Stanford.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Sarah Kim',
                role: 'CTO & Co-Founder',
                bio: 'Ex-Principal Engineer at Microsoft Azure. Expert in distributed systems and machine learning infrastructure.',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'David Chen',
                role: 'VP of Product',
                bio: 'Former Product Lead at Stripe. Specializes in building scalable B2B platforms and user experience design.',
                image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Culture */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Our Culture</h2>
                <p className="text-xl text-gray-600">
                  We foster an environment of innovation, collaboration, and continuous learning.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaborative Excellence</h3>
                    <p className="text-gray-600 text-sm">Cross-functional teams working together to solve complex challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation First</h3>
                    <p className="text-gray-600 text-sm">20% time for personal projects and exploring new technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Growth Mindset</h3>
                    <p className="text-gray-600 text-sm">Continuous learning budget and conference attendance for all team members</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Recognition & Awards</h2>
                <p className="text-xl text-gray-600">
                  Industry recognition for our innovation and impact.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { year: '2024', award: 'Best AI Platform', org: 'TechCrunch Disrupt' },
                  { year: '2023', award: 'Startup of the Year', org: 'AI Innovation Awards' },
                  { year: '2023', award: 'Top 50 AI Companies', org: 'Forbes' },
                  { year: '2022', award: 'Best B2B Solution', org: 'SaaS Awards' }
                ].map((award, index) => (
                  <Card key={index} className="p-4 border-l-4 border-l-blue-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{award.award}</h3>
                        <p className="text-sm text-gray-600">{award.org}</p>
                      </div>
                      <Badge variant="secondary">{award.year}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Whether you're looking to transform your business or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}