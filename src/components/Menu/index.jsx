export default function Menu(){
    return(
        <aside className='w-64 bg-gray-900 text-white p-6 space-y-4'>
        <h2 className="text-xl font-bold">Menu</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Usuários</a></li>
            <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Produtos</a></li>
          </ul>
        </nav>
      </aside>
    );
}