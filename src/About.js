import { Link } from "react-router-dom";

function About() {
    return <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pellentesque enim. Praesent ac congue elit, eget suscipit lectus. Suspendisse varius enim et leo mattis vulputate. Integer accumsan vestibulum urna, interdum dapibus libero eleifend eu. Aliquam imperdiet hendrerit orci, vel pharetra lorem iaculis sit amet. Pellentesque a enim urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
    <br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pellentesque enim. Praesent ac congue elit, eget suscipit lectus. Suspendisse varius enim et leo mattis vulputate. Integer accumsan vestibulum urna, interdum dapibus libero eleifend eu. Aliquam imperdiet hendrerit orci, vel pharetra lorem iaculis sit amet. Pellentesque a enim urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
    <br/><br/>
    Written by <Link to='/users/ougo'>Ougo</Link>
    </p>;
}

export default About;