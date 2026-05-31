export interface Product {
  slug: string;
  nama: string;
  harga: number;
  deskripsi: string;
  bahan: string;
  warna: string;
  gambar: string;
}

export const products: Product[] = [
  {
    slug: "pashmina-ceruty-silk",
    nama: "Pashmina Ceruty Silk",
    harga: 65000,
    deskripsi: "Pashmina ceruty silk dengan bahan lembut dan jatuh. Cocok untuk daily look maupun acara formal. Tersedia berbagai pilihan warna elegan.",
    bahan: "Ceruty Silk",
    warna: "Emerald Green",
    gambar: "/images/pashmina-ceruty-silk.svg",
  },
  {
    slug: "hijab-segi-empat-babydoll",
    nama: "Hijab Segi Empat Babydoll",
    harga: 45000,
    deskripsi: "Hijab segi empat dengan bahan babydoll yang adem dan ringan. Tidak menerawang, nyaman dipakai seharian.",
    bahan: "Babydoll",
    warna: "Sage Green",
    gambar: "/images/hijab-segi-empat-babydoll.svg",
  },
  {
    slug: "bergo-instan-zamrud",
    nama: "Bergo Instan Zamrud",
    harga: 55000,
    deskripsi: "Bergo instan praktis tinggal pakai. Paduan hijau zamrud yang elegan dengan bahan jersey premium yang lentur.",
    bahan: "Jersey Premium",
    warna: "Dark Emerald",
    gambar: "/images/bergo-instan-zamrud.svg",
  },
  {
    slug: "khimar-plisket",
    nama: "Khimar Plisket",
    harga: 85000,
    deskripsi: "Khimar plisket dengan detail lipit rapi. Potongan longgar dan panjang menutup dada. Cocok untuk acara formal.",
    bahan: "Plisket",
    warna: "Forest Green",
    gambar: "/images/khimar-plisket.svg",
  },
  {
    slug: "pashmina-cotton-premium",
    nama: "Pashmina Cotton Premium",
    harga: 75000,
    deskripsi: "Pashmina cotton premium dengan serat katun alami yang adem dan menyerap keringat. Tidak panas saat dipakai.",
    bahan: "Cotton Premium",
    warna: "Mint Green",
    gambar: "/images/pashmina-cotton-premium.svg",
  },
  {
    slug: "hijab-sport-jersey",
    nama: "Hijab Sport Jersey",
    harga: 50000,
    deskripsi: "Hijab sport berbahan jersey anti slip. Cocok untuk olahraga dan aktivitas outdoor. Tetap nyaman meski bergerak aktif.",
    bahan: "Jersey Anti Slip",
    warna: "Lime Green",
    gambar: "/images/hijab-sport-jersey.svg",
  },
  {
    slug: "segi-empat-ceruty",
    nama: "Segi Empat Ceruty",
    harga: 40000,
    deskripsi: "Hijab segi empat ceruty flowly dengan tekstur ringan dan jatuh. Tersedia motif polos dan printing.",
    bahan: "Ceruty",
    warna: "Teal Green",
    gambar: "/images/segi-empat-ceruty.svg",
  },
  {
    slug: "pashmina-satin-deluxe",
    nama: "Pashmina Satin Deluxe",
    harga: 95000,
    deskripsi: "Pashmina satin deluxe dengan kilau mewah. Cocok untuk acara kondangan dan pesta. Bahan halus dan tidak mudah kusut.",
    bahan: "Satin Deluxe",
    warna: "Jade Green",
    gambar: "/images/pashmina-satin-deluxe.svg",
  },
];
