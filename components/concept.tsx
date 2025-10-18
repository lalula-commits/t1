export function Concept() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Concept</h2>
        <p className="text-center text-muted-foreground mb-12">理念</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-start gap-3">
                <span className="text-primary">1.</span>
                <span>安心的診療空間</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                從小朋友到長者都能安心就診的空間，
                全體工作人員致力於提供優質的診療服務。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-start gap-3">
                <span className="text-primary">2.</span>
                <span>清楚的說明</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                使用X光影像、治療器具等，
                為患者清楚詳細地說明治療內容。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-start gap-3">
                <span className="text-primary">3.</span>
                <span>患者信賴與預防</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                獲得患者信賴，全力守護您珍貴的口腔健康。
                同時也致力於預防牙科治療。
              </p>
            </div>

            <div className="ml-8 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>本院堅持患者第一主義，對治療方法精益求精，</p>
              <p>提供全方位的牙科治療服務。</p>
              <p>週六也提供診療服務，即使需要多次就診的患者，</p>
              <p>我們也會努力讓您在預約時間內完成診療。</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img src="/bear/floor1/IMG_2190.jpg" alt="診所環境" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
