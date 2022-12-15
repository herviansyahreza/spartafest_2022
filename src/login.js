import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-emerald-900 h-screen overflow-hidden ">
            <div className="m-0 p-0  box-border font-sans">
            <div className="login-form bg-white w-[700px] h-[600px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl">
                <form>
                    <h1 className="pt-[35px] pr-[35px] pb-0 pl-[35px] m-1 font-bold align-center flex justify-center text-5xl">SPARTA FEST</h1>
                    <h2 className="pt-[0px] pr-[35px] pb-0 pl-[35px] m-4 font-bold align-center flex justify-center text-5xl">Login</h2>
                    <div className="content p-9 align-center">
                        <div className="input-field py-[12px] px-[5px]">
                            <input className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl mb-[30px]" type="email" placeholder="Email" autocomplete="nope" />
                        </div>
                        <div className="input-field py-[12px] px-[5px]">
                            <input className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl" type="password" placeholder="Password" autocomplete="new-password" />
                        </div>
                    </div>
                    <div >
                        <button className="action w-48 border p-4 cursor-pointer uppercase bg-cyan-200 hover:bg-cyan-700 text-zinc-400 outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[100px] translate-y-[30px] " onClick={()=>{navigate('/beranda')}}>Masuk</button>
                        
                       
                        <button className="action w-48 border p-4 cursor-pointer uppercase bg-cyan-200 hover:bg-cyan-700 text-zinc-400 outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[220px] translate-y-[30px]" onClick={()=>{navigate('/daftar')}}>Daftar</button>
                       
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Login;
