
import { chekIsSelected } from "./helpes";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product:Product) => void;
}
function ProductList({products,onSelectProduct,selectedProducts}:Props) {
    return (

        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                     key={product.id}
                     product={product}
                     isSelected={chekIsSelected(selectedProducts,product)}
                     onSelectProduct={onSelectProduct}
                    />
                ))}
            </div>

        </div>


    );
}

export default ProductList;
