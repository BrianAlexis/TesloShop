import { Navigate, useNavigate, useParams } from 'react-router';
import useProduct from '@/admin/hooks/useProduct';
import CustomFullScreenLoading from '@/components/custom/CustomFullScreenLoading';
import { AdminProductForm } from './ui/AdminProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';

export const AdminProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const {
        isLoading,
        isError,
        data: product,
        productMutation } = useProduct(id || "")

    const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
    const subtitle =
        id === 'new'
            ? 'Aquí puedes crear un nuevo producto.'
            : 'Aquí puedes editar el producto.';

    const handleSubmit = async (productLike: Partial<Product> & { files?: File[] }) => {

        await productMutation.mutateAsync(productLike, {
            onSuccess: (data) => {
                toast.success("Product updated correctly", {
                    position: 'top-center'
                })
                navigate(`/admin/products/${data.id}`)
            },
            onError: (error) => {
                console.log(error)
                toast.error("Product update error")
            }
        })
    }

    if (isError) return <Navigate to={"/admin/products"} />
    if (isLoading) return <CustomFullScreenLoading />

    if (!product) return <Navigate to="/admin/products" />

    return <AdminProductForm
        title={title}
        subTitle={subtitle}
        product={product}
        onSubmit={handleSubmit}
        isPending={productMutation.isPending}
    />
};