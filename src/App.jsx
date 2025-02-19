import { useState } from 'react'
import './App.css'

function App() {
  const [pshow, setPshow] = useState(false);
  const [pcheck, setPcheck] = useState('');
  const [password, setPassword] = useState('');
  const [inqurie, setInqurie] = useState(false);

  const passwordShow = (e) => {
    const passValue = e.target.value
    setPassword(passValue);

    if (passValue.length === 0) {
      setPcheck('');
    }

    else if (passValue.length < 4) {
      setPcheck('week');
    }

    else if (passValue.length < 8) {
      setPcheck('medium');
    }

    else {
      setPcheck('strong');
    }
  }

  const getBorderColor = () => {
    if (pcheck === 'week') return 'border-red-500';
    if (pcheck === 'medium') return 'border-yellow-500';
    if (pcheck === 'strong') return 'border-green-500';
    return 'border-gray-500';
  }

  const getTextColor = () => {
    if (pcheck === 'week') return 'text-red-500';
    if (pcheck === 'medium') return 'text-yellow-500';
    if (pcheck === 'strong') return 'text-green-500';
    return 'text-white';
  }


  return (
    <>
      <div className={` ${inqurie ?'block':'hidden'} bg-[rgba(0,0,0,0.8)] fixed w-screen h-screen z-20`}></div>
      <div className={`bg-white w-[320px] h-[320px] fixed left-[40%] transition duration-[3000] ease-in delay-100 ${inqurie ? 'top-[20%]' : 'top-[-500px]'} transform-[translate(-50%, -50%)] z-40 rounded-lg `}>
        <h1 className='p-5 text-4xl'>check it</h1>
        <span className='text-5xl absolute top-0 right-2 cursor-pointer' onClick={() => setInqurie(false)}>&times;</span>
      </div>
      <div className="containe w-[100vw] h-[100vh] m-auto bg-gray-900 text-white flex items-center flex-col justify-center ">

        <h1 className='text-3xl my-3'>Password Hide Show</h1>

        <div className={`input-box relative flex w-[350px] p-2 rounded-[5px] bg-white text-black border-2 ${getBorderColor()} `}>
          <input type={pshow ? 'text' : 'password'} className='w-full border-0 outline-none text-xl font-medium' placeholder='Enter Password' value={password} onChange={passwordShow} />

          <div className="icon cursor-pointer text-black">
            <i className={pshow ? "ri-eye-off-fill text-2xl" : "ri-eye-fill text-2xl"} onClick={() => setPshow(!pshow)}></i>
          </div>
        {password.length > 0 &&(
          <p className={`absolute bottom-[-30px] left-0 font-medium ${getTextColor()}`}>Password is {pcheck} </p>
        )}
        </div>
        <button type='submit' className='flex bg-white text-black my-5 px-5 py-2.5 rounded-md font-bold cursor-pointer hover:bg-transparent border border-white hover:text-white' onClick={()=> setInqurie(true)}>Inquire</button>
      </div>
    </>
  );
}

export default App
