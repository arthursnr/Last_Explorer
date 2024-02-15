import * as Dialog from '@radix-ui/react-dialog'
import { MenuButton } from './menuButton'
import { HomeButton } from './homeButton'
import { OrderButton } from './orderButton'

export function HomePage() {

    return (
        <Dialog.Root>
            <Dialog.Trigger className=" bg-red-900 h-12 px-8 py-3 rounded-md">
                Entrar
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className=' fixed inset-0' />
                <Dialog.Content className=' fixed overflow-hidden inset-0 w-screen h-screen flex flex-col outline-none'>
                    <div className="flex flex-col w-screen h-screen items-center  bg-slate-950 text-gray-50 ">
                        <header className=' pt-14 px-7 pb-6'>
                            <div className='flex w-auto gap-4 align-middle'>
                                <MenuButton />

                                <HomeButton />

                                <OrderButton />
                            </div>
                        </header>
                        <main>
                            <div className='flex relative gap-1 w-96 h-32 bg-gradient-to-t from-slate-900/50 to-teal-950/70 rounded-sm'>
                                <img src="src\assets\img1.png" className='elemento-posicionado absolute -top-5 -left-8' />
                                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-52 pt-9 pr-2 pb-5'>
                                    <span className='text-lg'>Sabores inigualáveis</span>
                                    <p className='text-xs text-gray-300'>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                                </div>
                            </div>

                            <div className=' overflow-x-hidden'>
                                <h2>Refeições</h2>
                                <div>
                                    Card
                                    <button>incluir</button>
                                </div>
                            </div>

                            <div className=' overflow-x-hidden'>
                                <h2>Pratos principais</h2>
                                <div>
                                    Card
                                    <button>incluir</button>
                                </div>
                            </div>

                            <div className=' overflow-x-hidden'>
                                <h2>Pratos principais</h2>
                                <div>
                                    Card
                                    <button>incluir</button>
                                </div>
                            </div>
                        </main>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}