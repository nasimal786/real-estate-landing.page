import React from 'react'

const Payments = () => {
  return (
    <div className='payments mt-24 mb-24 p-8 text-center'>
        <div className='pay-container'>
            <div>
                <p className='text-red-400 font-bold'>Payment Plan</p>
                <h1 className='text-5xl font-bold mt-4'>Starting From AED 1.4M</h1>
                <p className='mt-4 text-gray-500'>Book With 2% & Get a Free Travel Package to Dubai for 2 People</p>
            </div>
            <div className='pay-carosal'>
                <div className='pay-booking'>
                    <img src='./images/pay1.png' alt="booking" width="180px" />
                    <p className='mt-5 text-xl text-blue-500'>10%</p>
                    <p className='mt-5'>Downpayment At Booking</p>
                    <p className='text-red-500 mt-5 font-bold'>Book Now</p>
                </div>
                <div className='pay-booking'>
                    <img src='./images/pay2.png' alt="construction" width="180px" />
                    <p className='mt-5 text-xl text-blue-500'>60%</p>
                    <p className='mt-5'>During Construction</p>
                    <p className='text-red-500 mt-5 font-bold'>Book Now</p>
                </div>
                <div className='pay-booking'>
                    <img src='./images/pay3.png' alt="handover" width="180px" />
                    <p className='mt-5 text-xl text-blue-500'>40%</p>
                    <p className='mt-5'>On Handover in Q4 2026</p>
                    <p className='text-red-500 mt-5 font-bold'>Book Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payments