import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Finish = () => {
    const Navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            bidang_lomba: data.get('lomba'),
            nama_tim: data.get('nama_tim'),
            kontak: data.get('kontak')
        });

        try {
            const response = await axios.post(`https://backendspartafest-production.up.railway.app/lombakelompok`, {
                bidang_lomba: data.get('lomba'),
                nama_tim: data.get('nama_tim'),
                kontak: data.get('kontak'),
                ketua: localStorage.getItem('email_ketua'),
                anggota_satu: localStorage.getItem('email_satu'),
                anggota_dua: localStorage.getItem('email_dua')
            });
            Navigate('/berhasil')
        } catch (error) {
            Navigate('/kelompok')
            alert('Register Gagal');
        }
    };
    return (
        <div className="kelompok p-0 m-0 outline-none box-border h-full w-full mb-[30px] flex justify-center align-center bg-emerald-900">
            <div className="form m-[40px] w-2/3 p-[20px] border-2 rounded-3xl bg-cyan-400" action="">
                <h1 className="text-center pl-[20px] text-4xl font-bold mb-[10px] mt-[30px]">Pendaftaran Sparta Fest 2022</h1>
                <section class="content mt-[50px] m-[50px] p-[40px]">
                    <form onSubmit={handleSubmit}>
                        <div class="ketua">
                        <label className="text-left text-bold text-xl mb-[10px]" for=""><b>Bidang Perlombaan</b></label>
                            <select className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " name="lomba" id="lomba" required>
                                <option value="">Pilih Perlombaan</option>
                                <option value="2">Basket</option>
                                <option value="4">Sepakbola</option>
                                <option value="6">Volly</option>
                                <option value="7">Debat</option>
                                <option value="8">Robotic</option>
                                <option value="10">Dance</option>
                                <option value="11">Band</option>
                            </select><br />

                            <label className="text-left text-bold text-xl translate-y-[20px]" for=""><b>Nama Team</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Tim" name="nama_team" id="nama_team" required /><br />
                            <label className="text-left text-bold text-xl" for=""><b>Kontak</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="No.Telpon" name="kontak" id="kontak" required /><br />
                            <button class="button-33 bg-green-400 rounded-[100px] cursor-pointer py-[7px] px-[20px] inline-block text-center decoration-none touch-manipulation w-[130px] h-[50px] hover:bg-green-500 mt-[30px] " type="submit">Kirimkan</button>  
                        </div>
                    </form>         
                </section>

            </div>
        </div>

    )
}

export default Finish;
