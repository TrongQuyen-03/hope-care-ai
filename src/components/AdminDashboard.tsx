import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Users, 
  Activity, 
  Calendar,
  MessageCircle,
  Settings,
  BarChart3,
  UserPlus,
  Shield,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navigation = [
    {
      label: "Tổng quan",
      icon: <Activity className="h-4 w-4" />,
      active: activeTab === "overview",
      onClick: () => setActiveTab("overview")
    },
    {
      label: "Người dùng",
      icon: <Users className="h-4 w-4" />,
      active: activeTab === "users",
      onClick: () => setActiveTab("users")
    },
    {
      label: "Bệnh nhân",
      icon: <UserPlus className="h-4 w-4" />,
      active: activeTab === "patients",
      onClick: () => setActiveTab("patients")
    },
    {
      label: "Lịch hẹn",
      icon: <Calendar className="h-4 w-4" />,
      active: activeTab === "appointments",
      onClick: () => setActiveTab("appointments")
    },
    {
      label: "Chatbot AI",
      icon: <MessageCircle className="h-4 w-4" />,
      active: activeTab === "chatbot",
      onClick: () => setActiveTab("chatbot")
    },
    {
      label: "Báo cáo",
      icon: <BarChart3 className="h-4 w-4" />,
      active: activeTab === "reports",
      onClick: () => setActiveTab("reports")
    },
    {
      label: "Cài đặt",
      icon: <Settings className="h-4 w-4" />,
      active: activeTab === "settings",
      onClick: () => setActiveTab("settings")
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminOverviewTab />;
      case "users":
        return <UsersTab />;
      case "patients":
        return <PatientsTab />;
      case "appointments":
        return <AppointmentsTab />;
      case "chatbot":
        return <ChatbotTab />;
      case "reports":
        return <ReportsTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <AdminOverviewTab />;
    }
  };

  return (
    <DashboardLayout
      userRole="admin"
      userName="Admin System"
      navigation={navigation}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

const AdminOverviewTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Quản trị</h1>
          <p className="text-muted-foreground mt-1">Tổng quan hệ thống MedicalHope</p>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tổng bệnh nhân</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1,247</div>
            <p className="text-sm text-success">+12% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Bác sĩ hoạt động</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">24</div>
            <p className="text-sm text-success">+2 bác sĩ mới</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Lịch hẹn hôm nay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">156</div>
            <p className="text-sm text-muted-foreground">Trên tổng số 180</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Chatbot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">98.5%</div>
            <p className="text-sm text-muted-foreground">Độ chính xác tư vấn</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Recent Activities */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="medical-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Thống kê tuần qua</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 80, 95, 70, 85, 90, 75].map((height, index) => (
                <div key={index} className="flex-1 bg-primary/20 rounded-t flex flex-col justify-end">
                  <div 
                    className="bg-primary rounded-t transition-all duration-500"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-center py-1">
                    {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][index]}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "Bệnh nhân mới đăng ký", time: "5 phút trước", type: "user" },
              { action: "Bác sĩ tạo bệnh án", time: "10 phút trước", type: "medical" },
              { action: "AI Chatbot tư vấn", time: "15 phút trước", type: "ai" },
              { action: "Lịch hẹn được đặt", time: "30 phút trước", type: "appointment" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-primary' :
                  activity.type === 'medical' ? 'bg-secondary' :
                  activity.type === 'ai' ? 'bg-warning' : 'bg-success'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const UsersTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="doctor">Bác sĩ</SelectItem>
              <SelectItem value="patient">Bệnh nhân</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Tìm kiếm..." className="pl-9 w-64" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Thêm người dùng
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {[
          { name: "BS. Nguyễn Thị Lan", email: "doctor1@medicalhope.com", role: "doctor", status: "active", lastActive: "Đang online" },
          { name: "BS. Trần Văn Minh", email: "doctor2@medicalhope.com", role: "doctor", status: "active", lastActive: "2 giờ trước" },
          { name: "Nguyễn Văn An", email: "patient1@medicalhope.com", role: "patient", status: "active", lastActive: "1 ngày trước" },
          { name: "Admin User", email: "admin@medicalhope.com", role: "admin", status: "active", lastActive: "Đang online" }
        ].map((user, index) => (
          <Card key={index} className="medical-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Hoạt động: {user.lastActive}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={
                    user.role === 'admin' ? 'bg-destructive/10 text-destructive border border-destructive/20' :
                    user.role === 'doctor' ? 'status-scheduled' : 
                    'status-completed'
                  }>
                    {user.role === 'admin' ? 'Quản trị' :
                     user.role === 'doctor' ? 'Bác sĩ' : 'Bệnh nhân'}
                  </Badge>
                  <Badge variant="outline" className="text-success border-success">
                    Hoạt động
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Xem
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Sửa
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Xóa
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const PatientsTab = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Quản lý bệnh nhân</h1>
      <Card className="medical-card">
        <CardContent className="p-6 text-center">
          <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Danh sách bệnh nhân</h3>
          <p className="text-muted-foreground mb-4">
            Xem và quản lý thông tin tất cả bệnh nhân trong hệ thống
          </p>
          <Button>Xem danh sách đầy đủ</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const AppointmentsTab = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Quản lý lịch hẹn</h1>
      <Card className="medical-card">
        <CardContent className="p-6 text-center">
          <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Lịch hẹn tổng thể</h3>
          <p className="text-muted-foreground mb-4">
            Theo dõi và quản lý tất cả lịch hẹn của bệnh nhân và bác sĩ
          </p>
          <Button>Xem lịch chi tiết</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const ChatbotTab = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Quản lý AI Chatbot</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Cấu hình Chatbot</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Prompt hệ thống</label>
              <textarea 
                className="w-full mt-1 p-2 border rounded-md h-32"
                placeholder="Bạn là AI assistant chuyên tư vấn y tế..."
              />
            </div>
            <div>
              <label className="text-sm font-medium">Rate limit (tin nhắn/phút)</label>
              <Input type="number" defaultValue="10" />
            </div>
            <Button>Lưu cấu hình</Button>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Thống kê sử dụng</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Tổng tin nhắn hôm nay:</span>
              <span className="font-bold">342</span>
            </div>
            <div className="flex justify-between">
              <span>Độ chính xác:</span>
              <span className="font-bold text-success">98.5%</span>
            </div>
            <div className="flex justify-between">
              <span>Thời gian phản hồi TB:</span>
              <span className="font-bold">1.2s</span>
            </div>
            <div className="flex justify-between">
              <span>Câu hỏi phổ biến:</span>
              <span className="font-bold">Đau đầu</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="medical-card">
        <CardHeader>
          <CardTitle>FAQ Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Input placeholder="Thêm câu hỏi FAQ mới..." className="flex-1 mr-2" />
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Thêm FAQ
              </Button>
            </div>
            <div className="space-y-2">
              {[
                "Làm thế nào để đặt lịch hẹn?",
                "Triệu chứng cảm cúm thường gặp?", 
                "Cách chăm sóc sức khỏe hằng ngày?"
              ].map((faq, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <span>{faq}</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Sửa</Button>
                    <Button variant="outline" size="sm" className="text-destructive">Xóa</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ReportsTab = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Báo cáo thống kê</h1>
      <Card className="medical-card">
        <CardContent className="p-6 text-center">
          <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Báo cáo chi tiết</h3>
          <p className="text-muted-foreground mb-4">
            Thống kê toàn diện về hoạt động hệ thống theo ngày/tuần/tháng
          </p>
          <Button>Tạo báo cáo</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const SettingsTab = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Cài đặt hệ thống</h1>
      <Card className="medical-card">
        <CardContent className="p-6 text-center">
          <Shield className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Cấu hình bảo mật</h3>
          <p className="text-muted-foreground mb-4">
            Quản lý cài đặt bảo mật, phân quyền và cấu hình hệ thống
          </p>
          <Button>Mở cài đặt</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;