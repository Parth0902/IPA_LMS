import { Trash2 } from 'lucide-react';
import { useCart } from '../Context/CartContext';


export default function Cart() {
  const { cartItems, isLoading, removeItem } = useCart();

  const handleRemove = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    removeItem(id);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0; // 17.5% tax rate 0.175
  const total = subtotal + tax;

  if (isLoading) {
    return (
      <div className='mt-24'>
        <h1>Loading....</h1>
      </div>
    )
  }

  return (
    <div className="w-full py-6 flex flex-col  mt-20 px-10 h-[80vh]">
          <h1 className='text-3xl text-left font-bold px-6 mt-6'>Course cart</h1>
      <div className="w-full flex flex-col md:flex-row md:items-start md:gap-12 md:justify-between p-6 ">
        <div className="w-full md:w-3/4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-500 text-white rounded-xl">
                <th className="text-left p-3">Product</th>
                <th className="p-3">Quantity</th>
                <th className="p-3 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-32 aspect-video overflow-hidden rounded object-cover" />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">Price: ₹ {item.price.toFixed(2)}</p>
                        <button
                        type='button'
                          onClick={(event) => handleRemove(event, item.id)}
                          className="text-slate-700 text-sm hover:text-slate-950"
                        >
                          <Trash2
                            size={20}
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <input
                      type="number"
                      min="1"
                      value={1}
                      className="w-16 p-2 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="text-right pr-4">
                    ${(item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-1/4   border-t md:border-t-0 border-gray-200  md:p-5 shadow-md h-auto " >
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Tax</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 font-bold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-950 transition-colors flex items-center justify-center gap-2">
            Proceed to checkout →
          </button>
        </div>
      </div>
    </div>
  );
}