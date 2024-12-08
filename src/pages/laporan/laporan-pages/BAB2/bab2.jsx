import LogoBSS from "../../../../assets/icons/LogoBSS.jpeg";

export default function Bab2() {
  return (
    <>
      <div className="px-5">
        <h1 className="font-bold text-center text-2xl font-[arial]">BAB II</h1>
        <p className="text-center font-medium text-gray-600 text-base">
          Tinjauan Umum Perusahaan
        </p>

        {/* Sejarah perusahaan */}
        <div className="mt-10">
          <h1 className="font-semibold text-xl font-[arial]">
            Sejarah PT. Bimasakti Sanjaya
          </h1>
          <p className="text-xs font-light mt-1 text-gray-600">
            Didirikan pada tahun 2009, Bacameter Bimasakti diharapkan dapat
            menjadi sebuah aplikasi baca meter digital berbasis ponsel dan
            desktop yang akurat, efektif dan valid (menyertakan foto meter dan
            pengenalan identitas pelanggan melalui barcode). Dalam naungan PT.
            Saka Transmarga Konsultan perusahaan ini bergerak dari pintu ke
            pintu mencoba memenuhi kebutuhan aplikasi baca meter baik di PLN
            maupun PDAM. Sebelum seperti sekarang, Bimasakti mengusung konsep
            bisnis jual putus. Setelah tahun 2011 Bimasakti mengambil langkah
            berani dengan berinvestasi pada perangkat keras untuk mengakomodasi
            kebutuhan klien yang tidak mampu melakukannya. Istilahnya Hardware
            dan Software yang disewakan. Dan lebih berani lagi ketika menetapkan
            harga bisnis sendiri tanpa meniru dari yang lain. Bimasakti yang
            berpusat di Denpasar Bali diterima di seluruh Indonesia. Walaupun
            pada akhirnya memutuskan untuk konsentrasi pada segmen perusahaan
            air minum saja. Dari Kota Pontianak-Kalimantan Barat, Surakarta-Jawa
            Tengah bahkan sampai ke Sumatera Barat.
          </p>
        </div>

        {/* Visi dan Misi perusahaan */}
        <div className="mt-10">
          <h1 className="font-semibold text-xl font-[arial]">Visi Dan Misi</h1>
          <h4 className="text-base text-gray-700 ml-2 mt-1 font-medium">
            Visi
          </h4>
          <p className="text-xs font-light mt-1 text-gray-600 ml-2">
            Membangun sebuah ekosistem yang dapat memberdayakan masyarakat Bali
            sehingga dapat memberikan kontribusi di bidang ekonomi di Bali.
          </p>

          <h4 className="text-base text-gray-700 ml-2 mt-1 font-medium">
            Misi
          </h4>
          <p className="text-xs font-light mt-1 text-gray-600 ml-2">
            Terus berinovasi di bidang teknologi, yang bertujuan untuk
            digitalisasi tanpa Meninggalkan kearifan lokal budaya Bali.
          </p>
        </div>

        {/* Arti Logo */}
        <div className="mt-10">
          <h1 className="font-semibold text-xl font-[arial]">
            Arti Logo PT. Bimasakti Sanjaya
          </h1>
          <div className="w-[240px] h-[100px] border rounded-xl mt-2 p-5">
            <img
              className="w-full h-full bg-cover object-cover bg-center"
              src={LogoBSS}
              alt="Logo PT. Bimasakti Sanjaya"
            />
          </div>
          <p className="text-xs font-light mt-1 text-gray-600">
            Logo ini mencerminkan harmoni antara kekuatan tradisi dan pandangan
            masa depan yang luas. Logo ini menampilkan nama BIMASAKTI bersama
            gambar yang menggambarkan sosok Wayang, kemungkinan terinspirasi
            dari mitologi atau cerita rakyat Indonesia. Penggunaan nama dan
            simbol tradisional mencerminkan misi untuk menggabungkan nilai-nilai
            tradisional dengan inovasi modern.
          </p>
        </div>
      </div>
    </>
  );
}
