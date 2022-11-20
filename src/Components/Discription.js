import { motion } from 'framer-motion';

function Discription(){
    return(
        <motion.div animate={{y:-100} } >
            <div className='m-32 ml-40'>
                <h1 className=' text-[#107586] mb-10 font-poppins  text-6xl leading-3'> Velit do sint magna laboris sunt  </h1>
                <p className='text-white mr-56 ml-24 text-sm font-semibold leading-4'> 
                    Esse officia adipisicing qui est excepteur ullamco nostrud excepteur eu. Eiusmod fugiat ad est eiusmod commodo voluptate reprehenderit eu cillum officia consectetur incididunt. Do Lorem et magna ad non laboris fugiat non nisi eiusmod incididunt qui deserunt reprehenderit. Officia nostrud officia non non amet proident nulla esse laboris consequat tempor magna nostrud. Officia esse dolor laboris dolore velit Lorem eiusmod occaecat quis sint. Reprehenderit elit cupidatat magna duis ad labore tempor deserunt tempor ullamco esse eu incididunt ad. Consectetur consequat ad sunt duis quis dolore ipsum. 
                </p>
            </div>
        </motion.div>
    );
}

export default Discription;