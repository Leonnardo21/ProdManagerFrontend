import { useEffect, useState } from "react";

export default function FormUser({saveUser, initialData}){
    const [user, setUser] = useState(initialData || {
        name: "",
        email: "",
        registration: "",
        password: "",
        phone: "",
        address: "",
        role: "",
      });
      
      useEffect(() => {
        if (initialData) {
          setUser(initialData);
        }
      }, [initialData]);
      
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        const userToSave = {
          ...user,
          role: Array.isArray(user.role)? user.role: [user.role], // transforma a string em array
        };
      
        saveUser(userToSave);
      
        if(!user.id){
          setUser({
            name: "",
            email: "",
            registration: "",
            password: "",
            phone: "",
            address: "",
            role: "",
          });
        }
      };
    return(
        <>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="block font-bold">Nome do usuário</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                    <div>
                    <label className="block font-bold">Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                    <div>
                    <label className="block font-bold">Matricula</label>
                    <input type="number" name="registration" value={user.registration} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                    <div>
                    <label className="block font-bold">Senha</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                    <div>
                    <label className="block font-bold">Telefone</label>
                    <input type="number" name="phone" value={user.phone} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                    <div>
                    <label className="block font-bold">Endereço</label>
                    <input type="text" name="address" value={user.address} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                    <div>
                    <label className="block font-bold">Cargo</label>
                    <input type="text" name="role" value={user.role} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
                    </div>
                </div>
                <button type="submit" className="bg-green-600 text-white p-2 rounded w-full mt-4 hover:bg-green-700">
                    Salvar Usuário
                </button>
            </form>
        </>
    );
}