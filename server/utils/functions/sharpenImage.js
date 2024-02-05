import sharp from 'sharp';

const sharpenImage = async (inputImagePath, outputImagePath) => {
    await sharp(inputImagePath)
        .sharpen()
        .toFile(outputImagePath);
};

export default sharpenImage;
