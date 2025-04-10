import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ListUsers from "../components/User/ListUsers";
import { getUsers, addUser, updateUser, deleteUser } from "../services/api";
import FormUser from "../components/User/FormUser";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getUsers();
                console.log("API Response:", data);
                setUsers(Array.isArray(data.data)? data.data:[]);
            } catch(error){
                console.log("Erro ao buscar usuários", error);
                setUsers([]);
            }
        }
        fetchData();
    }, []);
    
    const saveUser = async (user) => {
        if(selectedUser){
            await updateUser(user);
        }else {
            await addUser(user);
        }
        
        setIsModalOpen(false);
        setSelectedUser(null);
        
        const response = await getUsers();
        setUsers(Array.isArray(response.data)? response.data:[]);
    }
    
    const handleDelete = async (id) => {
        await deleteUser(id);
        const response = await getUsers();
        setUsers(Array.isArray(response.data)? response.data:[]);
    }
    const handleEdit = async (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }
    
    return(
        <Layout>
            <div className="text-center">
                <h1 className="text-2xl font-bold">Cadastro de Usuários</h1>
                <p className="text-gray-600">Aqui você pode cadastrar novos usuários.</p>
            </div>
            
            <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                onClick={() => {
                    setSelectedUser(null);
                    setIsModalOpen(true);
                }}
            >
                 Adicionar Usuário
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                        <h2 className="text-xl font-bold mb-4">
                            {selectedUser?"Atualizar usuário":"Novo usuário"}
                        </h2>
                        <FormUser  saveUser={saveUser} initialData={selectedUser}/>
                        <button 
                            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                            onClick={() => setIsModalOpen(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
            <ListUsers  users={users} onDelete={handleDelete} onEdit={handleEdit}/>
        </Layout>
    );
}