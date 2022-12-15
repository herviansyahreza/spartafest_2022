import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = () => {
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          username: data.get('username'),
          pass: data.get('password'),
          email: data.get('email'),
        });

    try {
        const response = await axios.post('http://backendprojectakhir-production.up.railway.app/register' , {
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password')
        })

        Navigate('../login')
    } catch (error) {
        alert('Register Gagal');
    }
};

return (
    <div className="bg-emerald-900 h-screen overflow-hidden ">
        <div className="m-0 p-0  box-border font-sans">
            <div className="login-form bg-white w-[700px] h-[670px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl">
                <form onSubmit={handleSubmit}>
                    <h1 className="pt-[35px] pr-[35px] pb-0 pl-[35px] m-1 font-bold align-center flex justify-center text-5xl">SPARTA FEST</h1>
                    <h2 className="pt-[0px] pr-[35px] pb-0 pl-[35px] m-4 font-bold align-center flex justify-center text-5xl">Register</h2>
                    <div className="content p-9 align-center" >
                        <div className="input-field py-[12px] px-[5px]">
                            <input className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl mb-[30px]" type="text" placeholder="Username" autocomplete="username" id="username" name="username" required />
                        </div>
                        <div className="input-field py-[12px] px-[5px]">
                            <input className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl mb-[30px]" type="email" placeholder="Email" autocomplete="nope" id="email" name="email" required />
                        </div>
                        <div className="input-field py-[12px] px-[5px]">
                            <input className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl" type="password" placeholder="Password" autocomplete="new-password" id="password" name="password" required />
                        </div>
                        <button className="action w-48 border p-4 cursor-pointer uppercase bg-cyan-200 hover:bg-cyan-700 text-zinc-400 outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[250px] translate-y-[30px]" type="submit">Daftar</button>
                    </div>
                    <div >
                    {/* onClick={() => { navigate('/') }} */}
                        
                    </div>
                </form>
            </div>

        </div>
    </div>
)
}

export default Register;
