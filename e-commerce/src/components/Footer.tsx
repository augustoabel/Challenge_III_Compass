import React from 'react'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type FormData = z.infer<typeof schema>;

const Footer: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    navigate('/')
  };

  return (
    <div className='container mx-auto bg-white w-screen z-20 h-[500px] '>
      <div className='grid grid-cols-12 mt-10 xl:ms-[100px]'>
        <div className='col-span-4 flex flex-col gap-12'>
          <span className='font-extrabold text-2xl'>Funiro.</span>
          <span className='text-[#9F9F9F] xl:w-[250px]' >
            400 University Drive Suite 200 Coral Gables,<br></br>
            FL 33134 USA
          </span>
          <div></div>
          <div className="flex flex-row xl:gap-4 sm:gap-1">
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/facebook.png" alt="Logo Facebook" /></div>
            </div>
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/instagram.png" alt="Logo Instagram" /></div>
            </div>
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/x.png" alt="Logo X" /></div>
            </div>
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/linkedin.png" alt="Logo Linkedin" /></div>
            </div>

          </div>
        </div>

        <div className='col-span-2 flex flex-col gap-12 text-black font-medium'>
          <span className='text-[#9F9F9F]'>Links</span>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className='col-span-2 flex flex-col gap-12'>
          <span className='text-[#9F9F9F]' >Help</span>
          <span>Payment Options</span>
          <span>Returns</span>
          <span>Privacy Policies</span>
        </div>

        <div className='col-span-4 flex flex-col gap-12'>
          <span className='text-[#9F9F9F]'>Newsletter</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
              <label className="block text-gray-700 mb-6 mt-8 font-medium">Email address</label>
              <input
                {...register('email')}
                type="email"
                className="border-none rounded-lg p-2 h-16 underline ms-0 ps-0"
                placeholder='Enter Your Email Address'
              />
            </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <button type='submit' className=' text-start align-text-top underline'>SUBSCRIBE</button>
          </form>
        </div>

        <div className='col-span-12 border border-[#D9D9D9] mt-12'></div>

        <div className='col-span-12 mt-9'>
          <span>2023 furino. All rights reverved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer