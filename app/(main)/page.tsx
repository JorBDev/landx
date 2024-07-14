'use client'

import { ArrowDown } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export default function Chat() {

	useEffect(() => {
		AOS.init({
			duration: 1000, // duración de la animación en milisegundos
		});
	}, []);

	return (
		<main className="flex w-full flex-col items-center justify-center">
			<div className='text-center mx-auto mt-36 pb-10'>
				<h2 className='text-2xl font-semibold'>Welcome to</h2>
				<h1 className='text-7xl'>LANDX</h1>
				<br></br>
				<div className='flex mx-auto text-center w-max'>
					<h3 className='text-2xl font-bold my-auto'>Ever wanted to create a</h3>
					<h3 className='text-3xl font-bold px-1.5 my-auto'>PRO</h3>
					<h3 className='text-2xl font-bold my-auto'>land page..</h3>
				</div>
				<h2 className='mb-28 bg-black/10 dark:bg-black/20 w-max mx-auto rounded-md px-4 mt-2 gradient-border'>
					<div className='gradient-text opacity-10' />
					<span className='text-white font-bold'>but never knew how or where to start?</span>
				</h2>
				<div className='flex w-full justify-center mb-28'>
					<Link href='/create' className='text-lg font-normal p-5 text-white py-2 px-4 rounded-lg bg-cyan-500'>
						Get started!
					</Link>
				</div>
				<div className="bounce flex justify-center">
					<ArrowDown />
				</div>
				<h2 className='mx-auto text-center w-max text-xl mt-3'>We provide you with the unique AI Tool for you to create amazing Landing page concepts!</h2>
				<img src='/example.png' className='rounded-xl mx-auto mt-5 w-[100%]' data-aos="fade-up"></img>
			</div>
			<BackgroundBeams className='z-[-2]'></BackgroundBeams>
		</main>
	)

}

