import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import timer from '../../img/img_contact/timer.png';
import fone from '../../img/img_contact/fone.png';
import point from '../../img/img_contact/point.png';

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().optional(),
    message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate('/')
    };

    return (
        <div className="flex flex-col items-center p-8 mt-[130px]">
            <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
            <p className="text-center text-[#9F9F9F] mb-8 w-1/3">
                For More Information About Our Product & Services, Please Feel Free To Drop Us
                An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>

            <div className="flex lg:flex-row justify-between w-full lg:w-2/3 mt-[130px]">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <div className="mb-8 w-1/2">
                        <h2 className="flex items-center text-lg font-semibold mb-2">
                            <img src={point} alt="Point" className='me-2'/>
                            Address
                        </h2>
                        <p className='ms-8'>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="flex items-center text-lg font-semibold mb-2">
                            <img src={fone} alt="Fone" className='me-2' />
                            Phone
                        </h2>
                        <p className='ms-8'>Mobile: (+84) 145 6789<br />Hotline: (+84) 145 6789</p>
                    </div>
                    <div>
                        <h2 className="flex items-center text-lg font-semibold mb-2">
                            <img src={timer} alt="Timer" className='me-2'/>
                            Working Time
                        </h2>
                        <p className='ms-8'>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-black font-medium mb-2">Your name</label>
                            <input
                                type="text"
                                {...register("name")}
                                className={`border rounded-lg p-2 w-full h-16 mb-6 mt-8 ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Abc"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="block text-black font-medium mb-2">Email address</label>
                            <input
                                type="email"
                                {...register("email")}
                                className={`border rounded-lg p-2 w-full h-16 mb-6 mt-8 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Abc@gmail.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-black font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                {...register("subject")}
                                className="border rounded-lg p-2 w-full h-16 mb-6 mt-8"
                                placeholder="This is an optional"
                            />
                        </div>
                        <div>
                            <label className="block text-black font-medium mb-2">Message</label>
                            <textarea
                                {...register("message")}
                                className={`border rounded-lg p-2 w-full h-16 mb-6 mt-8 ${errors.message ? 'border-red-500' : ''}`}
                                rows={4}
                                placeholder="Hi! I'd like to ask about ..."
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                        <div className="flex justify-start">
                            <button type="submit" className="bg-[#B88E2F] text-white p-4 rounded-lg w-56">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;




