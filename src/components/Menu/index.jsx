import { Link } from "react-router-dom";

export default function Menu(){
    return(
      
        <aside className='w-48 bg-gray-900 text-white p-6 space-y-4'>
        <h2 className="text-xl font-bold">
          <Link to="/">Menu</Link>
        </h2>
        <nav>
          <ul className="space-y-2">
            <li><Link to="/users" className="block p-2 rounded hover:bg-gray-700">Usuários</Link></li>
            <li><Link to="/products" className="block p-2 rounded hover:bg-gray-700">Produtos</Link></li>
          </ul>
        </nav>
      </aside>
    );
}