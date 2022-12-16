import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Ketua = () => {
    const Navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            nim: data.get('nim'),
            ketua: data.get('ketua'),
            email: data.get('email'),
            asal_universitas: data.get('asal_universitas')
        });

        try {
            const response = await axios.post(`https://backendspartafest-production.up.railway.app/insertanggotasatu`, {
                nim: data.get('nim'),
                ketua: data.get('ketua'),
                email: data.get('email'),
                asal_universitas: data.get('asal_universitas'),
            });
            alert("anggota terupdate")
            Navigate('/anggotasatu')
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
                            <label className="text-left text-bold text-xl" for=""><b>Nama Ketua Team</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Ketua Tim" name="ketua" id="ketua" required /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="NIM / KTM" name="nim" id="nim" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Email Ketua Team</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="email" placeholder="Email ketua" name="email" id="email" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Asal Universitas</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Universitas" name="asal_universitas" id="asal_universitas" required /><br />   
                        </div>
                    </form>         
                </section>

            </div>
        </div>

    )
}

export default Ketua;
