import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function MenuButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <img src="src\assets\menu.svg" className=' w-6 h-5' />
            </Dialog.Trigger>

            <Dialog.Overlay className=' fixed inset-0' />

            <Dialog.Content className=' fixed overflow-hidden inset-0 w-screen h-screen flex flex-col outline-none'>
                <div className=" w-screen h-screen items-center  bg-slate-950 text-gray-50 ">
                    <header className='flex gap-4 item-center pt-14 px-7 pb-6'>
                        <Dialog.Close>
                            <X className='size-5' />
                        </Dialog.Close>
                        <span className='font-roboto text-xl'>Menu</span>
                    </header>
                    <form action="post" className='flex w-80 h-6 py-3 px-4 justify-center items-center gap-4 bg-slate-900/80'>
                        <label htmlFor="text">
                            <img src="src\assets\search.svg"/>
                        </label>
                        <input type="text" placeholder='Busque por pratos ou ingredientes' className=' bg-transparent text-base font-roboto w-full'/>
                    </form>
                </div>
            </Dialog.Content>
        </Dialog.Root >
    )
}