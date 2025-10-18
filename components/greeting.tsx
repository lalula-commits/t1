import { Button } from "@/components/ui/button"

export function Greeting() {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Greeting</h2>
        <p className="text-center text-muted-foreground mb-12">院長致詞</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img src="/bear/professional-asian-male-dentist-portrait.jpg" alt="院長照片" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              您好，我是微笑牙醫診所的院長。本院以「親近社區的便民牙醫」為理念進行診療。
              除了治療技術外，我們也致力於為患者提供安心且詳細的說明。
            </p>

            <p className="text-foreground leading-relaxed">
              牙齒健康與全身健康息息相關。基於「預防勝於治療」的理念，
              我們為每位患者提供適合的預防保健計畫。
            </p>

            <p className="text-foreground leading-relaxed">
              我們將全力支持大家的口腔健康，全體工作人員期待為您服務。
              為了讓小朋友也能安心就診，我們也設置了兒童專區。
            </p>

            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                院長介紹
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
            <img src="/bear/room/IMG_2213.jpg" alt="診療室" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
