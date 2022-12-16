import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });

        try{
            const response = await axios.post('https://backendspartafest-production.up.railway.app/login', {
              email: data.get('email'),
              password: data.get('password')
            })
            console.log(response)
    
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('name', response.data.username)
            localStorage.setItem('email', response.data.email)
    
            Navigate('../beranda')
          } catch (error){
            alert('Login Gagal !!')
          }
        };

    return (
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-100 h-screen overflow-hidden font-sans ">
      <div className="m-0 p-0  box-border font-sans bg-gradient-to-r from-emerald-900 to-emerald-100">
        <div className="login-form bg-transparent  w-[490px] h-[650px] my-16 mx-auto flex flex-col rounded-xl border-emerald-900 shadow-xl">
          <form onSubmit={handleSubmit}>
            <h1 className="pt-[35px] pr-[35px] pb-0 pl-[35px] m-1 font-bold align-center flex justify-center text-[10px] text-white rotate-90 translate-y-[300px] translate-x-[-230px] opacity-[0.5]">
              -----------------------------------------------------------------------------------------------------
            </h1>
            <h1 className=" m-0 font-bold w-[1000px] align-center flex justify-center text-[10px] text-white rotate-90 translate-x-[-250px] translate-y-[320px] opacity-[0.5]">
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
            <h2 className="pt-[0px] pr-[35px] pb-0 pl-[35px] m-4 font-bold align-center flex justify-center text-7xl text-white translate-y-[-60px]">
              Login
            </h2>
            <div className="content p-9 align-center">
              <div className="input-field py-[12px] px-[5px] ">
                <input
                  className="text-base block w-full h-[60px] py-[10px] px-[20px] border-4 border-b-2 outline-none rounded-3xl mb-[30px]"
                  type="email"
                  placeholder="Email"
                  autocomplete="nope"
                  id="email"
                  name="email"
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
                />
              </div>
              <button
                className="action w-44 border p-2 cursor-pointer uppercase  bg-green-800 hover:bg-green-100 text-white hover:text-black outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[120px] translate-y-[50px] text-[20px] "
                type="submit"
              >
                Masuk
              </button>

              <button
                className="action w-[65px] border cursor-pointer bg-transparent hover:bg-white hover:text-zinc-400 text-white outline-none border-b-[4px] border-l-[4px] border-r-[0px] rounded-[20px] translate-x-[310px] scale-[1] translate-y-[-130px] -rotate-90 text-[40px]"
                onClick={() => {
                  Navigate("/register");
                }}
              >
                V
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Login;
