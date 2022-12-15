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
            alamat: data.get('alamat'),
            ktm: base64String,
        });

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/lombaindividu`, {
                bidang_lomba: data.get('lomba'),
                nama: data.get('nama'),
                nim: data.get('nim'),
                email: data.get('email'),
                asal_universitas: data.get('asal_universitas'),
                kontak: data.get('kontak'),
                alamat: data.get('alamat'),
                ktm: base64String,
            });

            Navigate('/berhasil')
        } catch (error) {
            alert('Register Gagal');
        }
    };
    let base64String = "";
    const uploaded = () => {
        let file = document.querySelector(
            'input[type=file]')['files'][0];
         let reader = new FileReader();
         reader.onload = function () {
            base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
            // imageBase64Stringsep = base64String;
         }
         reader.readAsDataURL(file);
    }
    return (
        <div className="kelompok p-0 m-0 outline-none box-border h-full w-full mb-[30px] flex justify-center align-center bg-emerald-900">
            <div className="form m-[40px] w-2/3 p-[20px] border-2 rounded-3xl bg-cyan-400" action="">
                <h1 className="text-center pl-[20px] text-4xl font-bold mb-[10px] mt-[30px]">Pendaftaran Sparta Fest 2022</h1>
                <section class="content mt-[50px] m-[50px] p-[40px]">
                    <div class="ketua" onSubmit={handleSubmit}>
                        <label className="text-left text-bold text-xl mb-[10px]" for=""><b>Bidang Perlombaan</b></label>
                        <select className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " name="lomba" id="lomba" required>
                            <option value="">Pilih Perlombaan</option>
                            <option value="1">Badminton</option>
                            <option value="3">Renang</option>
                            <option value="5">Atletik</option>
                            <option value="9">Olimpiade Matematika</option>
                            <option value="12">Painting</option>
                        </select><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Nama Lengkap</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Lengkap" name="nama" id="nama" required /><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="NIM / KTM" name="nim" id="nim" /><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Email</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="email" placeholder="Email" name="email" id="email" /><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Asal Universitas</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Sekolah" name="asal_universitas" id="asal_universitas" required /><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Kontak</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="No.Telpon" name="kontak" id="kontak" required /><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Alamat</b></label><br />
                        <textarea className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" name="alamat" placeholder="Alamat Lengkap" id="alamat" cols="20" rows="1" required></textarea><br />

                        <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Kartu Mahasiswa / Kartu Pelajar</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="file" name="ktm" id="ktm" onChange={uploaded} required /><br />
                    </div>
                    <button class="button-33 bg-green-400 rounded-[100px] cursor-pointer py-[7px] px-[20px] inline-block text-center decoration-none touch-manipulation w-[130px] h-[50px] hover:bg-green-500 mt-[30px] " type="submit">Kirimkan</button>

                </section>




            </div>
        </div>
    )
}
export default Perorangan;