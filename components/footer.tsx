import { Phone, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src="/bear/名片logo.png" alt="診所Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Smile Dental Clinic</h3>
                <p className="text-sm text-muted-foreground">微笑牙醫診所</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">〒123-4567</p>
                  <p className="text-sm text-foreground">東京都渋谷区桜丘町1-2-3</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    ※土曜日は9:00、祝日は17:00まで
                    <br />
                    休診日：水曜・日曜・祝日
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-primary mb-8">
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-xs text-muted-foreground">ご予約・お問い合わせはお気軽にどうぞ</p>
                <p className="text-2xl font-bold">02-1234-5678</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">イオンタウン内（駐車場）（サイゼリヤ）の隣接</p>
          </div>

          {/* Consultation Hours */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">診療時間</h3>

            <Card className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left text-sm font-medium">診療時間</th>
                    <th className="pb-3 text-center text-sm font-medium">月</th>
                    <th className="pb-3 text-center text-sm font-medium">火</th>
                    <th className="pb-3 text-center text-sm font-medium">水</th>
                    <th className="pb-3 text-center text-sm font-medium">木</th>
                    <th className="pb-3 text-center text-sm font-medium">金</th>
                    <th className="pb-3 text-center text-sm font-medium">土</th>
                    <th className="pb-3 text-center text-sm font-medium">日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 text-sm">09:00 - 13:00</td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-muted"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-muted"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm">14:30 - 19:00</td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-muted"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-muted"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ホーム
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              診療内容
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              診療項目
            </a>
            <a href="#staff" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              医療団隊
            </a>
            <a href="#access" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              診所介紹
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              アクセス
            </a>
          </nav>

          <p className="text-center text-xs text-muted-foreground">© 2025 Smile Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
