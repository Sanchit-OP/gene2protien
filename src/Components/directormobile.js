import interview from '../Ui/interview.mp4';
function Directormobile() {
    return (
        <div className=' flex-col md:hidden '>
            <video width="1200" height="800"  controls className='rounded-xl  py-10 ' >
                <source src={interview} type="video/mp4" />
            </video>
            <div className='leading-7 font-normal mx-10 white'>
                <h1 className='text-3xl font-bold mx-2 mb-10 text-black'>Director’s Appeal</h1>
                We look to you for your support in our journey to take India a step closer to self-sufficiency.  Boycott and Swadeshi were two slogans which drove the Indian freedom struggle, now we appeal to the Indian in you to carry forward these to S&T in the 21st century where we can show to the world that “Make in India” truly is successful.<br /><br />
                <div className='font-bold pb-10'>
                    Dr. Shradha Goenka<br />
                    Managing Director <br />
                </div>
            
            </div>
        </div>
    )
}
export default Directormobile;