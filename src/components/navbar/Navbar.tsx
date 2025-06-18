function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 
            			   bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">
                    <div className="text-3xl font-bold">
                        Blog Pessoal
                    </div>

                    <div className="flex gap-4">
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
