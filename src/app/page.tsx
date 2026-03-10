"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Star, Award, Fish } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Tentang", id: "about" },
            { name: "Produk Ikan", id: "products" },
            { name: "Kenapa Kami", id: "features" },
            { name: "Kontak", id: "contact" },
            { name: "Testimoni", id: "testimonials" }
          ]}
          button={{
            text: "Chat WhatsApp",            href: "https://wa.me/6281231223553"
          }}
          brandName="Tansil Goldfish"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Toko Ikan Mas Koki Berkualitas di Karawang"
          description="Menyediakan berbagai jenis Goldfish sehat dan berkualitas untuk kolektor, hobiis, dan pemula. Ikan kami dirawat dengan sempurna untuk memastikan kesehatan dan warna terbaik."
          tag="⭐ 5.0 Rating dari Google"
          tagIcon={Star}
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "📞 Hubungi Sekarang", href: "tel:+6281231223553" },
            { text: "💬 Chat WhatsApp", href: "https://wa.me/6281231223553" }
          ]}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/halfmoon-betta-fish_1150-7815.jpg",              imageAlt: "Koleksi ikan mas koki premium di akuarium"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/sad-betta-fish-swimming-plastic-cups_23-2148359865.jpg",              imageAlt: "Ikan ranchu berkualitas tinggi"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/gradient-violet-pink-dumbo-betta-splendens-fighting-fish_23-2148359848.jpg",              imageAlt: "Ikan oranda cantik di air"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/siam-betta-fish_1150-7811.jpg",              imageAlt: "Ikan lionhead premium collection"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-goldfish_1137-261.jpg",              imageAlt: "Ikan ryukin berkualitas sempurna"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Profesional & Terpercaya"
          tagIcon={Award}
          title="Tentang Tansil Goldfish"
          description="Tansil Goldfish adalah toko ikan hias terpercaya di Karawang yang menyediakan berbagai jenis ikan mas koki berkualitas tinggi. Kami melayani hobiis pemula, kolektor berpengalaman, dan pecinta aquascape dengan komitmen penuh terhadap kesehatan dan kualitas setiap ikan. Setiap ikan dirawat dengan baik untuk memastikan kesehatan optimal, warna cerah, dan kualitas terbaik."
          metrics={[
            { value: "5.0★", title: "Rating Google Sempurna" },
            { value: "1000+", title: "Pelanggan Puas di Karawang" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/female-butcher-demonstrating-meat-woman_7502-4774.jpg"
          imageAlt="Toko ikan Tansil Goldfish profesional"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Jenis Ikan yang Tersedia"
          description="Koleksi lengkap ikan mas koki berkualitas premium untuk semua tingkat pengalaman"
          tag="Produk Terbaik"
          tagIcon={Fish}
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              brand: "Tansil Goldfish",              name: "Ranchu Goldfish",              price: "Rp 150.000 - Rp 500.000",              rating: 5,
              reviewCount: "98",              imageSrc: "http://img.b2bpic.net/free-photo/sad-betta-fish-swimming-plastic-cups_23-2148359865.jpg",              imageAlt: "Ikan ranchu berkualitas tinggi"
            },
            {
              id: "2",              brand: "Tansil Goldfish",              name: "Oranda Goldfish",              price: "Rp 120.000 - Rp 400.000",              rating: 5,
              reviewCount: "87",              imageSrc: "http://img.b2bpic.net/free-photo/gradient-violet-pink-dumbo-betta-splendens-fighting-fish_23-2148359848.jpg",              imageAlt: "Ikan oranda cantik dan sehat"
            },
            {
              id: "3",              brand: "Tansil Goldfish",              name: "Lionhead Goldfish",              price: "Rp 180.000 - Rp 550.000",              rating: 5,
              reviewCount: "92",              imageSrc: "http://img.b2bpic.net/free-photo/siam-betta-fish_1150-7811.jpg",              imageAlt: "Ikan lionhead premium"
            },
            {
              id: "4",              brand: "Tansil Goldfish",              name: "Ryukin Goldfish",              price: "Rp 100.000 - Rp 350.000",              rating: 5,
              reviewCount: "76",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-goldfish_1137-261.jpg",              imageAlt: "Ikan ryukin berkualitas"
            },
            {
              id: "5",              brand: "Tansil Goldfish",              name: "Baby Goldfish",              price: "Rp 25.000 - Rp 75.000",              rating: 5,
              reviewCount: "114",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-betta-fish-with-copy-space_23-2148359882.jpg",              imageAlt: "Ikan mas koki muda sehat"
            }
          ]}
          buttons={[
            { text: "Tanya Ketersediaan", href: "https://wa.me/6281231223553" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Kenapa Pilih Tansil Goldfish?"
          description="Kami adalah pilihan terbaik untuk kebutuhan ikan hias berkualitas Anda"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Kualitas",              title: "Ikan Sehat & Berkualitas",              subtitle: "Setiap ikan dipilih dengan standar kualitas tertinggi",              description: "Kami hanya menjual ikan yang telah melewati seleksi ketat untuk memastikan kesehatan, vitalitas, dan keindahan. Setiap ikan dipastikan bebas penyakit dan dalam kondisi prima.",              imageSrc: "http://img.b2bpic.net/free-photo/sad-betta-fish-swimming-plastic-cups_23-2148359865.jpg",              imageAlt: "Ikan berkualitas tinggi"
            },
            {
              id: 2,
              tag: "Perawatan",              title: "Dirawat dengan Baik",              subtitle: "Fasilitas perawatan profesional dan modern",              description: "Tank kami dilengkapi dengan sistem aerasi dan filtrasi profesional. Setiap ikan mendapat nutrisi optimal dan lingkungan yang ideal untuk tumbuh dan bersinar dengan warna terbaik.",              imageSrc: "http://img.b2bpic.net/free-photo/female-butcher-demonstrating-meat-woman_7502-4774.jpg",              imageAlt: "Fasilitas toko profesional"
            },
            {
              id: 3,
              tag: "Layanan",              title: "Cocok untuk Semua Level",              subtitle: "Dari pemula hingga kolektor berpengalaman",              description: "Kami melayani hobiis pemula dengan konsultasi lengkap, hingga kolektor profesional dengan ikan show quality. Tim kami siap membantu Anda memilih ikan yang tepat sesuai kebutuhan.",              imageSrc: "http://img.b2bpic.net/free-photo/siam-betta-fish_1150-7811.jpg",              imageAlt: "Variasi jenis ikan lengkap"
            },
            {
              id: 4,
              tag: "Lokasi",              title: "Lokasi Strategis di Karawang",              subtitle: "Mudah dijangkau dari mana saja",              description: "Toko kami berlokasi di Perumahan Villa Permata Hijau, Majalaya, Karawang. Akses mudah dengan berbagai moda transportasi dan parkiran yang luas untuk kenyamanan Anda.",              imageSrc: "http://img.b2bpic.net/free-photo/map-marked-with-pins-by-tourist_23-2148232411.jpg",              imageAlt: "Lokasi toko di Karawang"
            },
            {
              id: 5,
              tag: "Kepercayaan",              title: "Rating 5.0 dari Pelanggan",              subtitle: "Dipercaya oleh ribuan pelanggan puas",              description: "Testimoni positif dari pelanggan di seluruh Karawang membuktikan komitmen kami terhadap kepuasan pelanggan. Bergabunglah dengan ribuan kolektor yang puas dengan layanan kami.",              imageSrc: "http://img.b2bpic.net/free-photo/gradient-violet-pink-dumbo-betta-splendens-fighting-fish_23-2148359848.jpg",              imageAlt: "Kepuasan pelanggan terbukti"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Apa Kata Pelanggan Kami"
          description="Ribuan pelanggan puas telah membuktikan kualitas dan layanan kami"
          tag="Testimoni"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Budi Santoso",              handle: "Kolektor Ikan",              testimonial: "Toko ikan terbaik di Karawang! Ikan-ikan berkualitas tinggi dan staff yang profesional. Sudah 3 kali beli dan selalu puas.",              imageSrc: "http://img.b2bpic.net/free-photo/headshot-cute-emotional-caucasian-girl-with-hair-knot-having-rest-cafe_273609-9038.jpg",              imageAlt: "Budi Santoso"
            },
            {
              id: "2",              name: "Siti Nurhaliza",              handle: "Hobiis Pemula",              testimonial: "Sangat membantu dan konsultatif. Saya pemula dan mereka dengan sabar menjelaskan cara merawat ikan dan aquarium saya.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-looking-smiling-grey-t-shirt-front-view_176474-16115.jpg",              imageAlt: "Siti Nurhaliza"
            },
            {
              id: "3",              name: "Ahmad Wijaya",              handle: "Pecinta Aquascape",              testimonial: "Kualitas ikan untuk aquascape saya sangat memuaskan. Warna cerah, sehat, dan cocok untuk display aquarium modern saya.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-businessman-looking-camera_23-2147839978.jpg",              imageAlt: "Ahmad Wijaya"
            },
            {
              id: "4",              name: "Dewi Lestari",              handle: "Ibu Rumah Tangga",              testimonial: "Pelayanan ramah dan responsif di WhatsApp. Ikan sampai dengan selamat dan semua hidup sehat sampai sekarang.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              imageAlt: "Dewi Lestari"
            },
            {
              id: "5",              name: "Rudi Hermawan",              handle: "Pemilik Toko Aqua",              testimonial: "Supplier terpercaya untuk usaha toko ikan saya. Konsistensi kualitas dan harga yang kompetitif membuat saya selalu kembali.",              imageSrc: "http://img.b2bpic.net/free-photo/excited-cheerful-blond-girl-rejoicing-camera-with-copy-space-text-promotional-content-near-yellow-background_574295-2365.jpg",              imageAlt: "Rudi Hermawan"
            },
            {
              id: "6",              name: "Linda Kusuma",              handle: "Kolektor Premium",              testimonial: "Ikan-ikan show quality mereka sangat kompetitif. Sudah menang beberapa kompetisi dengan ikan yang saya beli dari sini.",              imageSrc: "http://img.b2bpic.net/free-photo/cute-smiling-curly-woman-lean-wall_176420-16738.jpg",              imageAlt: "Linda Kusuma"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Pertanyaan Umum"
          description="Jawaban untuk pertanyaan yang sering diajukan pelanggan kami"
          tag="FAQ"
          textboxLayout="default"
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/female-butcher-demonstrating-meat-woman_7502-4774.jpg"
          imageAlt="Toko Tansil Goldfish"
          mediaPosition="left"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Berapa harga ikan di Tansil Goldfish?",              content: "Harga kami bervariasi tergantung jenis dan kualitas ikan. Untuk ikan pemula mulai dari Rp 25.000, hingga ikan show quality yang bisa mencapai Rp 500.000 atau lebih. Hubungi kami untuk harga detail dan penawaran khusus."
            },
            {
              id: "2",              title: "Apakah ada garansi kesehatan ikan?",              content: "Kami menjamin ikan dalam kondisi sehat saat dikirim. Jika ada masalah dalam 24 jam pertama, hubungi kami segera dengan foto/video untuk solusi penggantian."
            },
            {
              id: "3",              title: "Bagaimana cara pemesanan dan pengiriman?",              content: "Anda bisa menghubungi kami via WhatsApp untuk pesan. Kami siap mengepak ikan dengan aman. Pengiriman bisa door-to-door dengan biaya sesuai lokasi, atau ambil langsung di toko kami."
            },
            {
              id: "4",              title: "Apa saja jenis ikan yang tersedia?",              content: "Kami menyediakan berbagai jenis goldfish premium seperti Ranchu, Oranda, Lionhead, Ryukin, dan Baby Goldfish. Stok selalu berkembang, tanya ketersediaan jenis spesifik Anda via WhatsApp."
            },
            {
              id: "5",              title: "Apakah ada layanan konsultasi perawatan ikan?",              content: "Ya! Tim kami siap memberikan tips perawatan, saran aquarium, nutrisi ikan, dan solusi untuk masalah kesehatan ikan Anda. Hubungi kami kapan saja untuk konsultasi gratis."
            },
            {
              id: "6",              title: "Jam operasional toko?",              content: "Toko kami buka Senin - Minggu pukul 09:00 - 18:00. Hubungi kami lebih dulu untuk memastikan ketersediaan barang atau jadwal kunjungan khusus. Kami juga melayani pemesanan online kapan saja."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Hubungi Kami"
          title="Siap Melayani Anda"
          description="Hubungi Tansil Goldfish sekarang juga untuk mendapatkan ikan mas koki berkualitas terbaik atau konsultasi perawatan ikan Anda."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Masukkan email Anda"
          buttonText="Daftar Sekarang"
          termsText="Kami akan mengirimkan tips perawatan ikan dan penawaran khusus ke email Anda. Privasi Anda terjamin."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Tansil Goldfish"
          copyrightText="© 2025 Tansil Goldfish Karawang | All Rights Reserved"
          columns={[
            {
              title: "Layanan",              items: [
                { label: "Tentang Kami", href: "#about" },
                { label: "Produk Ikan", href: "#products" },
                { label: "Kenapa Kami", href: "#features" },
                { label: "Testimoni", href: "#testimonials" }
              ]
            },
            {
              title: "Kontak",              items: [
                { label: "Hubungi: 0812-3122-3553", href: "tel:+6281231223553" },
                { label: "Chat WhatsApp", href: "https://wa.me/6281231223553" },
                { label: "Buka Google Maps", href: "https://maps.google.com/?q=Perumahan+Villa+Permata+Hijau+Blok+A5+No.10+Pasirjengkol+Majalaya+Karawang" }
              ]
            },
            {
              title: "Alamat",              items: [
                { label: "Villa Permata Hijau Blok A5 No.10", href: "#" },
                { label: "Pasirjengkol, Majalaya, Karawang", href: "#" },
                { label: "Jawa Barat 41371", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}