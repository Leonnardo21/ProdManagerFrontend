import { Package, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getUsers, getProducts } from "../../services/api";

export default function Main(){
    const [productCount, setProductCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const products = await getProducts();
                const users = await getUsers();
                setProductCount(products.data.length);
                setUserCount(users.data.length);

            }catch(error){
                console.error("Erro ao buscar dados do dashboard:", error);
            }
        };
        fetchData();
    }, [])

    return(
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 max-w-sm">
                    <Package className="w-10 h-10 text-green-600" />
                    <div>
                        <p className="text-gray-500 text-sm">Produtos Cadastrados</p>
                        <p className="text-2xl font-semibold">{productCount}</p>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 max-w-sm">
                    <Users className="w-10 h-10 text-blue-600" />
                    <div>
                        <p className="text-gray-500 text-sm">Usuários Cadastrados</p>
                        <p className="text-2xl font-semibold">{userCount}</p>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
}