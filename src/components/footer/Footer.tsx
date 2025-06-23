

import { InstagramLogoIcon} from '@phosphor-icons/react'
import { LinkedinLogoIcon, PinterestLogoIcon } from '@phosphor-icons/react/dist/ssr'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="" target='_blank'>
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="" target='_blank'>
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="" target='_blank'>
                            <PinterestLogoIcon size={48} weight='bold' />
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

