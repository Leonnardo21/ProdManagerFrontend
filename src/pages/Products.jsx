import { useEffect, useState } from "react";
import FormProducts from "../components/Product/FormProduct";
import ListProducts from "../components/Product/ListProducts";
import Layout from "../components/Layout";
import { getProducts, updateProduct, deleteProduct, addProduct} from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
      }
    }
  
    fetchData();
  }, []);

  const saveProduct = async (product) => {
    if (selectedProduct) {
      await updateProduct(product);
    }else {
      await addProduct(product);
    }

    setIsModalOpen(false);
    setSelectedProduct(null);
    
    const response = await getProducts();
    setProducts(Array.isArray(response.data)? response.data : [])
  };

  // Excluir produto
  const handleDelete = async (id) => {
    await deleteProduct(id);
    const response = await getProducts();
    setProducts(Array.isArray(response.data)?response.data: []);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Cadastro de Produtos</h1>
        <p className="text-gray-600">Gerencie seus produtos cadastrados.</p>
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        onClick={() => {
          setSelectedProduct(null);
          setIsModalOpen(true);
        }}
      >
        Adicionar Produto
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {selectedProduct ? "Editar Produto" : "Novo Produto"}
            </h2>
            <FormProducts saveProduct={saveProduct} initialData={selectedProduct} />
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={() => setIsModalOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <ListProducts products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </Layout>
  );
}
