import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Perorangan = () => {
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            bidang_lomba: data.get('lomba'),
            nama: data.get('nama'),
            nim: data.get('nim'),
            email: data.get('email'),
            asal_universitas: data.get('asal_universitas'),
            kontak: data.get('kontak'),
            alamat: data.get('alamat'),
        });

        try {
            const response = await axios.post('https://backendspartafest-production.up.railway.app/lombaindividu', {
                bidang_lomba: data.get('lomba'),
                nama: data.get('nama'),
                nim: data.get('nim'),
                email: data.get('email'),
                asal_universitas: data.get('asal_universitas'),
                kontak: data.get('kontak'),
                alamat: data.get('alamat'),
            })

            Navigate('../berhasil')
        } catch (error) {
            alert('Register Gagal');
        }
    };
    return (
        <div className="kelompok h-full bg-gradient-to-r from-emerald-900 to-emerald-100  overflow-hidden font-sans ">
        <div className="form bg-transparent  w-[530px] h-[1080px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl" action="">
            <h1 className="mt-4 pr-[35px] pl-[35px] font-bold align-center flex justify-center text-7xl text-white">Registrasi</h1>
            <section class="content mt-[30px] m-[50px] p-[40px]">
                <form onSubmit={handleSubmit}>
                    <div class="ketua" >
                        <label className="text-left text-white text-[15px]" for=""><b>Bidang Perlombaan</b></label>
                        <select className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l  rounded-[20px]" name="lomba" id="lomba" required>
                            <option className="text-black" value="">Pilih Perlombaan</option>
                            <option className="text-black" value="1">Badminton</option>
                            <option className="text-black" value="3">Renang</option>
                            <option className="text-black" value="5">Atletik</option>
                            <option className="text-black" value="9">Olimpiade Matematika</option>
                            <option className="text-black" value="12">Painting</option>
                        </select><br />

                        <label className="text-left text-white text-[15px]" for=""><b>Nama Lengkap</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" placeholder="" name="nama" id="nama" required /><br />

                        <label className="text-left text-white text-[15px]" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" placeholder="" name="nim" id="nim" /><br />

                        <label className="text-left text-white text-[15px]" for=""><b>Email</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="email" placeholder="" name="email" id="email" /><br />

                        <label className="text-left text-white text-[15px]" for=""><b>Asal Universitas</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" placeholder="" name="asal_universitas" id="asal_universitas" required /><br />

                        <label className="text-left text-white text-[15px]" for=""><b>Kontak</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" placeholder="" name="kontak" id="kontak" required /><br />

                        <label className="text-left text-white text-[15px]" for=""><b>Alamat</b></label><br />
                        <textarea className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" name="alamat" placeholder="" id="alamat" cols="20" rows="3" required></textarea><br />
                        <button
            className="action w-44 border p-2 cursor-pointer  bg-green-800 hover:bg-green-100 text-white hover:text-black outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[90px] translate-y-[20px] text-[20px] "
            type="submit"
          >
            Kirim
          </button>
                        
                        {/* <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Kartu Mahasiswa / Kartu Pelajar</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="file" name="ktm" id="ktm" onChange={uploaded} required /><br /> */}
                        
                    </div>
                        
                </form>
            </section>
        </div>
    </div>
    )
}
export default Perorangan;
