import baseurl from "../utils/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
export const Show_product=({data, onclose})=>{

    const formatDate = (date) => {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        return formattedDate;  // Esto devolverá la fecha en formato YYYY-MM-DD
      }

    return(
        <div className="bg-[#707070]  h-full fixed left-0 top-0 w-full bg-opacity-50 z-50">
            <div className="bg-white w-[56%] flex flex-col  h-[75%] relative top-[15%] left-[23%] rounded-2xl flex justify-center">
                <span className="relative left-[89%] top-12">
                    <FontAwesomeIcon icon={faClose} className="size-10" onClick={onclose}/>
                </span>
                 <h1 className="flex justify-center p-2 text-medium"><strong>Detalles Del Producto</strong></h1>
                 <p className="flex justify-center">Nombre Del Producto: {data.nombre}</p>
                 <p className="flex justify-center">Imagen del producto</p>
                 <img className="w-[38%] h-[38%] rounded-xl ml-[33%] p-3" src={`${baseurl}/img/${data.imagen}`} alt="imagen del producto" />
                 <p className="flex justify-center"> Referencia: {data.referencia}</p>
                 <p className="flex justify-center"> Estado: {data.estado}</p>
                 <p className="flex justify-center"> fecha ingreso: {formatDate(data.fecha_ingreso)}</p>
                 <p className="flex justify-center"> Observacion : {data.observaciones || "No Hay Nada"}</p>
                 <p className="flex justify-center"> Precio Por Unidad  Al Por Mayor: {data.precio_por_mayor}</p>
                 <p className="flex justify-center"> Precio Por Unidad  Estimado De Venta: {data.precio_venta}</p>
                 <p className="flex justify-center"> Unidades Disponibles: {data.cantidad_almacenada}</p>            
            </div>
        </div>
    )
}
