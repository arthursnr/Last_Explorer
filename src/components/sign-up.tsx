import * as Dialog from '@radix-ui/react-dialog'

export function SignUp() {
    return (
        <Dialog.Root>
            <Dialog.Trigger className=''><p>Crie uma conta</p></Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className=' fixed inset-0' />
                <Dialog.Content className=' fixed overflow-hidden inset-0 w-screen h-screen flex flex-col outline-none'>
                    <div className="flex flex-col w-screen h-screen items-center py-40 bg-slate-950 text-gray-50 gap-y-20">
                        <div className="inline-flex gap-3">
                            <img src="src\assets\logo.png" alt="" className=" size-11" />
                            <h1 className="font-roboto text-4xl font-bold">
                                food explorer
                            </h1>
                        </div>
                        <div className="">
                            <form action="post" className="flex flex-col gap-8">
                                <div className='font-roboto'>
                                    <label htmlFor="text">Seu nome</label>
                                    <input type="text" placeholder='Exemplo: Maria da Silva' className=" h-12 w-80 flex rounded-lg px-4 py-3 bg-slate-800"/>
                                </div>

                                <div className='font-roboto'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required placeholder='Exemplo: exemplo@exemplo.com.br' className=" h-12 w-80 flex rounded-lg px-4 py-3 bg-slate-800"/>
                                </div>

                                <div className='font-roboto'>
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" placeholder='No mínimo 6 caracteres' className=" h-12 w-80 flex rounded-lg px-4 py-3 bg-slate-800"/>
                                </div>

                                <button className=" bg-red-900 h-12 px-8 py-3 rounded-md">
                                    Criar conta
                                </button>

                                <Dialog.Close>
                                    Já tenho uma conta
                                </Dialog.Close>

                            </form>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}