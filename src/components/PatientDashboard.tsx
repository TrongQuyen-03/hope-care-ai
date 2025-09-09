import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";
import ChatBubble from "@/components/ChatBubble";
import { 
  Calendar, 
  FileText, 
  Activity, 
  MessageCircle,
  User,
  Clock,
  Heart,
  Pill,
  Plus
} from "lucide-react";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navigation = [
    {
      label: "Tổng quan",
      icon: <Activity className="h-4 w-4" />,
      active: activeTab === "overview",
      onClick: () => setActiveTab("overview")
    },
    {
      label: "Lịch hẹn",
      icon: <Calendar className="h-4 w-4" />,
      active: activeTab === "appointments",
      onClick: () => setActiveTab("appointments")
    },
    {
      label: "Hồ sơ bệnh án",
      icon: <FileText className="h-4 w-4" />,
      active: activeTab === "medical-records",
      onClick: () => setActiveTab("medical-records")
    },
    {
      label: "AI Chatbot",
      icon: <MessageCircle className="h-4 w-4" />,
      active: activeTab === "chatbot",
      onClick: () => setActiveTab("chatbot")
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "appointments":
        return <AppointmentsTab />;
      case "medical-records":
        return <MedicalRecordsTab />;
      case "chatbot":
        return <ChatbotTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <DashboardLayout
      userRole="patient"
      userName="Nguyễn Văn An"
      navigation={navigation}
    >
      {renderContent()}
      <ChatBubble />
    </DashboardLayout>
  );
};

const OverviewTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Chào mừng trở lại!</h1>
          <p className="text-muted-foreground mt-1">Theo dõi tình trạng sức khỏe của bạn</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Đặt lịch khám</span>
        </Button>
      </div>

      {/* Health Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cuộc hẹn sắp tới</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">15/03/2024</p>
                <p className="text-sm text-muted-foreground">10:30 - BS. Nguyễn Thị Lan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Chỉ số sức khỏe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-destructive" />
              <div>
                <p className="font-semibold">120/80 mmHg</p>
                <p className="text-sm text-muted-foreground">Huyết áp bình thường</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Đơn thuốc</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Pill className="h-5 w-5 text-secondary" />
              <div>
                <p className="font-semibold">2 loại thuốc</p>
                <p className="text-sm text-muted-foreground">Đang sử dụng</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Tư vấn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Sẵn sàng</p>
                <p className="text-sm text-muted-foreground">24/7 hỗ trợ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="medical-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Hoạt động gần đây</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { date: "12/03/2024", action: "Khám tổng quát", doctor: "BS. Nguyễn Thị Lan", status: "completed" },
              { date: "10/03/2024", action: "Xét nghiệm máu", doctor: "BS. Trần Văn Minh", status: "completed" },
              { date: "08/03/2024", action: "Tư vấn trực tuyến", doctor: "AI Chatbot", status: "completed" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.date} - {activity.doctor}</p>
                </div>
                <Badge className="status-completed">Hoàn thành</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader>
            <CardTitle>Mục tiêu sức khỏe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Uống đủ nước</span>
                <span>7/8 ly</span>
              </div>
              <Progress value={87.5} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Tập thể dục</span>
                <span>3/4 ngày</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Giấc ngủ</span>
                <span>7.5/8 giờ</span>
              </div>
              <Progress value={93.75} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AppointmentsTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản lý lịch hẹn</h1>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Đặt lịch mới</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {[
          { date: "15/03/2024", time: "10:30", doctor: "BS. Nguyễn Thị Lan", type: "Khám tổng quát", status: "scheduled" },
          { date: "20/03/2024", time: "14:00", doctor: "BS. Trần Văn Minh", type: "Tái khám", status: "scheduled" },
          { date: "12/03/2024", time: "09:00", doctor: "BS. Nguyễn Thị Lan", type: "Khám tổng quát", status: "completed" }
        ].map((appointment, index) => (
          <Card key={index} className="medical-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <Calendar className="h-8 w-8 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground">{appointment.date}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{appointment.type}</h3>
                    <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{appointment.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={appointment.status === 'scheduled' ? 'status-scheduled' : 'status-completed'}>
                    {appointment.status === 'scheduled' ? 'Đã lên lịch' : 'Đã hoàn thành'}
                  </Badge>
                  {appointment.status === 'scheduled' && (
                    <Button variant="outline" size="sm">Hủy</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const MedicalRecordsTab = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Hồ sơ bệnh án</h1>

      <div className="grid gap-6">
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Thông tin cá nhân</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Họ và tên</p>
              <p className="font-medium">Nguyễn Văn An</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ngày sinh</p>
              <p className="font-medium">15/05/1990</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Giới tính</p>
              <p className="font-medium">Nam</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nhóm máu</p>
              <p className="font-medium">O+</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Số điện thoại</p>
              <p className="font-medium">+84 123 456 789</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">patient@medicalhope.com</p>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Lịch sử khám bệnh</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "12/03/2024", diagnosis: "Khám tổng quát", doctor: "BS. Nguyễn Thị Lan", notes: "Tình trạng sức khỏe tốt" },
                { date: "10/02/2024", diagnosis: "Cảm cúm", doctor: "BS. Trần Văn Minh", notes: "Điều trị hoàn thành" }
              ].map((record, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{record.diagnosis}</h4>
                    <span className="text-sm text-muted-foreground">{record.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{record.doctor}</p>
                  <p className="text-sm">{record.notes}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ChatbotTab = () => {
  return (
    <div className="p-6">
      <Card className="medical-card h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5" />
            <span>AI Tư vấn sức khỏe</span>
            <Badge variant="secondary">Beta</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 border rounded-lg p-4 mb-4 bg-muted/20">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="bg-card p-3 rounded-lg shadow-sm max-w-md">
                  <p className="text-sm">Xin chào! Tôi là AI Assistant của MedicalHope. Tôi có thể giúp bạn tư vấn về các vấn đề sức khỏe cơ bản. Bạn cần hỗ trợ gì?</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="bg-primary p-3 rounded-lg shadow-sm max-w-md">
                  <p className="text-sm text-primary-foreground">Tôi bị đau đầu và hơi sốt. Tôi nên làm gì?</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="bg-card p-3 rounded-lg shadow-sm max-w-md">
                  <p className="text-sm">Dựa trên triệu chứng bạn mô tả, đây có thể là dấu hiệu của cảm cúm. Tôi khuyên bạn:</p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Nghỉ ngơi đầy đủ</li>
                    <li>• Uống nhiều nước</li>
                    <li>• Đo nhiệt độ thường xuyên</li>
                    <li>• Nếu sốt trên 38.5°C hoặc triệu chứng kéo dài, hãy đặt lịch khám</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Nhập câu hỏi về sức khỏe..." 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button>Gửi</Button>
          </div>
          
          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm text-warning-foreground">
              ⚠️ Đây chỉ là tư vấn cơ bản. Để có chẩn đoán chính xác, vui lòng đặt lịch khám với bác sĩ.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;