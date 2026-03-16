import { CustomPagination } from "@/components/custom/CustomPagination"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import ProductsGrid from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"

const GenderPage = () => {

    const { data } = useProducts()

    const { gender } = useParams()

    const genderLabel = gender === "men"
        ? "Hombres"
        : gender === "women"
            ? "Mujeres"
            : "Niños"

    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} subTitle="Ropa minimalista y elegante inspirada en el diseño futurista de Teslo. Calidad premium para un estilo atemporal." />

            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 1} />
        </>
    )
}
export default GenderPage