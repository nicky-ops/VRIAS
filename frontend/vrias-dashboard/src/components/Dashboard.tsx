import React, { useState } from 'react'
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { AlertTriangle, BarChart2, Camera, Map, Menu, TrafficCone, Settings, Triangle } from 'lucide-react'

const Logo = () => (
  <div className="flex items-center">
    <span className="text-3xl font-bold text-white">VRI</span>
    <Triangle fill="#FF6600" stroke="#FFFFFF" className="w-8 h-8 -ml-1 mr-1" />
    <span className="text-3xl font-bold text-white">S</span>
  </div>
)

export default function VRIASDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-900 text-white w-64 min-h-screen p-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <nav>
          <div className="mb-6">
            <Logo />
          </div>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-500">
                <BarChart2 className="mr-2" />
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-500">
                <Map className="mr-2" />
                Map View
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-500">
                <Camera className="mr-2" />
                Image Analysis
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-500">
                <AlertTriangle className="mr-2" />
                Defect Reports
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-500">
                <Settings className="mr-2" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                <Menu />
              </button>
              <h2 className="text-xl font-semibold text-gray-800 ml-2">Dashboard</h2>
            </div>
            <div className="flex items-center">
              <Input type="text" placeholder="Search..." className="mr-2" />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Search</Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Roads Analyzed</CardTitle>
                  <TrafficCone className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,257 km</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Defects Detected</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,423</div>
                  <p className="text-xs text-muted-foreground">+2.6% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Maintenance Required</CardTitle>
                  <Settings className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">423 km</div>
                  <p className="text-xs text-muted-foreground">+4% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Road Safety Index</CardTitle>
                  <BarChart2 className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Recent Defect Detections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Location</th>
                          <th scope="col" className="px-6 py-3">Defect Type</th>
                          <th scope="col" className="px-6 py-3">Severity</th>
                          <th scope="col" className="px-6 py-3">Date Detected</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">Nairobi-Mombasa Highway, KM 56</td>
                          <td className="px-6 py-4">Pothole</td>
                          <td className="px-6 py-4">High</td>
                          <td className="px-6 py-4">2023-06-15</td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                          <td className="px-6 py-4">Kisumu-Kakamega Road, KM 23</td>
                          <td className="px-6 py-4">Crack</td>
                          <td className="px-6 py-4">Medium</td>
                          <td className="px-6 py-4">2023-06-14</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">Eldoret Bypass, KM 7</td>
                          <td className="px-6 py-4">Rutting</td>
                          <td className="px-6 py-4">Low</td>
                          <td className="px-6 py-4">2023-06-13</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Defect Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="chart">
                    <TabsList>
                      <TabsTrigger value="chart">Chart</TabsTrigger>
                      <TabsTrigger value="map">Map</TabsTrigger>
                    </TabsList>
                    <TabsContent value="chart">
                      <div className="h-80 flex items-center justify-center bg-gray-100 text-gray-500">
                        Chart placeholder: Defect types distribution
                      </div>
                    </TabsContent>
                    <TabsContent value="map">
                      <div className="h-80 flex items-center justify-center bg-gray-100 text-gray-500">
                        Map placeholder: Defect locations
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Road Condition Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gray-100 text-gray-500">
                    Chart placeholder: Road condition over time
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}