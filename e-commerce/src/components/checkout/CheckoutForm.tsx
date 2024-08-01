import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import axios from 'axios';

const schema = z.object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    companyName: z.string().optional(),
    zipCode: z.string().min(1, { message: "ZIP code is required" }),
    country: z.string().min(1, { message: "Country / Region is required" }),
    streetAddress: z.string().min(1, { message: "Street address is required" }),
    city: z.string().min(1, { message: "Town / City is required" }),
    province: z.string().min(1, { message: "Province is required" }),
    addOnAddress: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
});

type FormData = z.infer<typeof schema>;

const CheckoutForm: React.FC = () => {
    const navigate = useNavigate()
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [loadingCep, setLoadingCep] = useState(false);

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, '');
        if (cep.length !== 8) return;

        setLoadingCep(true);

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;

            if (!data.erro) {
                setValue('streetAddress', data.logradouro);
                setValue('city', data.localidade);
                setValue('province', data.uf);
                setValue('addOnAddress', data.bairro);
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        } finally {
            setLoadingCep(false);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.product.normalPrice * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col lg:flex-row p-8 justify-center ">
                <div className="w-full lg:w-1/3 lg:pr-8">
                    <h2 className="text-3xl font-bold mb-4">Billing details</h2>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 ">
                        <div className="flex-1">
                            <label className="block text-gray-700 mb-6 mt-8 font-medium">First Name</label>
                            <input
                                {...register('firstName')}
                                type="text"
                                className="border rounded-lg p-2 h-16 w-full"
                            />
                            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 mb-6 mt-8 font-medium">Last Name</label>
                            <input
                                {...register('lastName')}
                                type="text"
                                className="border rounded-lg p-2 h-16 w-full"
                            />
                            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Company Name (Optional)</label>
                        <input
                            {...register('companyName')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">ZIP code</label>
                        <input
                            {...register('zipCode')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                            onBlur={handleCepBlur}
                        />
                        {loadingCep && <p className="text-blue-500">Loading...</p>}
                        {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Country / Region</label>
                        <input
                            {...register('country')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                        />
                        {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Street address</label>
                        <input
                            {...register('streetAddress')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                        />
                        {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Town / City</label>
                        <input
                            {...register('city')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                        />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Province</label>
                        <input
                            {...register('province')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                        />
                        {errors.province && <p className="text-red-500">{errors.province.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Add-on address</label>
                        <input
                            {...register('addOnAddress')}
                            type="text"
                            className="border rounded-lg p-2 h-16 w-full"
                        />
                    </div>
                    <div className=''>
                        <label className="block text-gray-700 mb-6 mt-8 font-medium">Email address</label>
                        <input
                            {...register('email')}
                            type="email"
                            className="border rounded-lg p-2 w-full h-16"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input type="text" className="border rounded-lg p-2 w-full h-16 mt-8" placeholder='Additional information' />
                    </div>

                </div>

                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                    <div className="p-4">
                        <div className='flex justify-between'>
                            <h2 className="text-2xl font-medium  mb-4">Product</h2>
                            <h2 className="text-2xl font-medium  mb-4">Subtotal</h2>
                        </div>
                        {cartItems.map((i) => (
                            <div className="flex justify-between mb-2">
                                <span className='text-[#9F9F9F]'>{i.product.title}</span>
                                <span>Rs. {i.product.normalPrice}</span>
                            </div>
                        ))}
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>Rs. {subtotal}</span>
                        </div>
                        <div className="flex justify-between font-bold mb-4">
                            <span>Total</span>
                            <span className='text-[#B88E2F] font-bold'>Rs. {subtotal}</span>
                        </div>

                        <div className='bg-[#D9D9D9] w-full h-[1px] my-10'></div>

                        <div className="mb-4">
                            <div>
                                <input type="radio" id="bank" name="payment" className="mr-2 peer" />
                                <label htmlFor="bank">Direct Bank Transfer</label>
                                <p className="text-sm mb-4 mt-2 peer-checked:text-[#9F9F9F]">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <div>
                                <input type="radio" id="cod" name="payment" className="mr-2 peer" />
                                <label htmlFor="cod" className=''>Cash On Delivery</label>
                            </div>
                            <p className="text-sm mb-4 mt-10 ">
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-black">privacy policy</a>.
                            </p>
                        </div>

                        <div className='flex justify-center mt-14'>
                            <button className="bg-white text-black p-4 w-1/2 rounded-xl border border-black" onClick={() => navigate('/')}>Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;
