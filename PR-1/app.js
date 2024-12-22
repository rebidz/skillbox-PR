import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const upload = document.getElementById('upload');
const image = document.getElementById('image');
let cropper;

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        image.src = e.target.result;

        if (cropper) {
            cropper.destroy();
        }

        cropper = new Cropper(image, {
            aspectRatio: 1,
            autoCropArea: 1,
        });
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('crop').addEventListener('click', () => {
    const canvas = cropper.getCroppedCanvas();
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cropped-image.png';
        a.click();
    });
});