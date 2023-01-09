import FeaturesCard from "./FeaturesCard";

const Features = () => {
    return ( 
        <div className="features grid grid-cols-3">
            <FeaturesCard></FeaturesCard>
            <FeaturesCard></FeaturesCard>
            <FeaturesCard></FeaturesCard>
        </div>
     );
}
 
export default Features;