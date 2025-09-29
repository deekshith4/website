import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { 
  Search,
  Calendar,
  Clock,
  User,
  ArrowUpRight,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  TrendingUp,
  Filter,
  ChevronDown,
  Star,
  BookOpen,
  PenTool,
  Brain,
  Zap
} from 'lucide-react';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots-slate-300 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border-amber-200">
              <BookOpen className="h-4 w-4 mr-2" />
              Savant Insights
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
              The{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Knowledge
              </span>{' '}
              Hub
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge insights, tutorials, and thought leadership in AI, IoT, 
              and digital transformation from our expert team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input 
                placeholder="Search articles, tutorials, insights..." 
                className="pl-12 pr-4 py-3 rounded-2xl border-slate-200 bg-white/80 backdrop-blur-sm"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" 
                  alt="Featured Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white border-0">
                    <Zap className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    AI & Machine Learning
                  </Badge>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Dec 15, 2024
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    8 min read
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Dr. Sarah Chen
                  </div>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  The Future of Generative AI in Enterprise Solutions
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Explore how generative AI is transforming business operations, from automated content 
                  creation to predictive analytics and beyond. Learn practical implementation strategies 
                  for your organization.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['AI', 'Generative Models', 'Enterprise', 'Innovation'].map((tag) => (
                    <Badge key={tag} variant="outline" className="text-slate-600 border-slate-200">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-slate-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      2.4K
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      189
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      42
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 group">
                    Read Full Article
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-700">Filter by:</span>
                  <div className="flex flex-wrap gap-2">
                    {['All', 'AI', 'IoT', 'Finance', 'Tutorial', 'Industry'].map((filter) => (
                      <Badge 
                        key={filter} 
                        variant={filter === 'All' ? 'default' : 'outline'}
                        className="cursor-pointer border-slate-200"
                      >
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-700">Sort by:</span>
                  <Button variant="outline" className="border-slate-200">
                    Latest <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Building Scalable IoT Architectures for Smart Cities",
                    excerpt: "Learn how to design and implement robust IoT systems that can handle millions of connected devices...",
                    category: "IoT",
                    author: "Marcus Johnson",
                    date: "Dec 12, 2024",
                    readTime: "6 min",
                    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                    views: "1.2K",
                    likes: "84",
                    trending: true
                  },
                  {
                    title: "Machine Learning Model Deployment Best Practices",
                    excerpt: "A comprehensive guide to deploying ML models in production environments with maximum reliability...",
                    category: "AI",
                    author: "Dr. Emily Watson",
                    date: "Dec 10, 2024",
                    readTime: "10 min",
                    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
                    views: "3.1K",
                    likes: "256",
                    trending: true
                  },
                  {
                    title: "The Rise of Edge Computing in Modern Applications",
                    excerpt: "How edge computing is revolutionizing data processing and reducing latency for real-time applications...",
                    category: "Technology",
                    author: "Alex Rodriguez",
                    date: "Dec 8, 2024",
                    readTime: "7 min",
                    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
                    views: "890",
                    likes: "67",
                    trending: false
                  },
                  {
                    title: "Financial Fraud Detection Using AI Algorithms",
                    excerpt: "Advanced techniques for detecting and preventing financial fraud using machine learning models...",
                    category: "Finance",
                    author: "Sarah Kim",
                    date: "Dec 5, 2024",
                    readTime: "12 min",
                    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
                    views: "2.3K",
                    likes: "142",
                    trending: false
                  },
                  {
                    title: "Creating Effective Data Visualization Dashboards",
                    excerpt: "Principles and best practices for designing dashboards that provide actionable insights...",
                    category: "Tutorial",
                    author: "David Chen",
                    date: "Dec 3, 2024",
                    readTime: "9 min",
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
                    views: "1.5K",
                    likes: "98",
                    trending: true
                  },
                  {
                    title: "The Impact of 5G on IoT Device Connectivity",
                    excerpt: "Exploring how 5G technology is enabling new possibilities for IoT applications and use cases...",
                    category: "IoT",
                    author: "Marcus Johnson",
                    date: "Nov 30, 2024",
                    readTime: "5 min",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
                    views: "1.8K",
                    likes: "113",
                    trending: false
                  }
                ].map((post, index) => (
                  <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.trending && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        </div>
                      )}
                      <Badge variant="secondary" className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-slate-900 text-lg mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-500">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center space-x-3 text-slate-400">
                          <div className="flex items-center text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center text-xs">
                            <Heart className="h-3 w-3 mr-1" />
                            {post.likes}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-slate-200">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Popular Topics */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <h3 className="font-bold text-slate-900 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                    Popular Topics
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { topic: "AI Implementation", posts: "24", trend: "up" },
                    { topic: "IoT Security", posts: "18", trend: "up" },
                    { topic: "Cloud Migration", posts: "15", trend: "steady" },
                    { topic: "Data Analytics", posts: "22", trend: "up" },
                    { topic: "Digital Transformation", posts: "19", trend: "steady" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                      <span className="text-slate-700">{item.topic}</span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        {item.posts}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <CardContent className="p-6 text-center">
                  <PenTool className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="font-bold text-xl mb-2">Stay Updated</h3>
                  <p className="text-orange-100 mb-4">
                    Get the latest articles and insights delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Enter your email" 
                      className="bg-white/20 border-white/30 text-white placeholder-orange-200 rounded-full"
                    />
                    <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 rounded-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Comments */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <h3 className="font-bold text-slate-900 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                    Recent Discussions
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { user: "TechEnthusiast", comment: "Great insights on AI deployment!", post: "ML Model Deployment" },
                    { user: "DataScientist", comment: "Looking forward to trying these techniques", post: "Data Visualization" },
                    { user: "IoTExpert", comment: "Very comprehensive guide, thanks!", post: "IoT Architectures" }
                  ].map((discussion, index) => (
                    <div key={index} className="p-3 border border-slate-100 rounded-lg">
                      <div className="font-medium text-slate-900">{discussion.user}</div>
                      <p className="text-sm text-slate-600 mb-1">{discussion.comment}</p>
                      <div className="text-xs text-slate-500">on {discussion.post}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Brain className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Write for Savant Insights?
          </h2>
          <p className="text-slate-300 text-xl mb-8">
            Join our community of experts and share your knowledge with thousands of readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500">
              Become a Contributor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              View Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}