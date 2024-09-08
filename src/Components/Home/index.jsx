import { Component } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './index.css';

class Home extends Component {

    state = {
        images: [
            "Rectangle 39382.png",
            "Rectangle 39382.png",
            "Rectangle 39382.png"
        ],
        currentIndex: 0,
        activeButton: 'About Me',

    }

    addImageUrl = (event) => {
        const files = event.target.files;
        const imageUrls = Array.from(files).map(file =>
            URL.createObjectURL(file)
        );

        this.setState(prevState => ({
            images: [...prevState.images, ...imageUrls]
        }));
    };

    componentWillUnmount() {
        this.state.images.forEach(imageUrl => URL.revokeObjectURL(imageUrl));
    }

    handlePrev = () => {
        const { currentIndex, images } = this.state;
        const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: prevIndex });
      };
      
      handleNext = () => {
        const { currentIndex, images } = this.state;
        const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        this.setState({ currentIndex: nextIndex });
    };
    
    setActiveButton(buttonName) {
        this.setState({ activeButton: buttonName });
      }
      
      

    render() {
        const { images, currentIndex,activeButton  } = this.state;
        return (
            <div className="min-h-screen flex">
                <div className="hidden md:block h-screen w-5/6">
                </div>
                <div className="min-h-screen w-11/12">
                    <div className="boxShadow bg-[#4A4E54] mt-5  ml-10 mr-10 p-5 rounded-lg">
                        <div className="flex justify-between bg-[#111] text-[#A3ADB2] pl-3 p-1 rounded-full pr-3 mb-5">
                        <button
                            type="button"
                            className={`w-[195px] h-[45px]  rounded-full ${
                                activeButton === 'About Me' ? 'bg-[#28292F]' : ''
                            }`}
                            onClick={() => this.setActiveButton('About Me')}
                            >
                            About Me
                            </button>
                            <button
                            type="button"
                            className={`w-[195px] h-[45px]  rounded-full ${
                                activeButton === 'Experiences' ? 'bg-[#28292F]' : ''
                            }`}
                            onClick={() => this.setActiveButton('Experiences')}
                            >
                            Experiences
                            </button>
                            <button
                            type="button"
                            className={`w-[195px] h-[45px]  rounded-full ${
                                activeButton === 'Recommended' ? 'bg-[#28292F]' : ''
                            }`}
                            onClick={() => this.setActiveButton('Recommended')}
                            >
                            Recommended
                            </button>
                        </div>
                        <p className="mt-3 mb-5 mr-5">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                        <p className="mt-3 mb-5 mr-5">I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella.</p>
                    </div>
                    <hr className="ml-8 mr-8 h-[5px] bg-[#111] border-none my-5 rounded-full" />
                    <div className="boxShadow bg-[#4A4E54] ml-10 mr-10 p-5 rounded-lg ">
                        <div className="flex justify-between items-center">
                            <button type="button" className="px-8 py-3 bg-[#111] mt-2 mb-4  rounded-lg ">Gallery</button>
                            <div className="flex items-center">
                            <input
                                type="file"
                                id="fileInput"
                                className="absolute opacity-0 w-0 h-0"
                                accept="image/*"
                                onChange={this.addImageUrl}
                            />
                            <label
                                htmlFor="fileInput"
                                className="cursor-pointer shadoww bg-[#2c2f34] text-white text-center px-6 py-3 rounded-full shadow-xl flex items-center justify-center"
                            >
                                + Add Image
                            </label>


                                <div className="flex items-center mt-4 ml-4">
                                <button
                                    type="button"
                                    className="arrowbtn"
                                    onClick={this.handlePrev}
                                >
                                        <FaArrowLeft size={20} color="rgba(255, 255, 255, 0.7)" />
                                </button>
                                <button
                                    type="button"
                                    className="arrowbtn"
                                    onClick={this.handlePrev}
                                >
                                    <FaArrowRight size={20} color="rgba(255, 255, 255, 0.7)" />
                                </button>

                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden mt-4">
                            <div className="relative flex items-center transition-transform duration-300">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(${-currentIndex * 220}px)` }} 
                                >
                                {images.map((img, index) => (
                                    <img
                                    src={img}
                                    key={index}
                                    alt="upload"
                                    className="w-[200px] h-[200px] mr-5 rounded-lg grayscale hover:grayscale-0 transform transition-transform duration-300 hover:translate-x-[10px] hover:-translate-y-[10px]"                                    />
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="ml-8 mr-8 h-[5px] bg-[#111] border-none my-5 rounded-full" />
                </div>
            </div>
        );
    }
}

export default Home;
