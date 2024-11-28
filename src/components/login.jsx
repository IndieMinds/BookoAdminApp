import { useState } from 'react';
import logo from '../assets/images/logo3.png';
import { BkoBtn, BkoInput } from './custom';
import { useNavigate } from 'react-router-dom';
import useCommon from '../services/apis/common';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createClient } = useCommon();
  const api = createClient();

  const Submit = () => {
    // e.preventDefault();
    console.log('email', email);
    // console.log('password', password);
    api
      .post('/auth/login',{
        email,password
      })
      .then((res) => {
        console.log(res, 'res___');
        navigate('/home'); // Navigate only after successful login
      })
      .catch((err) => {
        console.error('Error:', err); // Log the error for debugging
      });
  };
  return (
    <>
      <div className="bg-[#f7f7f7] flex flex-1 flex-col justify-center px-6 py-12 lg:px-3 h-svh">
        <div className="sm:mx-auto px-16 mt-5 p-10 rounded shadow-lg shadow-slate-200 bg-white">
          <div className="sm:mx-auto sm:w-sm sm:max-w-sm">
            <img alt="Your Company" src={logo} className="mx-auto w-sm h-24" />
            <h2 className="mt-6 text-center text-2xl/9 font-normal tracking-tight text-gray-900 text-black">
              Simplify slots. Start with Booko!
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form onSubmit={Submit} className="space-y-5">
              <div>
                <BkoInput
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  label="Email address"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div>
                <BkoInput
                  id="password"
                  name="password"
                  value={password}
                  label="Password"
                  type="text"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center justify-end">
                  <div className="text-sm mt-2">
                    <a
                      href="/"
                      className="font-semibold text-gray-600 hover:text-gray-500 text-black"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
              <BkoBtn label="Sign in" type="Submit" />
            </form>

            <p className="mt-5 text-center text-sm/6 text-black">
              Not a member?{' '}
              <a
                href="/"
                className="font-semibold text-gray-600 hover:text-gray-500 text-black "
              >
                Join hands with Booko!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
