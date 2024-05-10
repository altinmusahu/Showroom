
export default function Products({picture}) {
    return(
        <>
        <div className="w-72 h-auto">
            <img src={picture} alt='product1' className='object-contain rounded-3xl transition duration-300 ease-in-out transform hover:scale-110'/>
        </div>
        </>
    );
}