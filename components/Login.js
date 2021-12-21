import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
	const { authenticate } = useMoralis()

	return (
		<div className='bg-black relative '>
			<h1>Login Screen</h1>
			<div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
				<Image
					className='object-cover rounded-full'
					src='https://i.pinimg.com/736x/60/37/db/6037db0fdf72070a26c93689d8f5c246.jpg'
					width={200}
					height={200}
				/>
				<button
					className='bg-fuchsia-600 rounded-lg p-5 font-bold animate-pulse'
					onClick={authenticate}
				>
					Login to the METAVERSE
				</button>
			</div>

			<div className='w-full h-screen'>
				<Image
					src='https://artlabs.ai/wp-content/uploads/2021/09/CROPPED-scaled.jpg'
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</div>
	)
}

export default Login
