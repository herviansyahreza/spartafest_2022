import React from "react";
import { useNavigate } from "react-router-dom";


const Berhasil = () => {
    const Navigate = useNavigate();
    return (
        <body className="bg-[url('bg.png')]  h-screen m-[0px] p-[50px] flex w-full justify-center align-center">
            <div className="tulisan">
                <h1 className="m-[20px] text-center font-sans  text-bolder text-7xl text-white translate-y-[170px]">Selamat</h1>
                <p className="m-[20px] text-center font-sans text-bolder text-4xl text-white translate-y-[170px]">Anda Sudah terdaftar</p>

                <button
                className="action w-50 border p-4 cursor-pointer  bg-green-800 hover:bg-green-100 text-white hover:text-black outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[90px] translate-y-[190px] text-[20px] "
                onClick={() => {
                    Navigate("/beranda");
                  }}
              >
                Kembali ke Beranda
              </button>     </div>
        </body>

    )
}
export default Berhasil;