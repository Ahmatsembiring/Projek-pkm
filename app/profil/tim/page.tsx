import { Instagram } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Maeda Wahyuningrum,S.Hut.,M.Si',
    role: 'Dosen Pendamping',
    bio: 'Dosen pendamping yang membimbing proses pengembangan usaha, memberikan arahan strategis, serta memastikan pelaksanaan PKKM berjalan sesuai standar akademik dan kewirausahaan.',
    image: '/Dosen.png',
    instagram: 'https://www.instagram.com/maedawhyning/', // Ganti dengan username Instagram
  },
  {
    id: 2,
    name: 'Rihan Rifqi',
    role: 'Ketua TIM EcoScent',
    bio: 'Ketua tim PKKM EcoScent yang memimpin proses perencanaan, eksekusi, dan pengembangan produk reed diffuser berbahan alami dengan fokus pada inovasi, keberlanjutan, dan nilai kebermanfaatan bagi masyarakat',
    image: '/Rihan.png',
    instagram: 'https://www.instagram.com/rihan.rifqi/', // Ganti dengan username Instagram
  },
  {
    id: 3,
    name: 'Aprilia Chrystin Panjaitan',
    role: 'Sekretaris TIM EcoScent',
    bio: 'Sekretaris dan desainer EcoScent yang bertanggung jawab dalam pengelolaan administrasi tim serta perancangan visual produk dan identitas brand agar tetap konsisten dan menarik',
    image: '/Aprilia.png',
    instagram: 'https://www.instagram.com/apriliachrystin_/', // Ganti dengan username Instagram
  },
  {
    id: 4,
    name: 'Hadi Naufal',
    role: 'Bendahara',
    bio: 'Bendahara PKKM EcoScent yang bertanggung jawab atas pengelolaan keuangan, pencatatan transaksi, serta perencanaan anggaran untuk memastikan operasional usaha berjalan efisien dan transparan',
    image: '/Hadi.png',
    instagram: 'https://www.instagram.com/ursbandaids/', // Ganti dengan username Instagram
  },
  {
    id: 5,
    name: 'Akmal Fauzan Sutisna',
    role: 'Logistik',
    bio: 'Penanggung jawab logistik EcoScent yang memastikan proses pengadaan bahan baku, penyimpanan, dan distribusi berjalan lancar, tepat waktu, dan efisien',
    image: '/akmal.png',
    instagram: 'https://www.instagram.com/_akmal.fs/', // Ganti dengan username Instagram
  },
  {
    id: 6,
    name: 'Rezki Desnata Sitepu',
    role: 'Logistik',
    bio: 'Mengelola alur logistik EcoScent mulai dari ketersediaan bahan baku, pengepakan, hingga distribusi produk agar operasional produksi tetap stabil dan terkoordinasi.',
    image: '/Rezki.png',
    instagram: 'https://www.instagram.com/rezkistp._/', // Ganti dengan username Instagram
  },
];

export default function TimPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Tim Kami</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Profesional berbakat yang siap membuat visi Anda menjadi kenyataan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-all duration-300 group hover:shadow-lg text-center">
              {/* Foto Bulat */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300">
                  <img src={member.image || '/placeholder.svg'} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                {/* Instagram Icon */}
                <div className="flex justify-center">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <Instagram size={18} />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
