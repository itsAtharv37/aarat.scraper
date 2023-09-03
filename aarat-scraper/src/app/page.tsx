export default function Home() {
  return(
    <div className='master'>
      <div className=''>
        <div className=''></div>
      </div>
      <div className='flex justify-center font-bold mt-[10remm]'>
        <h1>
          <span className='ml-[0.8rem]'>a terminal scraper to extract data</span>
        </h1>
      </div>

      <div className='flex justify-center mt-[1.5rem] text-gray'>
        <p>
          scrape your sites without any code <br/>
          <span className='ml-[1.5rem]'>with data parsing, automation and much more</span>
        </p>
      </div>

      <div className='flex justify-center mt-[5rem]'>
        <button className='border-[3px] border-[#fff] h-[40px] w-[240px] rounded-md font-light'>
          <a href="#waitlist">
            sign up
          </a>
        </button>
        <button className='boder-1 bg-[#3F68F6] h-[40px] w-[240px] rounded-md font-thin ml-[1.5rem]'>
          learn more
        </button>
      </div>

      <div id="waitlist">
        <div className='rounded-1g mt-[400px] w-full h-[25rem] bg-gradient-to-b from-purple-500 to-blue-500'>
          <div className='flex justify-center underline underline-offset-5 decoration-3'>
            <p className='mt-[3rem] font-bold text-[30px]'>
              join our <span className='underline ring-offset-1'>beta</span> program
            </p>
          </div>

          <div className='flex justify-center mt-[0.5rem]'>
            <p>
              the beta version of aarat scraper will be out soon. drop your <br/>
              <span className='ml-[5rem]'>email below we will notify you once it's done!</span>
            </p>
          </div>

          <div className='flex justify-center'>
            <input placeholder='email' type='email' required className='text-left px-3 h-[40px] w-[240px] mt-[3rem] border-3 bg-[#fff] rounded-md focus:border-sky-500 focus:ring-sky-500 text-black'/>
            <button className='mt-[3rem] ml-[1.5rem] bg-sky-500 rounded-md h-[40px] w-[100px] text-sm font-medium'>join waitlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}
