"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Fish } from 'lucide-react';

export default function ProductsPage() {
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
            { name: "Home", id: "/" },
            { name: "Tentang", id: "about" },
            { name: "Produk Ikan", id: "/products" },
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
              id: "1",              brand: "Tansil Goldfish",              name: "Ranchu Goldfish 🔥 Stok Terbatas",              price: "Rp 150.000 - Rp 500.000",              rating: 5,
              reviewCount: "98",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Akw5RTuUjo87CpGTp4MvMvfGkM/uploaded-1773224371789-pishykgz.jpg",              imageAlt: "Ikan ranchu berkualitas tinggi"
            },
            {
              id: "2",              brand: "Tansil Goldfish",              name: "Oranda Goldfish 🔥 Stok Terbatas",              price: "Rp 120.000 - Rp 400.000",              rating: 5,
              reviewCount: "87",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Akw5RTuUjo87CpGTp4MvMvfGkM/uploaded-1773224540396-dbefkpef.jpg",              imageAlt: "Ikan oranda cantik dan sehat"
            },
            {
              id: "3",              brand: "Tansil Goldfish",              name: "Lionhead Goldfish 🔥 Stok Terbatas",              price: "Rp 180.000 - Rp 550.000",              rating: 5,
              reviewCount: "92",              imageSrc: "http://img.b2bpic.net/free-photo/siam-betta-fish_1150-7811.jpg?_wi=2",              imageAlt: "Ikan lionhead premium"
            },
            {
              id: "4",              brand: "Tansil Goldfish",              name: "Ryukin Goldfish",              price: "Rp 100.000 - Rp 350.000",              rating: 5,
              reviewCount: "76",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-goldfish_1137-261.jpg?_wi=2",              imageAlt: "Ikan ryukin berkualitas"
            },
            {
              id: "5",              brand: "Tansil Goldfish",              name: "Baby Goldfish ⚡ Sangat Cepat Habis",              price: "Rp 25.000 - Rp 75.000",              rating: 5,
              reviewCount: "114",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-betta-fish-with-copy-space_23-2148359882.jpg?_wi=2",              imageAlt: "Ikan mas koki muda sehat"
            }
          ]}
          buttons={[
            { text: "Tanya Ketersediaan", href: "https://wa.me/6281231223553" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Tansil Goldfish"
          copyrightText="© 2025 Tansil Goldfish Karawang | All Rights Reserved"
          columns={[
            {
              title: "Layanan",              items: [
                { label: "Tentang Kami", href: "/#about" },
                { label: "Produk Ikan", href: "/products" },
                { label: "Kenapa Kami", href: "/#features" },
                { label: "Testimoni", href: "/#testimonials" }
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