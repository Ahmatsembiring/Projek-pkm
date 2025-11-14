export default function LegalitasPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-10">Legalitas & Sertifikasi</h1>
          <p className="text-xl font-poppins max-w-2xl mx-auto mt-8">Dokumen resmi yang memastikan bahwa EcoScent telah terdaftar, terlindungi, dan memenuhi standar legalitas sebagai brand reed diffuser yang terpercaya</p>
        </div>

        <div className="bg-card rounded-lg p-12 border border-border">
          <div className="flex justify-center mb-12">
            <div className="bg-primary text-white rounded-lg px-8 py-4 font-bold text-lg">Creative Director</div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-4">
                <p className="font-bold text-lg">Design Division</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>UI/UX Designer</li>
                <li>Graphic Designer</li>
                <li>Brand Designer</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-4">
                <p className="font-bold text-lg">Development Division</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
                <li>DevOps Engineer</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-4">
                <p className="font-bold text-lg">Strategy Division</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Content Strategist</li>
                <li>Marketing Manager</li>
                <li>Project Manager</li>
              </ul>
            </div>
          </div>

         
          </div>
        </div>
      </div>
  );
}
