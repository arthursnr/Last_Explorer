import * as Dialog from '@radix-ui/react-dialog'

export function OrderButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <img src="src\assets\recipe.svg" className=' size-8'/>
            </Dialog.Trigger>

            <Dialog.Overlay className=' fixed inset-0' />

            <Dialog.Content className=' fixed overflow-hidden inset-0 w-screen h-screen flex flex-col outline-none'>

            </Dialog.Content>
        </Dialog.Root>
    )
}