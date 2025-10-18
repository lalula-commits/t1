import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
            <img src="/bear/名片logo.png" alt="診所Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Smile Dental Clinic</h1>
            <p className="text-xs text-muted-foreground">微笑牙醫診所</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors">
            首頁
          </a>
          <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
            診療介紹
          </a>
          <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
            診療項目
          </a>
          <a href="#staff" className="text-sm text-foreground hover:text-primary transition-colors">
            醫療團隊
          </a>
          <a href="#access" className="text-sm text-foreground hover:text-primary transition-colors">
            診所介紹
          </a>
          <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
            聯絡我們
          </a>
        </nav>

        <div className="flex items-center gap-2 text-primary">
          <Phone className="w-5 h-5" />
          <span className="font-semibold text-lg">02-1234-5678</span>
        </div>
      </div>
    </header>
  )
}
