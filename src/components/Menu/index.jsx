import { Link } from "react-router-dom";
import { Home, User, Box } from "lucide-react";

export default function Menu(){
    return(
      
        <aside className='w-48 bg-gray-900 text-white p-6 space-y-4'>
        <h2 className="text-xl font-bold">
          Menu
        </h2>
        <nav>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <Home className="w-5 h-5"/>
                Home
              </Link>
            </li>
            <li>
              <Link to="/users" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <User className="w-5 h-5"/>
                Usuários
              </Link>
            </li>
            <li>
              <Link to="/products" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <Box className="w-5 h-5"/>
                Produtos
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
}