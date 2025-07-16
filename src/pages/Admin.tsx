
import React from 'react';
import { Zap, BarChart3, Users, MessageSquare, Settings, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leads AI Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <Settings className="h-6 w-6 text-gray-600" />
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h1>
          <p className="text-gray-600">Here's what's happening with your chatbots today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Leads", value: "1,234", icon: Users, change: "+12%" },
            { title: "Active Chats", value: "56", icon: MessageSquare, change: "+8%" },
            { title: "Conversion Rate", value: "23.4%", icon: BarChart3, change: "+5%" },
            { title: "Response Time", value: "0.8s", icon: Zap, change: "-15%" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-green-600">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Dashboard Coming Soon!</CardTitle>
            <CardDescription className="text-blue-100">
              We're building a comprehensive dashboard to manage your chatbots, analyze performance, and optimize conversions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What's Coming:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Real-time chat monitoring and analytics</li>
                <li>• Lead management and qualification tools</li>
                <li>• Chatbot training and customization</li>
                <li>• Integration management</li>
                <li>• Team collaboration features</li>
              </ul>
              <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100" asChild>
                <a href="/">Back to Main Site</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
