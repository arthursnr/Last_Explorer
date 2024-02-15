import { SignUp } from "/components/sign-up";

export function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center py-40 bg-slate-950 text-gray-50 gap-y-20">
      <div className="inline-flex gap-3">
        <img src="src\assets\logo.png" alt="" className=" size-11" />
        <h1 className="font-roboto text-4xl font-bold">
          food explorer
        </h1>
      </div>
      <div className="">
        <form action="" method="post" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 font-roboto">
            <label htmlFor="" >
              Email
            </label>
            <input type="email" id="email" name="email" required placeholder="Exemplo: exemplo@exemplo.com.br" className=" h-12 w-80 flex rounded-lg px-4 py-3 bg-slate-800" />
          </div>

          <div className="flex flex-col gap-2 font-roboto">
            <label htmlFor="">
              senha
            </label>
            <input type="password" name="senha" id="senha" placeholder="No mínimo 6 caracteres" className=" h-12 w-80 flex rounded-lg px-4 py-3 bg-slate-800" />
          </div>

          <button className=" bg-red-900 h-12 px-8 py-3 rounded-md">
            Entrar
          </button>

          <SignUp />
        </form>
      </div>
    </div>
  )
}

