import { Heading } from "@chakra-ui/react"

import "../Components/css/info.css"

export default function info(){
  return (
    <div>
      <Heading size='lg' fontSize='50px' textAlign="center">
  Projects
</Heading>
<div className="card-main">
<div class="card red">
	<h1>Shopping Cart <br/><span>Based on Bootstrap</span></h1>
  
</div>
<div class="card yellow">
	<h1>GYM Website<br/><span>Based on Css </span></h1>
</div>
<div class="card blue">
	<h1>Portfolio<br/><span>Based on Chakra Ui</span></h1>
</div>
</div>
    </div>
  )
}