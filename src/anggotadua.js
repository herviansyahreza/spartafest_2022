import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AnggotaDua = () => {
    const Navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            nim_dua: data.get('nim_dua'),
            ketua_dua: data.get('nama_dua'),
            email_dua: data.get('email_dua'),
        });

        try {
            const response = await axios.post(`https://backendspartafest-production.up.railway.app/insertanggotadua`, {
                nim_dua: data.get('nim_dua'),
                ketua_dua: data.get('nama_dua'),
                email_dua: data.get('email_dua'),
            });
            localStorage.setItem('email_dua', data.get('email_dua'))
            Navigate('/finish')
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
                        <label className="text-left text-bold text-xl" for=""><b>Nama Anggota 2</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Anggota 2" name="nama_dua" id="nama_dua" /><br />
                        <label className="text-left text-bold text-xl" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="NIM" name="nim_dua" id="nim_dua" /><br />
                        <label className="text-left text-bold text-xl" for=""><b>Email</b></label><br />
                        <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="email" placeholder="Email Anggota 2" name="email_dua" id="email_dua" /><br />
                            <button class="button-33 bg-green-400 rounded-[100px] cursor-pointer py-[7px] px-[20px] inline-block text-center decoration-none touch-manipulation w-[130px] h-[50px] hover:bg-green-500 mt-[30px] " type="submit">Kirimkan</button>  
                        </div>
                    </form>         
                </section>

            </div>
        </div>

    )
}

export default AnggotaDua;
