export function ApresentationMenu() {
    return (
        <div className="w-full h-[420px] border-zinc-900 bg-home bg-cover bg-center">

        <div className="w-full h-full flex flex-col justify-center items-center">
            <img 
                src="/assets/silverware.png" 
                alt="logo do restaurante"
                className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
            />
            <h1 
                className="text-4xl mt-4 text-white font-bold">E-Restaurant
            </h1>

            <span className="text-white font-medium mt-5">Rua: Claudio Raio 10, São Tomé das Letras, MG</span>

            <div className="bg-green-600 px-4 py-1 rounded-lg mt-5" id="date-span">
                <span className="text-white font-medium">
                    Terça á Domingo - 16:00 as 00:00
                </span>
            </div>

        </div>

    </div>
    )
}