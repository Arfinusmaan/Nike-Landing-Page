import { star } from "../assets/icons"


const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] cursor-pointer" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="font-semibold text-2xl 
        font-palanquin mt-2 leading-normal">{name}</h3>
        <p className="font-semibold text-2xl 
        font-montserrat text-coral-red mt-2 leading-normal ">{price}</p>
    </div>
  )
}

export default PopularProductCard
