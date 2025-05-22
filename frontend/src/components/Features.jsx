import React from 'react'
import { FaShippingFast } from 'react-icons/fa' // ✅ fixed
import { MdCurrencyExchange } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { TbPackageImport } from 'react-icons/tb'

const Features = () => {
  return (
    <section className="max-padd-container bg-primary mt-16 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="flexCenter gap-x-4">
          <FaShippingFast className="text-4xl" />
          <div>
            <h5 className="medium-18">Free Shipping</h5>
            <p>On Above Rupees 1000 order</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4">
          <MdCurrencyExchange className="text-4xl" />
          <div>
            <h5 className="medium-18">Easy Exchange</h5>
            <p>Hassle-free returns</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4">
          <BiSupport className="text-4xl" />
          <div>
            <h5 className="medium-18">24/7 Support</h5>
            <p>Always here for you</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4">
          <TbPackageImport className="text-4xl" />
          <div>
            <h5 className="medium-18">Secure Packaging</h5>
            <p>We pack it with care</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
