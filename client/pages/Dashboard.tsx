import AppNav from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Shield, ArrowRight, ServerCog } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-deep-900 via-blue-deep-800 to-slate-900">
      <AppNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400">Overview and quick actions</p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Employees</p>
                <p className="text-2xl font-semibold text-white">Manage</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Departments</p>
                <p className="text-2xl font-semibold text-white">Overview</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Access</p>
                <p className="text-2xl font-semibold text-white">Admin</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Card className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-2 group-hover:text-blue-100 transition-colors duration-300">
                <Users className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                HR
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 relative z-10">
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm">
                Manage employee data and departments
              </p>
              <Button
                onClick={() => navigate("/hr")}
                className="bg-blue-500/90 hover:bg-blue-500 text-white shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 self-start"
              >
                Go <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-2 group-hover:text-purple-100 transition-colors duration-300">
                <Shield className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                Admin
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 relative z-10">
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm">
                Admin tools and settings
              </p>
              <Button
                onClick={() => navigate("/admin")}
                className="bg-purple-500/90 hover:bg-purple-500 text-white shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 self-start"
              >
                Go <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-2 group-hover:text-orange-100 transition-colors duration-300">
                <ServerCog className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                IT
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 relative z-10">
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm">
                IT accounts and credentials management
              </p>
              <Button
                onClick={() => navigate("/it-dashboard")}
                className="bg-orange-500/90 hover:bg-orange-500 text-white shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 self-start"
              >
                Go <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-2 group-hover:text-green-100 transition-colors duration-300">
                <Building2 className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                System Info
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 relative z-10">
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm">
                IT systems overview and records
              </p>
              <Button
                onClick={() => navigate("/system-info")}
                className="bg-green-500/90 hover:bg-green-500 text-white shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 self-start"
              >
                Go <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-2 group-hover:text-cyan-100 transition-colors duration-300">
                <Users className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                PC/Laptop Info
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 relative z-10">
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm">
                Track PC and laptop assets
              </p>
              <Button
                onClick={() => navigate("/pc-laptop-info")}
                className="bg-cyan-500/90 hover:bg-cyan-500 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 self-start"
              >
                Go <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
