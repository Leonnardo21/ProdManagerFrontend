import { useEffect, useState } from "react";

export default function FormProducts({saveProduct, initialData}){
    const [product, setProduct] = useState(initialData || {
        name: "",
        description: "",
        codeBar: "",
        category: "",
        supplier: "",
        price: "",
        quantity: "",
        lot: "",
        manufacture: "",
        expiration: "",
      });

      useEffect(() => {
        if(initialData){
          setProduct(initialData);
        }
      }, [initialData])
    
      const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        saveProduct(product);
        setProduct({
          name: "",
          description: "",
          codeBar: "",
          category: "",
          supplier: "",
          price: "",
          quantity: "",
          lot: "",
          manufacture: "",
          expiration: "",
        });
      };

    return(
        <>
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-bold">Nome do Produto</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Descrição</label>
          <input type="text" name="description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Código de Barras</label>
          <input type="number" name="codeBar" value={product.codeBar} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Categoria</label>
          <input type="text" name="category" value={product.category} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Fornecedor</label>
          <input type="text" name="supplier" value={product.supplier} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Preço</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Quantidade</label>
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Lote</label>
          <input type="text" name="lot" value={product.lot} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Fabricação</label>
          <input type="date" name="manufacture" value={product.manufacture} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
        <div>
          <label className="block font-bold">Validade</label>
          <input type="date" name="expiration" value={product.expiration} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </div>
      </div>
      <button type="submit" className="bg-green-600 text-white p-2 rounded w-full mt-4 hover:bg-green-700">
        Salvar Produto
      </button>
    </form>

</>
    );
}