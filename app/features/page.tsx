import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Database,
  Shield,
  Zap,
  BarChart3,
  Settings
} from "lucide-react";

export default function AppFeatures() {
  const features = [
    {
      icon: Clock,
      title: "Maximize Equipment Uptime",
      description: "Reduce downtime with predictive maintenance and real-time monitoring",
      points: [
        "Predictive maintenance alerts",
        "Real-time equipment monitoring",
        "Automated maintenance scheduling",
        "Performance analytics dashboard"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      delay: "0"
    },
    {
      icon: TrendingUp,
      title: "Improve Yield",
      description: "Optimize production processes and increase output efficiency",
      points: [
        "Production optimization algorithms",
        "Real-time yield tracking",
        "Process efficiency analysis",
        "Bottleneck identification"
      ],
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      delay: "200"
    },
    {
      icon: CheckCircle,
      title: "Enhance Product Quality",
      description: "Maintain consistent quality standards with AI-powered insights",
      points: [
        "Quality control automation",
        "Defect detection systems",
        "Consistency monitoring",
        "Quality trend analysis"
      ],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      delay: "400"
    },
    {
      icon: Database,
      title: "Ensure Data Traceability",
      description: "Complete audit trails and real-time data tracking across operations",
      points: [
        "End-to-end audit trails",
        "Real-time data tracking",
        "Compliance reporting",
        "Supply chain visibility"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      delay: "600"
    }
  ];

  const stats = [
    { value: "99.5%", label: "Average Uptime", icon: Shield },
    { value: "15%", label: "Yield Improvement", icon: Zap },
    { value: "98%", label: "Quality Score", icon: CheckCircle },
    { value: "100%", label: "Data Traceability", icon: Database }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/features-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90"></div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit">
              Smart Manufacturing Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Operations
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leverage AI-powered insights to optimize your manufacturing processes, 
              improve efficiency, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address your key manufacturing challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-3">
                        {feature.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary">Key Benefits</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Drive Operational Excellence
                </h2>
                <p className="text-xl text-gray-600">
                  Our platform delivers measurable results across your entire manufacturing operation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Real-time Analytics
                    </h3>
                    <p className="text-gray-600">
                      Make data-driven decisions with comprehensive dashboards and real-time insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Automated Optimization
                    </h3>
                    <p className="text-gray-600">
                      AI algorithms continuously optimize processes for maximum efficiency and quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Proactive Maintenance
                    </h3>
                    <p className="text-gray-600">
                      Prevent equipment failures before they happen with predictive maintenance alerts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white space-y-6">
                <h3 className="text-2xl font-bold">Expected Outcomes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Equipment Efficiency</span>
                    <span className="font-bold">+25%</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Quality Improvement</span>
                    <span className="font-bold">+18%</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-2/3"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Downtime Reduction</span>
                    <span className="font-bold">-45%</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge variant="secondary">Seamless Integration</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-600">
              Our platform integrates with your existing systems to provide immediate value without disrupting your operations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {['ERP Systems', 'MES Platforms', 'SCADA Systems', 'IoT Devices'].map((system, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Database className="h-6 w-6 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{system}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}