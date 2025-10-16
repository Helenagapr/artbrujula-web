import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import images from "src/shared/data/images";

export default function Home() {
  return (
    <>
      <CustomCarousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.imgURL} alt={image.imgAlt} />
          </div>
        ))}
      </CustomCarousel>
    </>
  );
}
