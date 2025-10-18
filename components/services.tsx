import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: "🦷",
      title: "人工植牙",
      description: "Implant",
    },
    {
      icon: "✨",
      title: "預防牙科・蛀牙治療",
      description: "Preventive Dentistry",
    },
    {
      icon: "🦷",
      title: "美容牙科",
      description: "Cosmetic Dentistry",
    },
    {
      icon: "💎",
      title: "牙齒矯正・美白",
      description: "Orthodontics",
    },
    {
      icon: "👶",
      title: "兒童牙科・假牙治療",
      description: "Pediatric Dentistry",
    },
  ]

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Services</h2>
        <p className="text-center text-muted-foreground mb-12">診療項目</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center bg-card">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{service.title}</h3>
                  <p className="text-xs text-muted-foreground">{service.description}</p>
                </div>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-xs px-4"
                >
                  詳細了解
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden group cursor-pointer">
            <div className="aspect-video">
              <img
                src="/bear/room/IMG_2206.jpg"
                alt="醫療團隊"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
              <span className="text-white font-bold text-xl">醫療團隊</span>
            </div>
          </Card>

          <Card className="relative overflow-hidden group cursor-pointer">
            <div className="aspect-video">
              <img
                src="/bear/room/IMG_2216.jpg"
                alt="診所介紹"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
              <span className="text-white font-bold text-xl">診所介紹</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
