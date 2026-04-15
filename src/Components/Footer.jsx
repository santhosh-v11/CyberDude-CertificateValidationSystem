import logo from "../assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <>
    <footer className="min-h-32 bg-[#170F0F] mx-auto p-5 mt-5 ">
        <div className="container   mx-auto">
            
        <div className="flex justify-between  items-start max-sm:flex-col sm:items-start ">
            <div className="flex-1">
                <img className="w-44" src={logo} alt="logo" />
                <p className="text-white text-md pt-2 whitespace-pre-line text-justify">
                    CyberDude Networks Pvt. Ltd. is Startup who crave to create creative product.</p>
                    <small className="text-white">We stimulate creativity in each and everything that appears to our eye. We love doing it.</small>
            </div>
        <div className="flex-1 flex justify-around max-sm:justify-start max-sm:pt-5"> 
            <div className=" p-5 max-sm:px-0" >
                <p className="text-white font-bold pb-2 uppercase">About</p>
                <ul class="space-y-2 text-sm text-white">
                    <li><a href="#" class="inline-block transition hover:text-orange-500 hover:translate-x-1">Company</a></li>
                    <li><a href="#" class="inline-block transition hover:text-orange-500 hover:translate-x-1">Location</a></li>
                    <li><a href="#" class="inline-block transition hover:text-orange-500 hover:translate-x-1">Contact feedback</a></li></ul>
            </div>
            <div className=" p-5 max-sm:px-0" >
                <p className="text-white font-bold pb-2 uppercase" >Social</p>
                <div className="text-white flex gap-2 text-lg">
                    <a href="#" class="inline-block transition hover:text-orange-500 "><i className="fa-brands fa-facebook hover:scale-120 transition-all duration-200"></i></a><br/>
                    <a href="#" class="inline-block transition hover:text-orange-500 "><i className="fa-brands fa-twitter hover:scale-120 transition-all duration-200"></i></a><br/>
                    <a href="#" class="inline-block transition hover:text-orange-500 "><i className="hover:scale-120 transition-all duration-200 fa-brands fa-instagram"></i></a><br/>
                    <a href="#" class="inline-block transition hover:text-orange-500 "><i className="fa-brands fa-linkedin hover:scale-120 transition-all duration-200"></i></a><br/>
                </div>
            </div>
        </div>
        </div>
            
        </div>
        {/* bottomfooter */}
        <div className="border-t-2 border-gray-600  w-full pt-5 text-center">
            <p className="text-white text-sm">&copy; 2026 CyberDude Networks Pvt. Ltd. All rights reserved.</p>
        </div>
    </footer>
    
    </>
  )}

export default Footer