import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Kelompok = () => {
    const Navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            bidang_lomba: data.get('lomba'),
            nama_team: data.get('nama_team'),
            nim: data.get('nim'),
            ketua: data.get('ketua'),
            email: data.get('email'),
            asal_universitas: data.get('asal_universitas'),
            kontak: data.get('kontak'),
            alamat: data.get('alamat'),
            nama_satu: data.get('nama_satu'),
            nim_satu: data.get('nim_satu'),
            email_satu: data.get('email_satu'),
            nama_dua: data.get('nama_dua'),
            nim_dua: data.get('nim_dua'),
            email_dua: data.get('email_dua'),
        });
        const insertanggotasatu = async () => {
            await axios.post(`https://backendspartafest-production.up.railway.app/insertanggotasatu`, {
                nama_satu: data.get('nama_satu'),
                nim_satu: data.get('nim_satu'),
                email_satu: data.get('email_satu'),
            });
        }
        const insertanggotadua =async () => {
            await axios.post(`https://backendspartafest-production.up.railway.app/insertanggotadua`, {
                nama_dua: data.get('nama_dua'),
                nim_dua: data.get('nim_dua'),
                email_dua: data.get('email_dua'),
            });
        }
        const lombakelompok = async () => {
            await axios.post(`https://backendspartafest-production.up.railway.app/lombakelompok`, {
                bidang_lomba: data.get('lomba'),
                nama_team: data.get('nama_team'),
                nim: data.get('nim'),
                ketua: data.get('ketua'),
                email: data.get('email'),
                asal_universitas: data.get('asal_universitas'),
                kontak: data.get('kontak'),
                alamat: data.get('alamat'),
                nama_satu: data.get('nama_satu'),
                nama_dua: data.get('nama_dua'),
            });
        }
        try {
            insertanggotasatu();
            insertanggotadua();
            lombakelompok();
            Navigate('/berhasil')
        } catch (error) {
            Navigate('/kelompok')
            alert('Register Gagal');
        }
    };
    // let base64String = "";
    // const uploaded = () => {
    //     let file = document.querySelector(
    //         'input[type=file]')['files'][0];
    //     let reader = new FileReader();
    //     reader.onload = function () {
    //         base64String = reader.result.replace("data:", "")
    //             .replace(/^.+,/, "");
    //         // imageBase64Stringsep = base64String;
    //     }
    //     reader.readAsDataURL(file);
    // }


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

                            <label className="text-left text-bold text-xl" for=""><b>Nama Ketua Team</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Ketua Tim" name="ketua" id="ketua" required /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="NIM / KTM" name="nim" id="nim" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Email Ketua Team</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="email" placeholder="Email ketua" name="email" id="email" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Asal Universitas</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Universitas" name="asal_universitas" id="asal_universitas" required /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Kontak</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="No.Telpon" name="kontak" id="kontak" required /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Alamat</b></label><br />
                            <textarea className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " name="alamat" placeholder="Alamat Lengkap" id="alamat" cols="20" rows="1" required></textarea><br />

                            <h4 className="mt-[50px] mb-[20px] font-light text-3xl "><b>Data Anggota</b></h4>
                            <p className="mt-[10px] mb-[60px] font-light  text-xl ">Jika Anggota berjumlah lebih dari 3 orang, cukup mengisi Form diatas</p>

                            <label className="text-left text-bold text-xl" for=""><b>Nama Anggota 1</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Anggota 1" name="nama_satu" id="nama_satu" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="NIM / KTM" name="nim_satu" id="nim_satu" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Email</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="email" placeholder="Email Anggota 1" name="email_satu" id="email_satu" /><br />

                            <label className="mt-[100px] text-left text-bold text-xl" for=""><b>Nama Anggota 2</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="text" placeholder="Nama Anggota 2" name="nama_dua" id="nama_dua" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Nomor Induk Mahasiswa</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="number" placeholder="NIM / KTM" name="nim_dua" id="nim_dua" /><br />

                            <label className="text-left text-bold text-xl" for=""><b>Email</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="email" placeholder="Email Anggota 2" name="email_dua" id="email_dua" /><br />


                            <button class="button-33 bg-green-400 rounded-[100px] cursor-pointer py-[7px] px-[20px] inline-block text-center decoration-none touch-manipulation w-[130px] h-[50px] hover:bg-green-500 mt-[30px] " type="submit">Kirimkan</button>
                        </div>
                    </form>
                    
                </section>


 {/* <label className="text-left text-bold text-xl" for=""><b>Kartu Mahasiswa / Kartu Pelajar</b></label><br />
                            <input className="w-full py-[15px] px-[10px] mb-[10px] bg-transparent border-b-[2px] text-black text-xl " type="file" name="ktm" id="ktm" required /><br /> */}

            </div>
        </div>

    )
}

export default Kelompok;
