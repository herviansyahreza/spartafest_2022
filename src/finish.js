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
            kontak: data.get('kontak'),
            email_ketua: localStorage.getItem('email_ketua'),
            email_satu: localStorage.getItem('email_satu'),
            email_dua: localStorage.getItem('email_dua'),
        });
        //bisa
        try {
            const response = await axios.post(`https://backendspartafest-production.up.railway.app/lombakelompok`, {
                bidang_lomba: data.get('lomba'),
                nama_tim: data.get('nama_tim'),
                kontak: data.get('kontak'),
                email_ketua: localStorage.getItem('email_ketua'),
                email_satu: localStorage.getItem('email_satu'),
                email_dua: localStorage.getItem('email_dua'),
            });
            Navigate('/berhasil')
        } catch (error) {
            alert('Register Gagal');
        }
    };
    return (
        <div className="kelompok bg-gradient-to-r from-emerald-900 to-emerald-100 h-screen overflow-hidden font-sans ">
        <div className="form bg-transparent  w-[490px] h-[620px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl" action="">
            <h1 className="mt-4 pr-[35px] pl-[35px] font-bold align-center flex justify-center text-7xl text-white">Registrasi</h1>
            <section class="content mt-[30px] m-[50px] p-[40px]">
                <form onSubmit={handleSubmit}>
                <div class="ketua" >
                            <label className="text-left text-white text-[15px]" for=""><b>Bidang Perlombaan</b></label>
                            <select className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l  rounded-[20px]" name="lomba" id="lomba" required>
                                <option className="text-black" value="">Pilih Perlombaan</option>
                                <option className="text-black" value="2">Basket</option>
                                <option className="text-black" value="4">Sepakbola</option>
                                <option className="text-black" value="6">Volly</option>
                                <option className="text-black" value="7">Debat</option>
                                <option className="text-black" value="8">Robotic</option>
                                <option className="text-black" value="10">Dance</option>
                                <option className="text-black" value="11">Band</option>
                            </select><br />

                            <label className="text-left text-white text-[15px]" for=""><b>Nama Team</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" placeholder="" name="nama_tim" id="nama_tim" required /><br />
                            <label className="text-left text-white text-[15px]" for=""><b>Kontak</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[30px] bg-transparent border-b-[2px] text-white text-l rounded-[20px]" type="text" placeholder="" name="kontak" id="kontak" required /><br />
                            <button
                className="action w-44 border p-2 cursor-pointer  bg-green-800 hover:bg-green-100 text-white hover:text-black outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[70px] translate-y-[25px] text-[20px] "
                type="submit">
                Kirim
              </button>     </div>
                    </form>         
                </section>

            </div>
        </div>

    )
}

export default Finish;
