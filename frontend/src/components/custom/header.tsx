"use client";
import { 
	Heart, ShoppingCart, 
	Mail, LogIn, MapPin,  
	List, Search
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Italiana } from 'next/font/google';

const italiana = Italiana({ subsets: ["latin"], style: "normal", weight: ["400"] });


export default function Header() {
  	return (
      	<header 
			className="
				w-[100%] fixed top-0 left-0 z-10
				bg-neutral-950 bg-opacity-75
				flex flex-wrap px-[8vw] py-[3vh]
				select-none text-white justify-between
			"
		>
			<div className='flex w-[100%] items-center justify-between'>
				<nav className='flex items-center w-[36%] justify-between'>
					<Link href="/geo" className='flex items-center'><MapPin className="mr-[8px]" />Якутск</Link>	
					<Link href="/shops">Магазины</Link>	
					<Link href="/payment">Доставка и оплата</Link>	
				</nav>
				<h2 className={`${italiana.className} text-5xl`}>Lorem</h2>
				<nav className='flex items-center w-[36%] justify-between'>
					<Link href="/contacts">Контакты</Link>	
					<Link href="/order">На заказ</Link>
					<div className="flex items-center">
						<Link href="/favorite" ><Heart /></Link>
						<Link href="/cart" className="ml-[20px]"><ShoppingCart /></Link>
						<Link href="/messages" className="ml-[20px]"><Mail /></Link>
						<Link href="/login" className="ml-[20px]"><LogIn /></Link>
					</div>	
				</nav>
			</div>
			<div className='flex w-[100%] items-center justify-between mt-[24px]'>
				<nav className='flex items-center w-[33%]'>
					<Button variant="outline"><List className="mr-[8px]" /> Каталог</Button>	
					<Button variant="outline" className='ml-[48px]'>Коллекции</Button>	
				</nav>
				<div className='w-[33%] relative flex items-center'>
					<Input placeholder='Поиск' className='w-[100%] pl-[44px]' />
					<Search className='absolute left-[12px] w-[20px]' />
				</div>
				<nav className='flex items-center w-[33%] justify-end'>
					<Button variant="outline">Премиум</Button>	
					<Button variant="outline" className='ml-[36px]'>Акции</Button>	
					<Button variant="outline" className='ml-[36px]'>Бонусы</Button>	
				</nav>
			</div>
			
      	</header>
  	);
}
