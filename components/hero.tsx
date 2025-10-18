export function Hero() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img src="/bear/floor1/IMG_2201.jpg" alt="診所環境" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img src="/bear/floor1/IMG_2205.jpg" alt="診療空間" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img src="/bear/floor1/IMG_2211.jpg" alt="診療設備" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center py-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-balance tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              追求患者滿意度的
              <br />
              牙醫診所
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-6xl">🦷</span>
          </div>
        </div>
      </div>
    </section>
  )
}
