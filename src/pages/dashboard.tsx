
import React, { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ResourceCard from "@/components/Resources/ResourceCard";

const Dashboard = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || user.email?.split('@')[0] || "User");
      }
    });

    return () => unsubscribe();
  }, []);

  // Mock data for the dashboard
  const activityData = [
    { name: "Jan", views: 400, downloads: 240 },
    { name: "Feb", views: 300, downloads: 139 },
    { name: "Mar", views: 200, downloads: 980 },
    { name: "Apr", views: 278, downloads: 390 },
    { name: "May", views: 189, downloads: 480 },
    { name: "Jun", views: 239, downloads: 380 },
    { name: "Jul", views: 349, downloads: 430 },
  ];

  const myResources = [
    {
      id: "1",
      title: "JavaScript Fundamentals Guide",
      description: "A comprehensive guide covering all essential JavaScript concepts for beginners and intermediate developers.",
      type: "pdf",
      tags: ["JavaScript", "Programming", "Web Development"],
      author: {
        name: "John Smith",
        id: "user123",
      },
      rating: 4.7,
      commentCount: 12,
      downloadCount: 345,
    },
    {
      id: "2",
      title: "React Hooks Tutorial",
      description: "Learn how to use React hooks effectively in your applications with practical examples.",
      type: "video",
      tags: ["React", "JavaScript", "Frontend"],
      author: {
        name: "John Smith",
        id: "user123",
      },
      rating: 4.9,
      commentCount: 8,
      downloadCount: 210,
    },
  ];

  const savedResources = [
    {
      id: "3",
      title: "Machine Learning Basics",
      description: "An introduction to machine learning concepts and algorithms for beginners.",
      type: "presentation",
      tags: ["Machine Learning", "AI", "Data Science"],
      author: {
        name: "Sarah Johnson",
        id: "user456",
      },
      rating: 4.5,
      commentCount: 15,
      downloadCount: 520,
    },
    {
      id: "4",
      title: "Python for Data Science",
      description: "A hands-on guide to using Python for data analysis and visualization.",
      type: "code",
      tags: ["Python", "Data Science", "Programming"],
      author: {
        name: "Michael Brown",
        id: "user789",
      },
      rating: 4.8,
      commentCount: 25,
      downloadCount: 780,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold">Welcome, {userName}</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upload Credits</CardTitle>
            <CardDescription>Available upload credits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">75% of monthly quota used</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Resource Views</CardTitle>
            <CardDescription>Total views across all resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,254</div>
            <Progress value={60} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 12%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Downloads</CardTitle>
            <CardDescription>Total resource downloads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">432</div>
            <Progress value={45} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 8%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity Overview</CardTitle>
          <CardDescription>Views and downloads over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="views"
                  stackId="1"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="downloads"
                  stackId="2"
                  stroke="hsl(var(--accent))"
                  fill="hsl(var(--accent))"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="my-resources">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-resources">My Resources</TabsTrigger>
          <TabsTrigger value="saved">Saved Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
