import './style.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
const PorductDetail = () =>{
    return(
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
            <div className='flex justify-between items-center px-4 pt-2'>
                <h2 className='font-medium text-xl'>Details</h2>
                <XMarkIcon className="size-6 text-black" />
                
            </div>
        </aside>

    )

}
export default PorductDetail