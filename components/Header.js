import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
	const { user } = useMoralis()

	return (
		<div className='sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700'>
			<div className='grid grid-cols-5 lg:grid-cols-6 item-end lg:items-center'>
				<div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
					<Image
						layout='fill'
						objectFit='cover'
						className='rounded-full '
						src='https://i.pinimg.com/736x/60/37/db/6037db0fdf72070a26c93689d8f5c246.jpg'
					/>
				</div>

				<div className='col-span-4 text-left lg:text-center'>
					<div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
						<Avatar logoutOnPress />
					</div>
					<h1 className='text-3xl '>Welcome to the Metaverse</h1>
					<h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

					<ChangeUsername />
				</div>
			</div>
		</div>
	)
}

export default Header
