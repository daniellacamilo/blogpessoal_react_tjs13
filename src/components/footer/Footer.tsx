import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

export function Footer() {
    
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                            <p className='text-x1 font-bold'>
                                Blog Pessoal - Desenvolvido por Daniella Camilo  | Copyright : {data}
                            </p>
                    <p className='text-lg'>Acesse aqui as minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/daniella-camilo-3b64b0393/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/@daniellacamilo/" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/daniella.camilo.3/" target="_blank">
                            <FacebookLogoIcon size={48} weight='bold' />
                        </a>
                    </div>                  
                </div>
            </div>
        </>
    )
}

export default Footer