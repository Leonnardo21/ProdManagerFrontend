export default function ListProducts({products, onEdit, onDelete}){
    return(
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-5">
      <thead className="bg-gray-200 text-gray-700 uppercase text-sm font-bold">
        <tr>
          <th className="px-4 py-3 text-left">ID</th>
          <th className="px-4 py-3 text-left">Nome</th>
          <th className="px-4 py-3 text-left">Descrição</th>
          <th className="px-4 py-3 text-left">Código de Barras</th>
          <th className="px-4 py-3 text-left">Categoria</th>
          <th className="px-4 py-3 text-left">Fornecedor</th>
          <th className="px-4 py-3 text-left">Preço</th>
          <th className="px-4 py-3 text-left">Lote</th>
          <th className="px-4 py-3 text-left">Quantidade</th>
          <th className="px-4 py-3 text-left">Data de Fabricação</th>
          <th className="px-4 py-3 text-left">Data de Validade</th>
          <th className="px-4 py-3 text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2">{product.id}</td>
            <td className="px-4 py-2">{product.name}</td>
            <td className="px-4 py-2">{product.description}</td>
            <td className="px-4 py-2">{product.codeBar}</td>
            <td className="px-4 py-2">{product.category}</td>
            <td className="px-4 py-2">{product.supplier}</td>
            <td className="px-4 py-2">R$ {Number(product.price).toFixed(2)}</td>
            <td className="px-4 py-2">{product.lot}</td>
            <td className="px-4 py-2">{product.quantity}</td>
            <td className="px-4 py-2">{product.manufacture.split("T")[0]}</td>
            <td className="px-4 py-2">{product.expiration.split("T")[0]}</td>
            <td className="px-4 py-2 flex gap-2">
              <button
                onClick={() => onEdit(product)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}