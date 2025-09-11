import React, { use, useEffect } from 'react'
import { dummyMyBookingsData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageBookings = () => {  
  
  const currency = import.meta.env.VITE_CURRENCY 
  const [bookings, setBookings] = React.useState([])
  
  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchOwnerBookings()
  }, [])

  return (
    <div className='px-4 pt-10 md:px-10 w-full '>
        <Title title="Manage Booking" subTitle="Track all customer bookings, approve or cancel requests, and menage booking statuses."/>

        <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>

          <table className='w-full text-sm text-left text-gray-600 border-collapse'>
            <thead className='text-gray-500'>
              <tr>
                <th className="p-3 font-medium">Car</th>
                <th className="p-3 font-medium ">Date Range</th>                
                <th className="p-3 font-medium">Total</th>
                <th className="p-3 font-medium ">Payment</th>
                <th className="p-3 font-medium">Actions</th>

              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index)=>(
                <tr key={index} className='border-t border-borderColor text-gray-500  '>
                
                 <td className='p-3 flex items-center gap-3'>
                  <img src={booking.car.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <p className='font-medium max-md:hidden'>{booking.car.brand} {booking.car.model}</p>
                 </td>
                 <td className='p-3 max-md:hidden'>
                  {booking.pickupDate.split('T')} to {booking.returnDate.split('T')[0]}
                 </td>

                 <td className='p-3'>{currency} {booking.price}</td>

                 <td className='p-3 max-md:hidden'>
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>offline</span>
                 </td>

                 <td className='p-3'>
                  {booking.status === 'pending' ? (
                    <select value={booking.status} className='px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none'>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="confrirmed">Confrirmed</option>
                    </select>
                  ): (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-500' : 'bg-rad-100 text-rad-500'}`}>{booking.status}</span>
                  )}
                 </td>
                </tr>

              ))}
            </tbody>
          </table>

        </div>
    </div>
  )
}

export default ManageBookings