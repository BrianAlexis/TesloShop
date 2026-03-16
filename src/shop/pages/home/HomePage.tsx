import { CustomPagination } from "@/components/custom/CustomPagination"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import ProductsGrid from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"


const HomePage = () => {

    const { data } = useProducts()

    return (
        <>
            <CustomJumbotron title="All products" subTitle="Ropa minimalista y elegante inspirada en el diseño futurista de Teslo. Calidad premium para un estilo atemporal." />

            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 0} />
        </>
    )
}
export default HomePage