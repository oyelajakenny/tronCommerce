'use client'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import useCartStore from '@/store'

const CartIcon = () => {
  const {items} = useCartStore()
  return (
    <Link href={"/cart"} className='group relative'>
<ShoppingBag className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
<span className='absolute -top-1 -right-1 bg-red-600 text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>
      {items.length?items.length:0}
</span>
    </Link>
  )
}

export default CartIcon