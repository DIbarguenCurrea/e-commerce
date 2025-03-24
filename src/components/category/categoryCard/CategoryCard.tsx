import React from 'react'
import Image from 'next/image'
import { categoriesToPreLoad } from '@/app/utils/preLoadData'

function CategoryCard() {
  return (
    <section className='hidden px-4 py-8 md:block'>
      <h2 className='text-2xl font-bold'>Categories</h2>
      <div className="grid grid-cols-4 gap-6 mt-6 md:grid-cols-3 lg:grid-cols-9">
        {categoriesToPreLoad.map((category, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:scale-105"
          >
            <div className="relative hidden w-full h-36 md:block">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xs font-semibold text-gray-800 md:text-lg ">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryCard