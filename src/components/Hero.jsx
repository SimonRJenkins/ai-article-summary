import { logo } from '../assets'

const Hero = () => {
  return (
    <header class="w-full flex justify-center items-center flex-col">
<nav className="flex justify-between items-center w-full mb-10 pt-3">
  <img src={logo} alt="Website Logo" className="w-28 object-contain"/>
</nav>

<h1 className="head_text">Summarise Articles with <br classname="max-md:hidden" /> 
<span className="orange_gradient">OpenAI GPT-4</span>
</h1>
<h2 className="desc">Our innovative web tool allows you to effortlessly distill lengthy articles into concise summaries with the power of OpenAI. Just paste the article link, and let Simple Summary do the work, providing you with clear and efficient summaries in seconds. Simplify your reading experience today!</h2>
    </header>
  )
}

export default Hero