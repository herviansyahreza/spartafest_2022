import React from "react";

const Berhasil = () => {
    const navigate = useNavigate();
    return (
        <body className="bg-[url('bg.svg')] h-[745px] m-[0px] p-[50px] flex justify-center align-center">
            <div className="tulisan">
                <h1 className="m-[20px] text-center font-sans text-5xl text-white">Selamat</h1>
                <p className="m-[20px] text-center font-sans text-3xl text-white">Anda Sudah terdaftar</p>

                <button className="translate-x-[63px] button-71 bg-[#087118c8] border rounded-[56px] text-white cursor-pointer inline-block text-[18px] font-semibold outline-[0] py-[16px] px-[21px] relative text-center no-underline touch-manipulation hover:bg-[#054a10c8]" role="button" onClick={() => { navigate('/beranda') }}>Kembali ke Beranda</button>
            </div>
        </body>

    )
}
export default Berhasil;