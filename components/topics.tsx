import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Topics() {
  const topics = [
    { date: "2025.10.07", tag: "診療情報", title: "11月休診日最新消息、祝日診療日最新消息" },
    { date: "2025.09.02", tag: "診療情報", title: "10月休診日最新消息、祝日診療日最新消息" },
    { date: "2025.08.08", tag: "診療情報", title: "9月休診日最新消息、祝日診療日最新消息" },
  ]

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Topics */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Topics</h2>
            <p className="text-center text-muted-foreground mb-8">最新消息</p>

            <div className="space-y-4 mb-6">
              {topics.map((topic, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{topic.date}</span>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full whitespace-nowrap">
                      {topic.tag}
                    </span>
                    <p className="text-sm text-foreground">{topic.title}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="rounded-full px-8 bg-transparent">
                一覧へ
              </Button>
            </div>
          </div>

          {/* Consultation Hours */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Consultation hours</h2>
            <p className="text-center text-muted-foreground mb-8">診療時間</p>

            <Card className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left text-sm font-medium">診療時間</th>
                    <th className="pb-3 text-center text-sm font-medium">一</th>
                    <th className="pb-3 text-center text-sm font-medium">二</th>
                    <th className="pb-3 text-center text-sm font-medium">三</th>
                    <th className="pb-3 text-center text-sm font-medium">四</th>
                    <th className="pb-3 text-center text-sm font-medium">五</th>
                    <th className="pb-3 text-center text-sm font-medium">六</th>
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

              <p className="text-xs text-muted-foreground mt-4 text-center">
                ※週六至9:00、國定假日至17:00
                <br />
                休診日：週三・週日・國定假日
              </p>
            </Card>

            <div className="text-center mt-6">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                預約診療
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
