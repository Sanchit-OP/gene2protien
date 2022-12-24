import { motion } from 'framer-motion';
import React from 'react';
export default function DiscriptionMobile(){
    return(
        <motion.div className='block mt-64 mx-8 md:hidden' animate={{y:-100} } >
            <div className=''>
                <h1 className=' text-[#107586] font-[poppins] font-semibold  text-3xl mb-10'> Velit do sint magna laboris sunt  </h1>
                <p className='text-white ml-3  text-sm font-semibold leading-[1.2rem]'> 
                    Esse officia adipisicing qui est excepteur ullamco nostrud excepteur eu. Eiusmod fugiat ad est eiusmod commodo voluptate reprehenderit eu cillum officia consectetur incididunt. Do Lorem et magna ad non laboris fugiat non nisi eiusmod incididunt qui deserunt reprehenderit. Officia nostrud officia non non amet proident nulla esse laboris consequat tempor magna nostrud. Officia esse dolor laboris dolore velit Lorem eiusmod occaecat quis sint. Reprehenderit elit cupidatat magna duis ad labore tempor deserunt tempor ullamco esse eu incididunt ad. Consectetur consequat ad sunt duis quis dolore ipsum. 
                </p>
            </div>
        </motion.div>
    );
}