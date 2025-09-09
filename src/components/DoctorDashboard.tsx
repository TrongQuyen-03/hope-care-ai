import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/DashboardLayout";
import ChatBubble from "@/components/ChatBubble";
import { 
  Calendar, 
  FileText, 
  Users,
  MessageCircle,
  Stethoscope,
  Clock,
  Search,
  Plus,
  Edit,
  Eye
} from "lucide-react";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navigation = [
    {
      label: "Tổng quan",
      icon: <Stethoscope className="h-4 w-4" />,
      active: activeTab === "overview",
      onClick: () => setActiveTab("overview")
    },
    {
      label: "Bệnh nhân",
      icon: <Users className="h-4 w-4" />,
      active: activeTab === "patients",
      onClick: () => setActiveTab("patients")
    },
    {
      label: "Lịch khám",
      icon: <Calendar className="h-4 w-4" />,
      active: activeTab === "schedule",
      onClick: () => setActiveTab("schedule")
    },
    {
      label: "Bệnh án",
      icon: <FileText className="h-4 w-4" />,
      active: activeTab === "medical-records",
      onClick: () => setActiveTab("medical-records")
    },
    {
      label: "Tin nhắn",
      icon: <MessageCircle className="h-4 w-4" />,
      active: activeTab === "messages",
      onClick: () => setActiveTab("messages")
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DoctorOverviewTab />;
      case "patients":
        return <PatientsTab />;
      case "schedule":
        return <ScheduleTab />;
      case "medical-records":
        return <MedicalRecordsTab />;
      case "messages":
        return <MessagesTab />;
      default:
        return <DoctorOverviewTab />;
    }
  };

  return (
    <DashboardLayout
      userRole="doctor"
      userName="BS. Nguyễn Thị Lan"
      navigation={navigation}
    >
      {renderContent()}
      <ChatBubble />
    </DashboardLayout>
  );
};

const DoctorOverviewTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Chào mừng, BS. Nguyễn Thị Lan!</h1>
          <p className="text-muted-foreground mt-1">Hôm nay là 14/03/2024</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Lịch hẹn hôm nay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-sm text-muted-foreground">+2 so với hôm qua</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Bệnh nhân theo dõi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">24</div>
            <p className="text-sm text-muted-foreground">Đang điều trị</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tin nhắn chưa đọc</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">3</div>
            <p className="text-sm text-muted-foreground">Cần phản hồi</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Đánh giá trung bình</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">4.9</div>
            <p className="text-sm text-muted-foreground">⭐ Từ bệnh nhân</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="medical-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Lịch khám hôm nay</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { time: "09:00", patient: "Nguyễn Văn An", type: "Khám tổng quát", status: "upcoming" },
              { time: "10:30", patient: "Trần Thị Bình", type: "Tái khám", status: "upcoming" },
              { time: "14:00", patient: "Lê Văn Cường", type: "Tư vấn", status: "completed" }
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {appointment.time}
                  </div>
                  <div>
                    <p className="font-medium">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <Badge className={appointment.status === 'upcoming' ? 'status-scheduled' : 'status-completed'}>
                  {appointment.status === 'upcoming' ? 'Sắp tới' : 'Hoàn thành'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle>Thao tác nhanh</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Tạo bệnh án mới
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Xem lịch tuần
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Tin nhắn bệnh nhân
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Báo cáo y tế
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const PatientsTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản lý bệnh nhân</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Tìm kiếm bệnh nhân..." className="pl-9 w-64" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Thêm bệnh nhân
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {[
          { name: "Nguyễn Văn An", age: 34, condition: "Khám tổng quát", lastVisit: "12/03/2024", status: "stable" },
          { name: "Trần Thị Bình", age: 45, condition: "Cao huyết áp", lastVisit: "10/03/2024", status: "monitoring" },
          { name: "Lê Văn Cường", age: 28, condition: "Đau dạ dày", lastVisit: "08/03/2024", status: "recovered" }
        ].map((patient, index) => (
          <Card key={index} className="medical-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{patient.name}</h3>
                    <p className="text-sm text-muted-foreground">Tuổi: {patient.age} | {patient.condition}</p>
                    <p className="text-xs text-muted-foreground">Lần khám cuối: {patient.lastVisit}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={
                    patient.status === 'stable' ? 'status-completed' :
                    patient.status === 'monitoring' ? 'status-scheduled' : 
                    'bg-secondary/10 text-secondary border border-secondary/20'
                  }>
                    {patient.status === 'stable' ? 'Ổn định' :
                     patient.status === 'monitoring' ? 'Theo dõi' : 'Khỏi bệnh'}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Xem
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Sửa
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

const ScheduleTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Lịch khám tuần</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm lịch hẹn
        </Button>
      </div>

      <Card className="medical-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-7 gap-4 text-center">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">{day}</h3>
                <div className="space-y-1">
                  {index < 5 ? (
                    <>
                      <div className="bg-primary/10 text-primary p-2 rounded text-xs">
                        09:00 - Khám TQ
                      </div>
                      <div className="bg-secondary/10 text-secondary p-2 rounded text-xs">
                        14:00 - Tái khám
                      </div>
                    </>
                  ) : (
                    <div className="text-muted-foreground text-xs py-4">
                      Nghỉ
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MedicalRecordsTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản lý bệnh án</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Tạo bệnh án mới
        </Button>
      </div>

      <Card className="medical-card">
        <CardHeader>
          <CardTitle>Tạo/Cập nhật bệnh án</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Tên bệnh nhân</label>
              <Input placeholder="Nhập tên bệnh nhân" />
            </div>
            <div>
              <label className="text-sm font-medium">Chẩn đoán</label>
              <Input placeholder="Chẩn đoán sơ bộ" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Triệu chứng</label>
            <Textarea placeholder="Mô tả chi tiết triệu chứng..." />
          </div>
          <div>
            <label className="text-sm font-medium">Đơn thuốc</label>
            <Textarea placeholder="Kê đơn thuốc..." />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Hủy</Button>
            <Button>Lưu bệnh án</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MessagesTab = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tin nhắn với bệnh nhân</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="text-lg">Danh sách chat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Nguyễn Văn An", lastMessage: "Cảm ơn bác sĩ", time: "10:30", unread: 2 },
              { name: "Trần Thị Bình", lastMessage: "Khi nào tái khám?", time: "09:15", unread: 1 },
              { name: "Lê Văn Cường", lastMessage: "Thuốc đã hết", time: "Hôm qua", unread: 0 }
            ].map((chat, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {chat.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{chat.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{chat.time}</p>
                  {chat.unread > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {chat.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="medical-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Chat với Nguyễn Văn An</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-64 border rounded p-4 bg-muted/20 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-card p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm">Chào bác sĩ, em cảm thấy đau bụng từ sáng nay.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-primary-foreground">Đau ở vị trí nào? Mức độ thế nào?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-card p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm">Đau vùng thượng vị, đau tăng khi ăn.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Input placeholder="Nhập tin nhắn..." className="flex-1" />
              <Button>Gửi</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;