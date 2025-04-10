export default function ListUsers({users, onEdit, onDelete}){
    return(
        <table className="min-w-full bg-white shadow-md roundeed-lg overflow-hidden mt-5">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm font-bold">
                <tr>
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Nome</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Matricula</th>
                    <th className="px-4 py-3 text-left">Senha</th>
                    <th className="px-4 py-3 text-left">Telefone</th>
                    <th className="px-4 py-3 text-left">Endereço</th>
                    <th className="px-4 py-3 text-left">Cargo</th>
                    <th className="px-4 py-3 text-left">Ações</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.registration}</td>
                            <td className="px-4 py-2">{user.password}</td>
                            <td className="px-4 py-2">{user.phone}</td>
                            <td className="px-4 py-2">{user.address}</td>
                            <td className="px-4 py-2">{user.role}</td>
                            <td className="px-4 py-2 flex gap-2">
                                <button 
                                    onClick={() => onEdit(user)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
                                <button 
                                    onClick={() => onDelete(user.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    );
}