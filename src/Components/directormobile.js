import interview from '../Ui/interview.mp4';
function Directormobile() {
    return (
        
        <div className='  bg-[#7cc576]  flex-col md:hidden '>
            <h1 className=' mt-10 pt-10 text-center text-3xl font-bold mx-2 mb-10 text-black'>Director’s Appeal</h1>
            <video width="1200" height="800"  controls className='rounded-xl border-vid my-10 px-2' >
                <source src={interview} type="video/mp4" />
            </video>
            <div className='leading-7 text-justify font-lg font-semibold mx-10 '>
                
                We look to you for your support in our journey to take India a step closer to self-sufficiency.  Boycott and Swadeshi were two slogans which drove the Indian freedom struggle, now we appeal to the Indian in you to carry forward these to S&T in the 21st century where we can show to the world that “Make in India” truly is successful.<br /><br />
                <div className='font-black pb-10'>
                    Dr. Shradha Goenka<br />
                    Managing Director <br />
                </div>
            
            </div>
        </div>
    )
}
export default Directormobile;