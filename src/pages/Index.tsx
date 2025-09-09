import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Shield, 
  Users, 
  MessageCircle, 
  Calendar, 
  FileText, 
  Activity,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceRecords from "@/assets/service-records.jpg";
import serviceChatbot from "@/assets/service-chatbot.jpg";

const Index = () => {
  const [userRole, setUserRole] = useState<"admin" | "doctor" | "patient">("patient");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">MedicalHope</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Trang chủ</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Giới thiệu</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Dịch vụ</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Liên hệ</a>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Đăng nhập</Button>
              <Button size="sm">Đăng ký</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Hệ thống quản lý <span className="text-primary">Y tế thông minh</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                MedicalHope mang đến giải pháp quản lý bệnh nhân hiện đại với AI chatbot tư vấn sức khỏe 24/7. 
                Kết nối bác sĩ và bệnh nhân một cách hiệu quả nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8">
                  Bắt đầu ngay <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Xem demo
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Bệnh nhân</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Bác sĩ</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Hỗ trợ</div>
                </div>
              </div>
            </div>
            <div className="slide-up">
              <img 
                src={heroImage} 
                alt="Medical Healthcare Technology" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Về MedicalHope</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Chúng tôi cam kết mang đến giải pháp y tế số hóa toàn diện, 
            giúp cải thiện chất lượng chăm sóc sức khỏe thông qua công nghệ tiên tiến.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bảo mật tuyệt đối</h3>
              <p className="text-muted-foreground">Dữ liệu y tế được mã hóa và bảo vệ theo tiêu chuẩn quốc tế HIPAA</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Đa vai trò</h3>
              <p className="text-muted-foreground">Hỗ trợ quản lý cho admin, bác sĩ và bệnh nhân trong cùng hệ thống</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Thông minh</h3>
              <p className="text-muted-foreground">Chatbot AI tư vấn sức khỏe cơ bản và hỗ trợ 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Dịch vụ của chúng tôi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Khám phá các tính năng và dịch vụ y tế hiện đại được thiết kế để phục vụ tốt nhất cho bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image={serviceConsultation}
              icon={<Calendar className="h-8 w-8" />}
              title="Tư vấn trực tuyến"
              description="Kết nối với bác sĩ chuyên khoa qua video call, đặt lịch hẹn dễ dàng"
              features={["Video call HD", "Đặt lịch linh hoạt", "Hồ sơ điện tử"]}
            />
            
            <ServiceCard
              image={serviceRecords}
              icon={<FileText className="h-8 w-8" />}
              title="Quản lý hồ sơ"
              description="Lưu trữ và quản lý hồ sơ y tế điện tử an toàn, chi tiết"
              features={["Bảo mật cao", "Truy cập mọi lúc", "Chia sẻ với bác sĩ"]}
            />
            
            <ServiceCard
              image={serviceChatbot}
              icon={<MessageCircle className="h-8 w-8" />}
              title="AI Chatbot"
              description="Tư vấn sức khỏe cơ bản 24/7 với công nghệ AI thông minh"
              features={["24/7 hỗ trợ", "Tư vấn tức thì", "Học máy thông minh"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Khách hàng nói gì về chúng tôi</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Văn A",
                role: "Bệnh nhân",
                content: "Hệ thống rất tiện lợi, tôi có thể đặt lịch và tư vấn với bác sĩ mọi lúc mọi nơi.",
                rating: 5
              },
              {
                name: "BS. Trần Thị B",
                role: "Bác sĩ Tim mạch",
                content: "Giao diện dễ sử dụng, giúp tôi quản lý bệnh nhân một cách hiệu quả.",
                rating: 5
              },
              {
                name: "Lê Văn C",
                role: "Quản trị viên",
                content: "Tính năng báo cáo và thống kê rất chi tiết, hỗ trợ quản lý tốt.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="medical-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-md">
          <Card className="medical-card p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Trải nghiệm ngay</h2>
              <p className="text-muted-foreground">Chọn vai trò của bạn để bắt đầu</p>
            </div>

            <Tabs value={userRole} onValueChange={(value) => setUserRole(value as typeof userRole)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="patient" className="text-xs">Bệnh nhân</TabsTrigger>
                <TabsTrigger value="doctor" className="text-xs">Bác sĩ</TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">Quản trị</TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-4">
                <LoginForm role="patient" />
              </TabsContent>

              <TabsContent value="doctor" className="space-y-4">
                <LoginForm role="doctor" />
              </TabsContent>

              <TabsContent value="admin" className="space-y-4">
                <LoginForm role="admin" />
              </TabsContent>
            </Tabs>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                🚀 Demo Mode - Chọn vai trò để xem giao diện tương ứng
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Liên hệ với chúng tôi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bạn có câu hỏi hoặc cần hỗ trợ? Chúng tôi luôn sẵn sàng lắng nghe và giúp đỡ bạn.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Điện thoại</h4>
                    <p className="text-muted-foreground">+84 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">contact@medicalhope.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Địa chỉ</h4>
                    <p className="text-muted-foreground">123 Đường ABC, Quận XYZ, TP.HCM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="medical-card p-6">
              <h3 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" placeholder="Nhập họ của bạn" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" placeholder="Nhập tên của bạn" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Tin nhắn</Label>
                  <textarea 
                    id="message"
                    className="w-full min-h-[120px] p-3 border border-input rounded-md bg-background"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>
                <Button className="w-full">Gửi tin nhắn</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold">MedicalHope</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Hệ thống quản lý y tế thông minh, kết nối bác sĩ và bệnh nhân 
                thông qua công nghệ hiện đại và AI chatbot tư vấn sức khỏe.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Trang chủ</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">Giới thiệu</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Dịch vụ</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Liên hệ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MedicalHope. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LoginForm = ({ role }: { role: string }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder={`${role}@medicalhope.com`}
          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Mật khẩu</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="••••••••"
          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
        onClick={() => {
          const dashboardRoutes = {
            patient: "/patient-dashboard",
            doctor: "/doctor-dashboard", 
            admin: "/admin-dashboard"
          };
          window.location.href = dashboardRoutes[role as keyof typeof dashboardRoutes];
        }}
      >
        Đăng nhập
      </Button>
      <div className="text-center">
        <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
          Quên mật khẩu?
        </Button>
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  image, 
  icon, 
  title, 
  description, 
  features 
}: {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) => {
  return (
    <Card className="medical-card overflow-hidden group cursor-pointer">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 text-primary-foreground">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Index;