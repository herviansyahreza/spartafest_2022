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
            nama_dua: data.get('nama_dua'),
            email_dua: data.get('email_dua'),
        });

        try {
            const response = await axios.post(`https://backendspartafest-production.up.railway.app/insertanggotadua`, {
                nim_dua: data.get('nim_dua'),
                nama_dua: data.get('nama_dua'),
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
        <div className="kelompok bg-gradient-to-r from-emerald-900 to-emerald-100 h-screen overflow-hidden font-sans ">
        <div className="form bg-transparent  w-[490px] h-[620px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl" action="">
            <h1 className="mt-4 pr-[35px] pl-[35px] font-bold align-center flex justify-center text-7xl text-white">Registrasi</h1>
            <section class="content mt-[30px] m-[50px] p-[40px]">
                <form onSubmit={handleSubmit}>
                    <div class="ketua">
                    <label className="text-left text-white text-[15px]" for=""><b>Nama Anggota 2</b></label><br />
                    <input className="w-full py-[15px] px-[10px] mb-[60px] bg-transparent border-b-[2px] text-white text-l  rounded-[20px]" type="text" placeholder="Nama Anggota 2" name="nama_dua" id="nama_dua" /><br />
                    <label className="text-left text-white text-[15px]" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                    <input className="w-full py-[15px] px-[10px] mb-[60px] bg-transparent border-b-[2px] text-white text-l  rounded-[20px]" type="text" placeholder="NIM" name="nim_dua" id="nim_dua" /><br />
                    <label className="text-left text-white text-[15px]" for=""><b>Email</b></label><br />
                    <input className="w-full py-[15px] px-[10px] mb-[0px] bg-transparent border-b-[2px] text-white text-l  rounded-[20px]" type="email" placeholder="Email Anggota 2" name="email_dua" id="email_dua" /><br />
                    <button class="w-[65px] border cursor-pointer bg-transparent hover:bg-white hover:text-zinc-400 text-white outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[450px] scale-[1] translate-y-[-220px] -rotate-90 text-[40px]" type="submit">V</button>  
                  </div>
                </form>         
            </section>

        </div>
    </div>

    )
}

export default AnggotaDua;
