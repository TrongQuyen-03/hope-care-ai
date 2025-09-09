import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shield, Users, MessageCircle, Calendar, FileText, Activity } from "lucide-react";

const Index = () => {
  const [userRole, setUserRole] = useState<"admin" | "doctor" | "patient">("patient");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="medical-hero py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center mb-6 fade-in">
            <Heart className="h-12 w-12 mr-4" />
            <h1 className="text-5xl font-bold">MedicalHope</h1>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto slide-up">
            Hệ thống quản lý bệnh nhân thông minh với AI chatbot tư vấn sức khỏe
          </p>
          <div className="flex flex-wrap gap-6 justify-center slide-up">
            <div className="flex items-center text-white/90">
              <Shield className="h-5 w-5 mr-2" />
              Bảo mật cao
            </div>
            <div className="flex items-center text-white/90">
              <Users className="h-5 w-5 mr-2" />
              Quản lý đa vai trò
            </div>
            <div className="flex items-center text-white/90">
              <MessageCircle className="h-5 w-5 mr-2" />
              AI Chatbot thông minh
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-md">
          <Card className="medical-card p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Đăng nhập</h2>
              <p className="text-muted-foreground">Chọn vai trò của bạn để tiếp tục</p>
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

      {/* Features Overview */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tính năng nổi bật</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="h-8 w-8" />}
              title="Quản lý lịch hẹn"
              description="Đặt lịch, theo dõi và quản lý cuộc hẹn khám bệnh một cách hiệu quả"
            />
            
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="Hồ sơ bệnh án"
              description="Lưu trữ và quản lý hồ sơ y tế điện tử an toàn và chi tiết"
            />
            
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8" />}
              title="AI Chatbot"
              description="Tư vấn sức khỏe cơ bản 24/7 với công nghệ AI thông minh"
            />
            
            <FeatureCard
              icon={<Activity className="h-8 w-8" />}
              title="Theo dõi sức khỏe"
              description="Giám sát các chỉ số sức khỏe và nhận cảnh báo kịp thời"
            />
            
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Quản lý bệnh nhân"
              description="Hệ thống quản lý thông tin bệnh nhân toàn diện"
            />
            
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Bảo mật dữ liệu"
              description="Mã hóa và bảo vệ thông tin y tế theo tiêu chuẩn quốc tế"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-primary mr-2" />
            <span className="font-semibold">MedicalHope</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 MedicalHope. Hệ thống quản lý y tế thông minh.
          </p>
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
          // Navigate to appropriate dashboard based on role
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

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="medical-card p-6 text-center group cursor-pointer">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );
};

export default Index;