import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  LogOut, 
  Settings, 
  User, 
  Bell,
  Menu,
  MessageCircle
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "admin" | "doctor" | "patient";
  userName: string;
  navigation: Array<{
    label: string;
    icon: ReactNode;
    active?: boolean;
    onClick: () => void;
  }>;
}

const DashboardLayout = ({ children, userRole, userName, navigation }: DashboardLayoutProps) => {
  const getRoleDisplay = (role: string) => {
    switch (role) {
      case "admin": return { label: "Quản trị viên", variant: "destructive" as const };
      case "doctor": return { label: "Bác sĩ", variant: "default" as const };
      case "patient": return { label: "Bệnh nhân", variant: "secondary" as const };
      default: return { label: "Người dùng", variant: "outline" as const };
    }
  };

  const roleDisplay = getRoleDisplay(userRole);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="flex h-16 items-center px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MedicalHope</span>
            <Badge variant={roleDisplay.variant} className="ml-2">
              {roleDisplay.label}
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 ml-8">
            {navigation.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                onClick={item.onClick}
                className="flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
            </Button>

            {/* AI Chatbot */}
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>AI Tư vấn</span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt={userName} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {userName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">
                      {roleDisplay.label}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Hồ sơ cá nhân
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Cài đặt
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="border-t md:hidden p-4">
          <nav className="flex flex-wrap gap-2">
            {navigation.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                onClick={item.onClick}
                className="flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;