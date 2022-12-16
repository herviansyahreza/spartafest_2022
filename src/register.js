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
        const response = await axios.post('https://backendspartafest-production.up.railway.app/register' , {
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
    <div className="bg-gradient-to-r from-emerald-900 to-emerald-100 h-screen overflow-hidden font-sans ">
      <div className="m-0 p-0  box-border font-sans bg-gradient-to-r from-emerald-900 to-emerald-100">
        <div className="login-form bg-transparent  w-[490px] h-[650px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold align-center flex justify-center text-[10px] text-white rotate-90 translate-y-[300px] translate-x-[-230px] opacity-[0.5]">
              -----------------------------------------------------------------------------------------------------
            </h1>
            <h1 className="font-bold w-[1000px] align-center flex justify-center text-[10px] text-white rotate-90 translate-x-[-250px] translate-y-[320px] opacity-[0.5]">
              ---------------------------------------------------------------------------------------------------------------------------------
            </h1>
            <h1 className="font-bold align-center flex justify-center text-[10px] text-white rotate-45 translate-x-[0px] translate-y-[150px] opacity-[0.5]">
              -----------------------------------------------------------------------------------------------------
            </h1>
            <h1 className="font-bold align-center flex justify-center text-[10px] text-white -rotate-45 translate-x-[0px] translate-y-[150px] opacity-[0.5]">
              -----------------------------------------------------------------------------------------------------
            </h1>
            <h1 className="font-bold align-center flex justify-center text-[10px] text-white translate-y-[-80px]">
              -----------------------------------------------------------------------------------------------------
            </h1>

            <h2 className="pr-[35px] pb-[20px] pl-[35px] font-bold align-center flex justify-center text-7xl text-white">
              Register
            </h2>
            <div className="content p-9 align-center">
              <div className="input-field py-[12px] px-[5px]">
                <input
                  className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl mb-[30px]"
                  type="text"
                  placeholder="Username"
                  autocomplete="username"
                  id="username"
                  name="username"
                  required
                />
              </div>
              <div className="input-field py-[12px] px-[5px]">
                <input
                  className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl mb-[30px]"
                  type="email"
                  placeholder="Email"
                  autocomplete="nope"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input-field py-[12px] px-[5px]">
                <input
                  className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl"
                  type="password"
                  placeholder="Password"
                  autocomplete="new-password"
                  id="password"
                  name="password"
                  required
                />
              </div>

              <button
                className="action w-44 border p-2 cursor-pointer uppercase  bg-green-800 hover:bg-green-100 hover:text-black text-white outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[120px] translate-y-[20px] text-[20px] "
                type="submit"
              >
                Daftar
              </button>

              <button
                className="action w-[65px] border cursor-pointer bg-transparent hover:bg-white hover:text-zinc-400 text-white outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[-300px] scale-[1] translate-y-[-190px] text-[40px] rotate-90"
                onClick={() => {
                  Navigate("/");
                }}
              >
                V
              </button>
            </div>
            <div>{/* onClick={() => { navigate('/') }} */}</div>
          </form>
        </div>
      </div>
    </div>
)
}

export default Register;
